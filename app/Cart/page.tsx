import Footer from "../components/Footer"
import Header from "../components/Header"
import CartLayout from "../ui/CartLayout"



const page = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header  />
      <CartLayout />
      <Footer />
    </div>
  )
}

export default page
