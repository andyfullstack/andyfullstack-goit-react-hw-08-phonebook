import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const resp = await api.get('/contacts', {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return resp.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue, getState }) => {
    try {
      const resp = await api.post(
        '/contacts',
        { name, number },
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      return resp.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, getState }) => {
    try {
      const resp = await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return resp.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
