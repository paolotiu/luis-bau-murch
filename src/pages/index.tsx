import Layout from "@/components/layout";
import ShopForm from "@/components/shopForm";
import ImagePanel from "@/components/ImagePanel";

export default function IndexPage() {
  return (
    <Layout title="Shop Sign-Up">
      <main className="flex flex-row font-fredoka text-black">
        <ShopForm />
        <ImagePanel />
      </main>
    </Layout>
  );
}
