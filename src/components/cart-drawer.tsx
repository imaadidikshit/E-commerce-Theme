"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatPrice } from "@/lib/utils";
import { X, Minus, Plus } from "lucide-react";
import { FreeShippingProgressBar } from "./free-shipping-progress";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, cartTotal, removeFromCart, updateQuantity, totalItems } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0 bg-background">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="font-headline text-2xl">Your Cart ({totalItems})</SheetTitle>
        </SheetHeader>
        {cart.length > 0 ? (
          <>
            <ScrollArea className="flex-1">
              <div className="p-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.variant.id} className="flex gap-4">
                    <div className="relative h-24 w-24 rounded-md overflow-hidden">
                      <Image
                        src={item.product.images.find(img => img.id === item.variant.imageId)?.url || item.product.featuredImage.url}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Link href={`/products/${item.product.handle}`} className="font-semibold hover:underline" onClick={() => setIsCartOpen(false)}>
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">{item.variant.title}</p>
                        <p className="font-semibold">{formatPrice(item.variant.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border rounded-md">
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.variant.id, item.quantity - 1)}>
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.variant.id, item.quantity + 1)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="self-start" onClick={() => removeFromCart(item.variant.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="p-6 border-t bg-secondary/50 flex flex-col gap-4">
              <FreeShippingProgressBar cartTotal={cartTotal} />
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <Button size="lg" className="w-full">Proceed to Checkout</Button>
              <Button variant="link" onClick={() => setIsCartOpen(false)}>Continue Shopping</Button>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <h3 className="font-headline text-2xl mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
            <Button onClick={() => setIsCartOpen(false)} asChild>
                <Link href="/collections/all">Start Shopping</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
