import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps } from "../utility/types/CartItemProps.type";



// Define the initial state type
interface CartState {
  data: CartItemProps[];
    totalItem: number
  totalAmount: number
}

// Helper function to store in local storage
const storeInLocalStorage = (data: CartItemProps[]) => {
  localStorage.setItem("cart", JSON.stringify(data));
};


const initialState: CartState = {
  data: [],
  totalItem: 0,
  totalAmount: 0
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // // Add to cart reducer
    addItemCart(state, action: PayloadAction<CartItemProps>) {
      const existingItem = state.data.find((item) => item.id === action.payload.id);

      if (existingItem) {
   
        const tempCart = state.data.map((item) => {

          if (item.id === action.payload.id) {
            const newQty = item.quantity + action.payload.quantity;
            const newTotalPrice = newQty * item.price;

            return {
              ...item,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          }
              return item
        });
         state.data = tempCart;
      }   else{
        state.data.push({
            ...action.payload,
            totalPrice: action.payload.price * action.payload.quantity
        })

      }


      storeInLocalStorage(state.data)

    },




    //update cart to reducer
    updateItemCart(state, action: PayloadAction<{ id: string; quantity: number }>) {
        const {id,quantity} = action.payload
        const itemToUpdate = state.data.find((item) => item.id == id )

        if(itemToUpdate){
            const validQuantity = Math.max(quantity,1);
            itemToUpdate.quantity = validQuantity
            itemToUpdate.totalPrice = itemToUpdate.price * quantity
        }
        storeInLocalStorage(state.data);

    },

    // remove qunatity from cart
    removeItemCart(state,action){
            const tempCart = state.data.filter((item) => item.id != action.payload.id );
            state.data = tempCart
            storeInLocalStorage(state.data)
    },


    getTotalCart(state) {
        const totals = state.data.reduce(
            (acc, cartItem) => {
                acc.totalAmount += cartItem.totalPrice;  
                acc.totalItem += cartItem.quantity;      
                return acc;
            },
            { totalAmount: 0, totalItem: 0 } 
        );
    
        // Update the state with the new values
        state.totalAmount = totals.totalAmount;
        state.totalItem = totals.totalItem;
    }
    


},

});

// Export actions and reducer
export const { addItemCart,removeItemCart, updateItemCart,getTotalCart } = cartSlice.actions;
export default cartSlice.reducer;
