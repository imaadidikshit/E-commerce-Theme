
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { CartItem } from "@/lib/types";

export default function OrderConfirmationPage() {
  const { lastOrder, clearCart } = useCart();
  const router = useRouter();
  const [confirmedOrder, setConfirmedOrder] = useState<CartItem[] | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);

  useEffect(() => {
    if (lastOrder && lastOrder.length > 0) {
      setConfirmedOrder(lastOrder);
      setOrderId(Math.floor(Math.random() * 90000) + 10000);
      clearCart();
    } else {
        // If there's no order data, redirect to home.
        // This handles refreshes or direct navigation.
        router.push('/');
    }
    // clearCart is intentionally omitted from dependencies to avoid re-clearing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastOrder, router]);

  if (!confirmedOrder) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-headline mb-4">Loading order details...</h1>
        <p className="text-muted-foreground mb-8">
          If you are not redirected, please return to the homepage.
        </p>
      </div>
    );
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

      <div className="max-w-md mx-auto text-left border rounded-lg p-6 bg-secondary/30 mb-8">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <p>
          <span className="font-semibold">Order Number:</span> #AETHER{orderId}
        </p>
      </div>

      <Button asChild size="lg">
        <Link href="/collections/all">Continue Shopping</Link>
      </Button>
    </div>
  );
}
