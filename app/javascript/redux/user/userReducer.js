import { createSlice } from '@reduxjs/toolkit';

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    currentUser: 0,
    status: 'no user'
  },
  reducers: {
    setCurrentUser: (state, action) => {
      console.log('action.payload', action.payload)
      const newState ={
      ...state,
      currentUser: action.payload,
      }
      return newState;
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
