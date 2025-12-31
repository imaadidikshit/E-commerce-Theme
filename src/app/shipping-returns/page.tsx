
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, RotateCw, Package } from "lucide-react";

export const metadata = {
    title: "Shipping & Returns",
    description: "Information about our shipping policies and how to make a return.",
};


export default function ShippingReturnsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-headline">Shipping & Returns</h1>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Everything you need to know about how we get our products to you and how to make a return.
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <Truck className="w-7 h-7" />
                            Shipping Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="prose dark:prose-invert max-w-none">
                            <p>We are pleased to offer complimentary standard shipping on all domestic orders over $100. For orders under this threshold, a flat rate of $10 will be applied.</p>
                            <ul>
                                <li><strong>Standard Shipping:</strong> 5-7 business days.</li>
                                <li><strong>Expedited Shipping:</strong> 2-3 business days, available for a flat rate of $25.</li>
                            </ul>
                            <p>Orders are typically processed and shipped within 1-2 business days. You will receive a shipping confirmation email with tracking information as soon as your order leaves our workshop.</p>
                       </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <RotateCw className="w-7 h-7" />
                           Return Policy
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="prose dark:prose-invert max-w-none">
                            <p>We want you to be completely satisfied with your purchase. We accept returns of unworn, unwashed, and undamaged items within 30 days of the delivery date.</p>
                            <p>To initiate a return, please contact our customer care team at <a href="mailto:care@aether.com">care@aether.com</a> with your order number. We will provide you with a pre-paid return label and instructions.</p>
                            <p>Please note that a $10 restocking fee will be deducted from your refund amount. Refunds are processed to the original form of payment within 5-7 business days of us receiving your return.</p>
                       </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
