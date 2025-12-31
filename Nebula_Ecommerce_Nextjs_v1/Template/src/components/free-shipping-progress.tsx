"use client";

import { Progress } from "@/components/ui/progress";
import { formatPrice } from "@/lib/utils";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";
import { Truck } from 'lucide-react';

export function FreeShippingProgressBar({ cartTotal }: { cartTotal: number }) {
  const percentage = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remaining = FREE_SHIPPING_THRESHOLD - cartTotal;

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-2 text-sm">
        <Truck className="w-4 h-4 text-accent" />
        {remaining > 0 ? (
          <p>
            You're {formatPrice(remaining)} away from free shipping!
          </p>
        ) : (
          <p className="font-semibold">You've unlocked free shipping!</p>
        )}
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
