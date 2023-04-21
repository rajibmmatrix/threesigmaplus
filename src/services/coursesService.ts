import {api} from '~app';
import {ICourses} from 'types';

const courseApi = api
  .enhanceEndpoints({addTagTypes: ['courses']})
  .injectEndpoints({
    endpoints: build => ({
      getCourses: build.query<ICourses[], void>({
        query: () => '/content/courses/',
        providesTags: () => ['courses'],
      }),
    }),
    overrideExisting: false,
  });

export const {useGetCoursesQuery} = courseApi;
