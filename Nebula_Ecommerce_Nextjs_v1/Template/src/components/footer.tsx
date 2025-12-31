
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AetherLogo } from "./icons";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-headline text-lg mb-4">Join The Inner Circle</h3>
            <p className="text-muted-foreground mb-4">Be the first to know about new arrivals, exclusive offers, and behind-the-scenes stories.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" variant="outline" className="bg-background">Subscribe</Button>
            </form>
          </div>
          <div>
            <h3 className="font-headline text-lg mb-4">Customer Care</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link href="/sizing" className="hover:text-foreground">Sizing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">Our Story</Link></li>
              <li><Link href="/journal" className="hover:text-foreground">Journal</Link></li>
              <li><Link href="/sustainability" className="hover:text-foreground">Sustainability</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <AetherLogo className="h-6 w-6" />
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Aether. All Rights Reserved.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
