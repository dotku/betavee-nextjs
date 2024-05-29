// app/layout.tsx
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Betavee",
  description: "Your trusted supplier on Alibaba",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <header>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer>© 2024 Betavee</footer>
        </NextUIProvider>
      </body>
    </html>
  );
}
