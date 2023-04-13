import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '~app';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev.threesigmaplus.com',
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
