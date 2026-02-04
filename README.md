# Rahul Kumar - Backend Developer & AI Engineer

[![Built with Cursor AI](https://img.shields.io/badge/Built_with-Cursor_AI-F0F0F0?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMuNSAyLjVMMy41IDEyLjVMMTMuNSAyMi41IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjAuNSAyLjVMMTAuNSAxMi41TDIwLjUgMjIuNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+&logoColor=000)](https://cursor.com)

<img width="1470" height="799" alt="Screenshot 2026-01-31 at 4 25 48 AM" src="https://github.com/user-attachments/assets/cd637f35-961c-4f4a-ac4d-4f1217fff74f" />

Welcome to my personal portfolio. This project represents the intersection of **scalable backend engineering** and **immersive digital art**. 

It is designed not just to display information, but to provide an **addictive, high-performance experience** that reflects my obsession with system quality and user experience.

## 🎨 Design Philosophy: "Void & Light"

The design system follows a "Void & Light" aesthetic—deep, atmospheric backgrounds punctuated by meaningful data and interaction.

-   **Atmospheric Depth**: A dynamic, mouse-reactive neural mesh background.
-   **Holographic Schematics**: Projects are visualized as 3D-tilting glass cards with schematic overlays, representing the "engineering under the hood."
-   **Addictive UX**: Infinite marquees, glitch typography, and micro-interactions that reward curiosity.
-   **Performance First**: Built with Next.js 16 and Tailwind v4 for zero-layout-shift loading and 60fps animations.

## 🚀 Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: Lucide React & DevIcons
-   **Deployment**: Docker & GitHub Pages

## 📂 Project Structure

```
src/
├── app/          # Next.js App Router (Pages & Layouts)
├── components/   # Modular, re-usable UI components (Hero, Projects, etc.)
├── data/         # Centralized resume data (Single source of truth)
├── types/        # TypeScript interfaces
└── lib/          # Utilities
```

## 🏃‍♂️ Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rahulrj1/personal-portfolio.git
    cd personal-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 🐳 Docker Support

This project is fully containerized for production consistency.

1.  **Update `next.config.ts`** — change from static export to standalone mode:
    ```ts
    const nextConfig: NextConfig = {
      // For static export (e.g., GitHub Pages), use:
      // output: 'export',
      // images: {
      //   unoptimized: true,
      // },
      // basePath: '/portfolio-revamped',
      // assetPrefix: '/portfolio-revamped/',

      // For Docker/local:
      output: 'standalone',
    };
    ```

2.  **Build and run:**
    ```bash
    docker-compose up --build -d
    ```
    
3.  **Open in browser:** Navigate to [http://localhost:3000](http://localhost:3000).

## 🌍 Hosting

This portfolio is static-export compatible and can be hosted freely on GitHub Pages, Vercel, or Netlify.

---

**© 2026 Rahul Kumar.** _Backend Developer / System Designer / AI Engineer._
