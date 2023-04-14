import {api} from '~app';
import {storage} from '~utils';
import {ILogin, IAuth, ISignup, User} from 'types';

const authApi = api.enhanceEndpoints({addTagTypes: ['auth']}).injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<User, void>({
      query: () => '/accounts/profile',
      providesTags: () => ['auth'] as any,
    }),
    login: build.mutation<IAuth, ILogin>({
      query: credentials => ({
        url: '/accounts/login',
        method: 'POST',
        body: credentials,
      }),
      async transformResponse(response: IAuth, _meta, _arg): Promise<IAuth> {
        if (response?.token) {
          await storage.saveToken(response.token);
        }
        return response as IAuth;
      },
    }),
    signup: build.mutation<IAuth, ISignup>({
      query: credentials => ({
        url: '/accounts/register',
        method: 'POST',
        body: credentials,
      }),
      async transformResponse(response: IAuth, _meta, _arg): Promise<IAuth> {
        if (response?.token) {
          await storage.saveToken(response.token);
        }
        return response as IAuth;
      },
    }),
    editProfile: build.mutation<IAuth, ILogin>({
      query: credentials => ({
        url: '/accounts/profile/update',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'] as any,
    }),
    logout: build.query<void, void>({
      query: () => ({url: '/accounts/logout', method: 'POST'}),
      async transformResponse(response: void, _meta, _arg): Promise<void> {
        await storage.removeToken();
        return response as void;
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfileQuery,
  useLoginMutation,
  useLazyGetProfileQuery,
  useEditProfileMutation,
  useSignupMutation,
  useLazyLogoutQuery,
} = authApi;
