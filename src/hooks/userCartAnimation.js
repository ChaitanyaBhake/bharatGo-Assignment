import {useState} from "react"

const useCartAnimation = ()=>{
    const [rotating , setRotating] = useState({})

    const triggerRotation = (productId) =>{
        setRotating((prev)=> ({...prev,[productId]:true}))
        setTimeout(()=>{
            setRotating((prev)=> ({...prev,[productId]:false}))
        },300)
    }

    return {rotating,triggerRotation}
}

export default useCartAnimation;