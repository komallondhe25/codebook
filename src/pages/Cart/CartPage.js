import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { CartEmpty } from "./components/CartEmpty"
import { CartList } from "./components/CartList"
import { useCart } from "../../context"
export const CartPage = () => {
  const { cartList } = useCart();
  useDocumentTitle(`Cart (${cartList.length })`)
  return (
    <main>   
      { cartList.length ? <CartList/> : <CartEmpty/>}       
    </main>
  )
}
