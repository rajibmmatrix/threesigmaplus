import {api} from '~app';
import {ISubject} from 'types';

const subjectApi = api
  .enhanceEndpoints({addTagTypes: ['subjects', 'topics']})
  .injectEndpoints({
    endpoints: build => ({
      getSubject: build.query<ISubject[], void>({
        query: () => '/content/subjects/',
        providesTags: () => ['subjects'],
      }),
      getTopics: build.query<ISubject[], string>({
        query: id => `/content/subjects/${id}/topics`,
        providesTags: () => ['topics'],
      }),
    }),
    overrideExisting: false,
  });

export const {useGetSubjectQuery, useGetTopicsQuery} = subjectApi;
