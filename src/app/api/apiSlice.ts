import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {RootState} from '~app';

type CustomizedFetchBaseQueryError = {
  message?: string;
  errors?: {[key: string]: string};
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: <
    BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>
  >fetchBaseQuery({
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
