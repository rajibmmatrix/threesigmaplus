import {api} from '~app';
import {IExamResult, IExams, IReport, IStartExam, IUAnswer} from 'types';

const examApi = api
  .enhanceEndpoints({addTagTypes: ['exam', 'result']})
  .injectEndpoints({
    endpoints: build => ({
      getExam: build.query<IExams, void>({
        query: () => '/practice/sessions/active',
        providesTags: () => ['exam'],
      }),
      startExam: build.mutation<IExams, IStartExam>({
        query: credentials => ({
          url: '/practice/sessions/start',
          method: 'POST',
          body: credentials,
        }),
        invalidatesTags: ['exam'] as any,
      }),
      saveAnswer: build.mutation<void, IUAnswer>({
        query: ({id, params}) => ({
          url: `/practice/sessions/${id}/update`,
          method: 'POST',
          body: {updates: params},
        }),
      }),
      endExam: build.mutation<IExams, string>({
        query: id => ({
          url: `/practice/sessions/${id}/end`,
          method: 'POST',
        }),
      }),
      reportExam: build.mutation<IExams, IReport>({
        query: credentials => ({
          url: '/practice/questions/issues/report',
          method: 'POST',
          body: credentials,
        }),
      }),
      examResult: build.query<IExamResult, string>({
        query: id => `/practice/sessions/${id}/result`,
        providesTags: () => ['result'],
      }),
    }),
    overrideExisting: false,
  });

export const {
  useStartExamMutation,
  useGetExamQuery,
  useLazyGetExamQuery,
  useEndExamMutation,
  useSaveAnswerMutation,
  useExamResultQuery,
  useReportExamMutation,
} = examApi;
