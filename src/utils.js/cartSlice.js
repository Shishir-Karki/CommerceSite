import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },reducers:{
        addItems:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1); // directly removes the item from the array
            }
        }
    }
        

    
})

export const {addItems,removeItems} = cartSlice.actions
export default cartSlice.reducer