# Premium Bakery Website

A modern, high-end editorial website built for a premium bakery or dessert studio. Designed to feel like a creative portfolio rather than a standard eCommerce template, it prioritizes striking typography, rich photography, and fluid animations to create an immersive, conversion-focused user experience.

## Features

- **Editorial Aesthetic:** Large, dramatic typography with a refined color palette (cream, espresso, earth green).
- **Advanced Animations:** Smooth, scroll-driven interactions, staggered text reveals, and parallax effects using GSAP and ScrollTrigger.
- **Asymmetric Layouts:** Non-traditional, masonry-style image galleries and product showcases that break out of the standard grid format.
- **Dynamic Interactions:** An infinite scrolling marquee, interactive hover states for products, and a custom built Order Inquiry modal.
- **Fully Responsive:** Carefully crafted layouts that adapt beautifully across desktop, tablet, and mobile devices without losing the high-end feel.
- **Optimized Media:** Integrated with Next.js `<Image>` component for automatic optimization of high-quality food photography.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, v15+)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animation:** [GSAP](https://gsap.com/) (GreenSock Animation Platform) + ScrollTrigger
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/`: Next.js app routing, global layouts, and root styling.
- `src/components/`: Reusable, modular UI components (e.g., `Hero.tsx`, `FeaturedCollection.tsx`, `Gallery.tsx`, `OrderModal.tsx`).
- `public/`: Static assets.

## License

This project is licensed under the MIT License.
