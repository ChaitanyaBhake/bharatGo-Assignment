import cart from "../assets/cart.svg"
import profile from "../assets/profile.svg"
import emailIcon from "../assets/emailIcon.svg"
import myOrders from "../assets/myOrders.svg"
import profile2 from "../assets/profile2.svg"

export const NAV_ITEMS = [
    { type: "logo", label: "Shopi" },  
    { label: "All", route: "/" },
    { label: "Clothes", route: "/clothes" },
    { label: "Electronics", route: "/electronics" },
    { label: "Furnitures", route: "/furnitures" },
    { label: "Toys", route: "/toys" },
    { label: "My Orders", route: "/myOrders" },
    { label: "My Account", route: "/myAccount" },
  ];
  
  export const EMAIL = "anonymous@123.com";
  
  export const CART_ICON = cart;

  export const PROFILE_ICON = profile;

  export const EMAIL_ICON = emailIcon;

  export const MY_ORDER_ICON = myOrders;

  export const MOBILE_PROFILE_ICON = profile2;