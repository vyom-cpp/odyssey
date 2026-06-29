import PoetrySection from "@/app/shelf/poetry/PoetrySection";
import PhotographySection from "@/app/shelf/photography/PhotographySection";
import Footer from "@/components/layout/Footer";

export default function ShelfPage() {
  return (
    <main>
      <PoetrySection />
      <div style={{ padding: "4rem 0", borderTop: "1px solid rgba(255, 255, 255, 0.05)", margin: "0 5%" }}></div>
      <PhotographySection />
      <Footer />
    </main>
  );
}
