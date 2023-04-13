import {User, api} from '~app';
import {ILogin, ILoginR} from 'types';
import {storage} from '~utils';

const authApi = api.enhanceEndpoints({addTagTypes: ['auth']}).injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<User, void>({
      query: () => '/accounts/profile',
      providesTags: () => ['auth'] as any,
    }),
    login: build.mutation<ILoginR, ILogin>({
      query: credentials => ({
        url: '/accounts/login',
        method: 'POST',
        body: credentials,
      }),
      async transformResponse(
        response: ILoginR,
        _meta,
        _arg,
      ): Promise<ILoginR> {
        if (response?.token) {
          await storage.saveToken(response.token);
        }
        return response as ILoginR;
      },
    }),
    editProfile: build.mutation<ILoginR, ILogin>({
      query: credentials => ({
        url: '/accounts/profile/update',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'] as any,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfileQuery,
  useLoginMutation,
  useLazyGetProfileQuery,
  useEditProfileMutation,
} = authApi;
