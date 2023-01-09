import { createSlice } from '@reduxjs/toolkit';

import { Feature } from '../types';
import { getProfileAsync } from './async-actions';
import { ProfileData } from './types';

export interface ProfileDataState {
  data: ProfileData | null;
}

const initialState: ProfileDataState = {
  data: null,
};

const profileSlice = createSlice({
  name: Feature.profile,
  initialState,
  reducers: {
    clearProfile(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfileAsync.fulfilled, (state, { payload }) => {
      state.data = payload;
    });

    return builder;
  },
});

export const { clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
