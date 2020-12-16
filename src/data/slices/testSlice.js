import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        userUID: '',
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
    },
});

export const { firebaseTasks, setName } = slice.actions;



export default slice.reducer;