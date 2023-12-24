import { Search } from "lucide-react"
import CartModal from "./modals/cart-modal"
import { Button } from "./ui/button"

const CartBar = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full h-20 border-b backdrop-blur-md border-slate-900 z-50"
    >
      <nav
        className="max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        <h1
          className="text-5xl font-bold text-slate-900"
        >
          Logo
        </h1>
        <div
          className="flex items-center space-x-4"
        >
          <Button
            variant='outline'
          >
            Buscar productos...
            <Search
              className="w-5 h-5 ml-8"
            />
          </Button>
          <CartModal />
        </div>
      </nav>
    </header>
  )
}

export default CartBar