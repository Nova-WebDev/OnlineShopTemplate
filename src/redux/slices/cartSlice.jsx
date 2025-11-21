import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "cart_items";

const getCart = () => {
    try {
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
};

const initialState = {
    cartItems: getCart(),
    totalQuantity: getCart().reduce((sum, item) => sum + item.quantity, 0),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            state.cartItems.push({ ...item, quantity: 1 });
            state.totalQuantity += 1;
            localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems));
        },

        increaseItem: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(i => i.id === id);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
            }
            localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems));
        },

        decreaseItem: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(i => i.id === id);
            if (item) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                if (item.quantity <= 0) {
                    state.cartItems = state.cartItems.filter(i => i.id !== id);
                }
            }
            localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems));
        },

        removeItem: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(i => i.id === id);
            if (item) {
                state.totalQuantity -= item.quantity;
                state.cartItems = state.cartItems.filter(i => i.id !== id);
            }
            localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems));
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            localStorage.removeItem(CART_KEY);
        },
    },
});

export const { addItem, increaseItem, decreaseItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
