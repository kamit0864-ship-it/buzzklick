import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("buzzklick_discount_popup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("buzzklick_discount_popup", "true");
    console.log("Email submitted:", email);
    setIsOpen(false);
  };

  const handleClose = () => {
    localStorage.setItem("buzzklick_discount_popup", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">

          <X className="h-4 w-4" />
        </button>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center" style={{ color: "#000000" }}>
            Get 10% Off Your First Project!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Join hundreds of B2B SaaS companies growing with Buzzklick
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full" />

          </div>
          <Button
            type="submit"
            className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-semibold text-lg h-12">

            Claim Your Discount
          </Button>
          <p className="text-xs text-center text-gray-500">
            By signing up, you agree to receive marketing emails from Buzzklick
          </p>
        </form>
      </DialogContent>
    </Dialog>);

}