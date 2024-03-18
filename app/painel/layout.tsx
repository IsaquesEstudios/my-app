import Layout from "@/components/layout";
import Nav from "@/components/menu/nav";
// import { MercadoPago } from "@/context/MercadoPago";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <MercadoPago>
    <main className="flex">
      <Nav />
      <Layout>{children}</Layout>
    </main>
    // </MercadoPago>
  );
}
