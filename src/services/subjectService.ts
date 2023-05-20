import {api} from '~app';
import {IAllTopics, IChapters, ISubject, ITopics} from 'types';

const subjectApi = api
  .enhanceEndpoints({addTagTypes: ['subjects', 'topics', 'chapters']})
  .injectEndpoints({
    endpoints: build => ({
      getSubject: build.query<ISubject[], void>({
        query: () => '/content/subjects/',
        providesTags: () => ['subjects'],
      }),
      getTopics: build.query<ITopics[], string>({
        query: id => `/content/subjects/${id}/topics`,
        providesTags: () => ['topics'],
      }),
      getAllChapters: build.query<IAllTopics, string>({
        query: id => `/content/subjects/${id}/chapters?q=`,
        providesTags: () => ['chapters'],
      }),
      getChapters: build.query<IChapters[], string>({
        query: id => `/content/topics/${id}/chapters`,
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetSubjectQuery,
  useGetTopicsQuery,
  useGetAllChaptersQuery,
  useLazyGetChaptersQuery,
} = subjectApi;
