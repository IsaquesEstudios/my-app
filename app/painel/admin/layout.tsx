import Layout from "@/components/layout";
import Nav from "@/components/nav";
import { MercadoPago } from "@/context/MercadoPago";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MercadoPago>
      <div className="flex">
        <Nav />
        <Layout>{children}</Layout>
      </div>
    </MercadoPago>
  );
}
