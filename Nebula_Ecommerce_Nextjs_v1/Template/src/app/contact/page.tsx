
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the Aether team for support or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          We're here to help. Whether you have a question about our products, an order, or our brand, we'd love to hear from you.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your.email@example.com" />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="e.g. Question about an order" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message..." rows={5} />
                        </div>
                        <Button type="submit" size="lg">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Our Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href="mailto:care@aether.com" className="text-sm text-primary hover:underline">care@aether.com</a>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">Phone</p>
                            <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Press Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">For press and media inquiries, please contact:</p>
                    <a href="mailto:press@aether.com" className="text-sm font-semibold text-primary hover:underline">press@aether.com</a>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
