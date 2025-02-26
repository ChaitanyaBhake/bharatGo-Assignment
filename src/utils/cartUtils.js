import { addToCart } from "../store/slices/cartSlice"


export const handleAddToCart  = (product,dispatch,triggerRotation)=>{
    triggerRotation(product.id)
    setTimeout(()=>{
        dispatch(addToCart(product))
    },300)
}