import Footer from "./components/Footer";
import Header from "./components/Header";
import 'remixicon/fonts/remixicon.css'
import Hero from "./ui/Hero";
import AllProduct from "./ui/AllProduct";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ad from "./ui/Ad";
import AllCategory from "./ui/AllCategory";


export default function Home() {
  return (
  <div className="">
   <Header />
   <Hero />
   <AllCategory  />
   <AllProduct />
   <Ad  />
   <Footer />
  </div>
  );
}
