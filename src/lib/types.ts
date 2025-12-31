export type Product = {
  id: string;
  handle: string;
  name: string;
  description: string;
  descriptionHtml: string;
  price: number;
  featuredImage: {
    url: string;
    width: number;
    height: number;
    altText: string;
    hint?: string;
  };
  images: {
    id: string;
    url: string;
    width: number;
    height: number;
    altText: string;
    hint?: string;
  }[];
  variants: Variant[];
  tags: string[];
  options: ProductOption[];
};

export type Variant = {
  id: string;
  title: string;
  price: number;
  imageId: string;
  color?: string; // e.g. 'Onyx Black'
  colorHex?: string; // e.g. '#000000'
  size?: string; // e.g. 'S', 'M', 'L'
};

export type ProductOption = {
  name: "Color" | "Size";
  values: string[];
};

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  products: Product[];
};

export type CartItem = {
  product: Product;
  variant: Variant;
  quantity: number;
};

export type MenuLink = {
  title: string;
  href: string;
}

export type MegaMenu = {
  title: string;
  href: string;
  columns: {
    heading: string;
    links: MenuLink[];
  }[];
  image: {
    src: string;
    alt: string;
    href: string;
    hint?: string;
  }
}

export type LookbookHotspot = {
  productId: string;
  product: Product;
  position: {
    x: number;
    y: number;
  };
};

export type Lookbook = {
  title: string;
  description: string;
  imageId: string;
  hotspots: LookbookHotspot[];
};