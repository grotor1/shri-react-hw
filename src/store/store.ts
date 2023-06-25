import {configureStore} from '@reduxjs/toolkit';
import {cartReducer} from '@/store/features/cart';
import {movieApi} from '@/store/services/movieApi';
import {cinemasApi} from '@/store/services/cinemasApi';
import {reviewApi} from '@/store/services/reviewsApi';
import {filterReducer} from '@/store/features/filters';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, cinemasApi.middleware, reviewApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>
