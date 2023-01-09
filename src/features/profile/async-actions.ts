import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getActionTypePrefix } from '../../app/utils';
import { ThunkApi } from '../../app/common-types';
import { ProfileAsyncActions, ProfileData } from './types';
import { Feature } from '../types';

export const getProfileAsync = createAsyncThunk<ProfileData, string, ThunkApi>(
  getActionTypePrefix<ProfileAsyncActions>(
    Feature.profile,
    ProfileAsyncActions.GET_PROFILE_DATA,
  ),
  async (address, { rejectWithValue, extra: { api, notification } }) => {
    try {
      const categories = await api.profile.getProfile(address);
      return categories;
    } catch (e) {
      const error = e as AxiosError;
      notification({
        type: 'error',
        message: error.response?.data.error || error.message,
      });
      return rejectWithValue(error.message);
    }
  },
);
