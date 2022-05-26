import Hero from "../components/Hero";
import CategoriesList from '../components/CategoriesList';
import AboutPreview from '../components/AboutPreview';
import Find from "../components/Find";
import Instagram from "../components/Instagram";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <CategoriesList />
      <AboutPreview />
      <Find />
      <Instagram />
    </main>
  )
}
