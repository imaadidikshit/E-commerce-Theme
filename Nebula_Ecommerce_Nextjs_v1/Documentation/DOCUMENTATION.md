# Aether - Next.js E-commerce Template Documentation

## 1. Introduction

Thank you for purchasing the Aether Next.js E-commerce Template. This documentation will guide you through setting up, customizing, and understanding the template structure.

Aether is a modern, minimalist, and high-performance e-commerce template built with Next.js, React, and Tailwind CSS.

**Tech Stack:**
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **State Management:** React Context API (for Cart)

## 2. Getting Started

### Installation

1.  **Prerequisites:** Make sure you have Node.js (v18 or higher) and npm installed on your machine.
2.  **Unzip the package:** Unzip the downloaded file. You will find the template source code inside.
3.  **Install Dependencies:** Open your terminal, navigate to the project root directory, and run:
    ```bash
    npm install
    ```
4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:9002`.

## 3. Folder Structure

The project follows a standard Next.js App Router structure, which is clean and easy to navigate.

```
/
|-- src/
|   |-- app/                # Next.js App Router pages and layouts
|   |-- components/         # Reusable React components (UI, custom)
|   |-- context/            # React Context providers (e.g., CartContext)
|   |-- data/               # Your store's data (products, collections)
|   |-- lib/                # Utility functions, constants, and data fetching logic
|-- public/               # Static assets (like images, fonts)
|-- DOCUMENTATION.md      # This file
|-- package.json          # Project dependencies and scripts
|-- ... (config files)
```

## 4. Customization

One of the key features of this template is how easy it is to customize. Most of your store's content is managed through simple JSON files.

### 4.1. Managing Products and Collections

Product and collection data is managed through simple JSON files located in the `src/data/` directory. This allows you to easily update your store's inventory without touching the source code.

- **Products:** Edit `src/data/products.json`. Follow the existing structure to add, remove, or modify products.
- **Collections:** Edit `src/data/collections.json`. This file defines which products belong to which collection by referencing product IDs from `products.json`.
- **Images:** All placeholder images are defined in `src/lib/placeholder-images.json`. You should replace these with your own product and promotional images. Update the URLs here, and they will be reflected throughout the site. We recommend using a service like Cloudinary or even a simple S3 bucket to host your images.
- **Lookbook:** The interactive "Shop the Look" section on the homepage is configured in `src/lib/lookbook.json`. You can change the main image and the product hotspots by referencing a product ID.

### 4.2. Styling and Theme

The template uses Tailwind CSS with CSS variables for easy theme customization.

- **Colors & Fonts:** Open `src/app/globals.css`. At the top of this file, you'll find the `:root` block where you can change the HSL values for the primary, secondary, background, and other colors to match your brand. The font families are defined in `src/app/layout.tsx` using `next/font`.
- **Component Styles:** Most UI components are from ShadCN and can be styled by modifying their respective files in `src/components/ui`.

### 4.3. Navigation

- **Main Menu (Mega Menu):** The main "Shop" navigation is configured in `src/lib/data.ts` within the `getMegaMenu` function. You can modify the links and structure there by editing the `megaMenu` object.
- **Footer Links:** The links in the footer can be edited directly in the `src/components/footer.tsx` component. Simply find the `<ul>` lists and change the `href` and text for each `Link` component.

## 5. Deployment

This Next.js application can be deployed to any platform that supports Node.js, such as Vercel, Netlify, or Firebase App Hosting.

For Vercel (recommended for Next.js):
1.  Push your code to a GitHub, GitLab, or Bitbucket repository.
2.  Create a Vercel account and import the repository.
3.  Vercel will automatically detect that it's a Next.js project and configure the build settings.
4.  Deploy!

## 6. Support

If you have any questions or run into issues, please refer to the Envato item page for support instructions. Thank you for choosing Aether!
