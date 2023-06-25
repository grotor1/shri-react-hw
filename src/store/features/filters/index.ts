import {createSlice} from '@reduxjs/toolkit';
import {Genre} from '@/types/types';

const initialState: {name: string, genre: Genre | undefined, cinema: string | undefined} = {
  name: '',
  genre: undefined,
  cinema: undefined,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setNameFilter: (state, {payload}) => {
      state.name = payload;
    },
    setGenreFilter: (state, {payload}) => {
      state.genre = payload;
    },
    setCinemaFilter: (state, {payload}) => {
      state.cinema = payload;
    },
    reset: () => initialState
  }
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
