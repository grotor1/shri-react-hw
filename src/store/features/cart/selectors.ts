import {RootState} from '@/store/store';

export const selectCartModule = (state: RootState) => state.cart;

export const selectProductAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0;

export const selectTotalAmount = (state: RootState) => selectCartModule(state).count;
