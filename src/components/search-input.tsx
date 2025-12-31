
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full items-center space-x-2">
      <Input
        type="search"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-base"
      />
      <Button type="submit" size="icon" aria-label="Search">
        <Search className="h-5 w-5" />
      </Button>
    </form>
  );
}
