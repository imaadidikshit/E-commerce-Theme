"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { AetherLogo } from "./icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { MegaMenu } from "@/lib/types";
import { getMegaMenu } from "@/lib/data";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function MegaMenuComponent({ menu }: { menu: MegaMenu }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link" className="text-base text-inherit hover:no-underline hover:text-primary/70 dark:hover:text-primary/70">
          {menu.title}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-screen max-w-4xl p-8 rounded-lg shadow-xl" align="start">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 grid grid-cols-2 gap-8">
            {menu.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{column.heading}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} className="hover:text-primary/70 dark:hover:text-primary/70 transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <Link href={menu.image.href} className="block group overflow-hidden rounded-md">
              <Image
                src={menu.image.src}
                alt={menu.image.alt}
                width={400}
                height={500}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={menu.image.hint}
              />
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MobileNav({ menu }: { menu: MegaMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-xs bg-background p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <AetherLogo className="h-8 w-8" />
              <span className="font-bold text-lg">Aether</span>
            </Link>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <nav className="flex-1 p-6 space-y-6 overflow-y-auto">
            <div className="space-y-2">
              <h3 className="font-bold text-lg">{menu.title}</h3>
              {menu.columns.map(col => (
                <div key={col.heading} className="space-y-2 pt-2">
                  <h4 className="font-semibold text-md text-muted-foreground">{col.heading}</h4>
                  <ul className="space-y-2 pl-2">
                    {col.links.map(link => (
                      <li key={link.href}><Link href={link.href} onClick={() => setIsOpen(false)} className="block py-1">{link.title}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-2">
               <h3 className="font-bold text-lg">About</h3>
               <ul className="space-y-2">
                <li><Link href="#" onClick={() => setIsOpen(false)} className="block py-1">Our Story</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)} className="block py-1">Journal</Link></li>
               </ul>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenu, setMegaMenu] = useState<MegaMenu | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getMegaMenu().then(setMegaMenu);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 border-b border-border/50 backdrop-blur-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <AetherLogo className="h-8 w-8" />
              <span className="hidden sm:inline font-bold text-xl tracking-tight">
                Aether
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-4 text-sm">
              {megaMenu && <MegaMenuComponent menu={megaMenu} />}
              <Link href="#" className="text-base hover:text-primary/70 dark:hover:text-primary/70 transition-colors">Our Story</Link>
              <Link href="#" className="text-base hover:text-primary/70 dark:hover:text-primary/70 transition-colors">Journal</Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open cart with ${totalItems} items`}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  {totalItems}
                </span>
              )}
            </Button>
            {megaMenu && <MobileNav menu={megaMenu}/>}
          </div>
        </div>
      </div>
    </header>
  );
}
