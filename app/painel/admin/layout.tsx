import { MercadoPago } from "@/context/MercadoPago";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MercadoPago>{children}</MercadoPago>;
}
