import { configureStore } from '@reduxjs/toolkit';
import slice from "../slices/testSlice"

export default configureStore({
    reducer: {
        slice
    },
});
