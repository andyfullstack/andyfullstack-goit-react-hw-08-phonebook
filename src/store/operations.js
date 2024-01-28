import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './api';

export const updateApiHeaders = () => {
  api.defaults.headers.common.Authorization = null;
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const resp = await api.post('/users/signup', body);
      return resp.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const resp = await api.post('/users/login', body);
      return resp.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      await api.post('/users/logout', null, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      updateApiHeaders();
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue, getState }) => {
    if (getState().auth.token === null) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      const resp = await api.get('/users/current', {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return resp.data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
