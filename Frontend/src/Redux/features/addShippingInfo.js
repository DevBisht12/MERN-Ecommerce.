import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shippingAddress: JSON.parse(localStorage.getItem('shippingAddress')) || {}
}

export const shippingAddressSlice = createSlice({
    name: 'shippingAddress',
    initialState,
    reducers: {
        setShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            localStorage.setItem('shippingAddress', JSON.stringify(action.payload))
        }
    }
});

export const { setShippingAddress } = shippingAddressSlice.actions;

export default shippingAddressSlice.reducer;
