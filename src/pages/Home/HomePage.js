import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts"
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq"
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
export const HomePage = () => {
  useDocumentTitle("Access latest Computer Science E-Books - CodeBook")
  return (
    <main>
        <Hero/>
        <FeaturedProducts/>
        <Testimonials/>
        <Faq/>
    </main>
  )
}
