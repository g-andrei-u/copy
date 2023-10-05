import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    articles: []
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        add: (state, action) => {
            state.articles = action.payload
        }, 
        filter: (state, action) => {
            state.articles = state.articles.filter(item => {
                const itemTitle = item.title.toLowerCase(); 
                return itemTitle.includes(action.payload.toLowerCase());
            })
        }
    }
});

export const { add, filter } = headerSlice.actions;
export default headerSlice.reducer