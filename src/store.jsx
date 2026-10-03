import { configureStore } from '@reduxjs/toolkit';
import reducerfunc from './counterslice.jsx';


export const store = configureStore({
    // slicername:reducerfunc
    reducer: {
        counterslice: reducerfunc
        // Accessible in useSelector as state.counter
    },


})