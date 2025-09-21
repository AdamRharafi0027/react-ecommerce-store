import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Favorites: [],
}

const FavoriteSlices = createSlice({
    name: "Favorite",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.Favorites = [...state.Favorites, action.payload]
        },
        removeFavorite: (state, action) => {
            state.Favorites = state.Favorites.filter(fav => fav.id !== action.payload)
        }
    }
})

export const {addFavorite, removeFavorite} = FavoriteSlices.actions
export default FavoriteSlices.reducer