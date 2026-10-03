import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Entri',
    marks: 100
};

// counterslice={actions,reducer}
export const counterslice = createSlice({
    name: 'counterslice',
    initialState,
    reducers: {
        increment: (state) => {
            state.marks += 1;
        },
        decrement: (state) => {
            state.marks -= 1;
        },
        reset: (state) => {
            state.marks = 0;
        },
    },

})

//counterslice - actions, reducer

export const { increment, decrement, reset } = counterslice.actions;

// Export the reducer to add to the store
export default counterslice.reducer;
