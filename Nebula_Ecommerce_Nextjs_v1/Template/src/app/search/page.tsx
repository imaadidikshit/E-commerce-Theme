
import { getProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { SearchInput } from "@/components/search-input";

export async function generateMetadata({ searchParams }: { searchParams: { q: string } }) {
  return {
    title: searchParams.q ? `Search results for "${searchParams.q}"` : "Search",
  };
}

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || "";
  const products = await getProducts(query);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-headline text-center mb-4">
          Search
        </h1>
        <SearchInput />
      </div>

      {query && (
        <p className="text-center text-muted-foreground mb-8">
          Showing {products.length} result{products.length === 1 ? "" : "s"} for "{query}"
        </p>
      )}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        query && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-headline">No products found</h3>
            <p className="text-muted-foreground mt-2">
              We couldn't find any products matching your search. Try a different term.
            </p>
          </div>
        )
      )}
    </div>
  );
}
