
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrderConfirmationPage() {
  const { lastOrder, clearCart } = useCart();
  const router = useRouter();

   useEffect(() => {
    // This is a simple guard. In a real app, you'd get order details from a server-side source.
    // If there's no "last order" in the context (e.g., page refresh), redirect home.
    if (!lastOrder) {
      router.push('/');
    }
    
    // Clear cart on component mount if there's an order
    // In a real app, this might happen at checkout completion
    return () => {
        // clearCart();
    }
  }, [lastOrder, router]);

  if (!lastOrder) {
      return (
          <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-2xl font-headline mb-4">No recent order found.</h1>
              <p className="text-muted-foreground mb-8">Redirecting you to the homepage...</p>
          </div>
      )
  }

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl md:text-4xl font-headline mb-4">
        Thank you for your order!
      </h1>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Your order has been placed successfully. You will receive an email confirmation shortly.
      </p>
      
      {/* In a real app, you would fetch and display real order details here */}
      <div className="max-w-md mx-auto text-left border rounded-lg p-6 bg-secondary/30 mb-8">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <p><span className="font-semibold">Order Number:</span> #AETHER{Math.floor(Math.random() * 90000) + 10000}</p>
      </div>

      <Button asChild size="lg">
        <Link href="/collections/all">Continue Shopping</Link>
      </Button>
    </div>
  );
}
