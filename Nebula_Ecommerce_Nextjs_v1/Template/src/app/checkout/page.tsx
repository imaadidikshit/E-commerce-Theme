
"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  shipping: z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    address: z.string().min(1, { message: "Address is required." }),
    apartment: z.string().optional(),
    city: z.string().min(1, { message: "City is required." }),
    country: z.string().min(1, { message: "Country is required." }),
    postalCode: z.string().min(1, { message: "Postal code is required." }),
  }),
  payment: z.object({
    cardNumber: z.string().regex(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, { message: "Please enter a valid card number." }),
    nameOnCard: z.string().min(1, { message: "Name on card is required." }),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\s*\/\s*([0-9]{2})$/, { message: "Use MM/YY format." }),
    securityCode: z.string().min(3).max(4),
  })
});

type FormData = z.infer<typeof formSchema>;

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/');
    }
  }, [cart, router]);


  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        shipping: {
            firstName: "",
            lastName: "",
            address: "",
            apartment: "",
            city: "",
            country: "United States",
            postalCode: "",
        },
        payment: {
            cardNumber: "",
            nameOnCard: "",
            expirationDate: "",
            securityCode: ""
        }
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Order submitted", data);
    clearCart(); // This will also set lastOrder in context
    router.push("/order-confirmation");
  };

  const shippingCost = 0; // Assuming free shipping for now
  const taxes = cartTotal * 0.08; // Example 8% tax
  const total = cartTotal + shippingCost + taxes;

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="lg:order-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        {cart.map(item => (
                            <div key={item.variant.id} className="flex items-center gap-4">
                                <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                                    <Image 
                                        src={item.product.images.find(img => img.id === item.variant.imageId)?.url || item.product.featuredImage.url}
                                        alt={item.product.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold">{item.product.name}</p>
                                    <p className="text-sm text-muted-foreground">{item.variant.title}</p>
                                </div>
                                <p className="font-medium">{formatPrice(item.variant.price * item.quantity)}</p>
                            </div>
                        ))}
                    </div>
                    <Separator />
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>{formatPrice(cartTotal)}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-muted-foreground">Shipping</span>
                            <span>{shippingCost > 0 ? formatPrice(shippingCost) : 'Free'}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-muted-foreground">Taxes</span>
                            <span>{formatPrice(taxes)}</span>
                        </div>
                    </div>
                    <Separator />
                     <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="lg:order-1">
          <h1 className="text-3xl md:text-4xl font-headline mb-8">Checkout</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <section className="space-y-6">
                <h2 className="text-xl font-headline">Contact Information</h2>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-headline">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                   <FormField
                    control={form.control}
                    name="shipping.firstName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="shipping.lastName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <FormField
                  control={form.control}
                  name="shipping.address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="shipping.apartment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <FormField
                        control={form.control}
                        name="shipping.city"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="shipping.country"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="shipping.postalCode"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
              </section>

               <section className="space-y-6">
                <h2 className="text-xl font-headline">Payment</h2>
                <p className="text-muted-foreground text-sm">All transactions are secure and encrypted.</p>
                <FormField
                  control={form.control}
                  name="payment.cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input placeholder="•••• •••• •••• ••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="payment.nameOnCard"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name on Card</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid grid-cols-2 gap-4">
                   <FormField
                    control={form.control}
                    name="payment.expirationDate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Expiration date (MM/YY)</FormLabel>
                        <FormControl>
                            <Input placeholder="MM / YY" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="payment.securityCode"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Security Code</FormLabel>
                        <FormControl>
                            <Input placeholder="CVC" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
              </section>

              <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Processing..." : `Pay ${formatPrice(total)}`}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
