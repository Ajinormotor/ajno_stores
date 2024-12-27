import Footer from "../components/Footer"
import Header from "../components/Header"
import CheckoutLayout from "../ui/CheckoutLayout"




const page = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header  />
      <CheckoutLayout />
      <Footer />
    </div>
  )
}

export default page
