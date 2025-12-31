import type { Metadata } from "next";
import { Playfair_Display, PT_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/cart-context";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});


export const metadata: Metadata = {
  title: "Aether | Luxury Goods",
  description: "Radical minimalism for high-end clothing, jewelry, and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("light", fontSans.variable, fontSerif.variable)}>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased"
        )}
      >
        <CartProvider>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground">
              Skip to main content
            </a>
            <Header />
            <CartDrawer />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
