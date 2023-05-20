import {useCallback, useMemo} from 'react';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from './store';
import {
  nextQuestion,
  prevQuestion,
  reset,
  setAnswer,
  setExam,
  setQuestion,
} from './features/sessions/sessionsSlice';
import {useSaveAnswerMutation} from '~services';
import {IAnswer, IExams, IOptionAndQuestion, ISubmitAnswer} from 'types';

export const useDispatch: () => AppDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export const useAuth = () => {
  const {user, isFromSignup} = useSelector(state => state.auth);
  return useMemo(() => ({user, isFromSignup}), [user, isFromSignup]);
};

export const useProblems = () => {
  const dispatch = useDispatch();
  const problems = useSelector(state => state.sessions?.problems);
  const problem_number = useSelector(state => state.sessions?.question_number);

  return {
    problems: useMemo(() => problems, [problems]),
    question_number: useMemo(() => problem_number, [problem_number]),
    moveToProblem: useCallback(
      (n: number) => dispatch(setQuestion(n)),
      [dispatch],
    ),
  };
};

export const usePrevNextQuestion = () => {
  const dispatch = useDispatch();
  const question_number = useSelector(state => state.sessions.question_number);
  const problems = useSelector(state => state.sessions?.problems?.length);

  const next = useCallback(() => {
    dispatch(nextQuestion());
  }, [dispatch]);

  const prev = useCallback(() => {
    dispatch(prevQuestion());
  }, [dispatch]);

  const isFirst: boolean = useMemo(
    () => question_number === 0,
    [question_number],
  );

  const isLast: boolean = useMemo(
    () => question_number === problems - 1,
    [problems, question_number],
  );

  return {next, prev, isFirst, isLast};
};

export const useQuestion = () => {
  const dispatch = useDispatch();
  const problems = useSelector(state => state.sessions?.problems);
  const question_number = useSelector(state => state.sessions?.question_number);
  const session = useSelector(state => state.sessions?.session_id);

  const question: IOptionAndQuestion = useMemo(
    () => problems[question_number]?.problem_text,
    [problems, question_number],
  );

  const session_id: string = useMemo(() => session, [session]);

  const updateQuestion = useCallback(
    (data: IExams) => dispatch(setExam(data)),
    [dispatch],
  );

  const resetQuestion = useCallback(() => dispatch(reset()), [dispatch]);

  return {question, session_id, updateQuestion, resetQuestion};
};

export const useAnswers = () => {
  const dispatch = useDispatch();
  const {session_id} = useQuestion();
  const [saveAnswers] = useSaveAnswerMutation();
  const i = useSelector(state => state.sessions?.question_number);
  const no = useSelector(state => state.sessions?.problems[i]?.sequence_no);
  const mul = useSelector(
    state => state.sessions?.problems[i]?.multiple_correct_options,
  );
  const ans: IAnswer = useSelector(state => state.sessions.answers[i]);

  const answers: string[] = useMemo(
    () => (ans?.answer_submitted ? ans?.answer_submitted : []),
    [ans?.answer_submitted],
  );

  const isMultiple: boolean = useMemo(() => mul, [mul]);

  const times: number = useMemo(
    () => (ans?.time_spent ? ans.time_spent : 0),
    [ans?.time_spent],
  );

  const submitAnswer = useCallback(
    async ({answer, time}: ISubmitAnswer) => {
      const params = {
        sequence_no: no,
        time_spent: times + time,
        answer_submitted:
          !isMultiple || !answers
            ? [answer]
            : answers.includes(answer)
            ? [...answers.filter(e => e !== answer)]
            : [...answers, answer],
      };
      dispatch(setAnswer(params));
      await saveAnswers({
        id: session_id,
        params: [
          {
            ...params,
            answer_submitted: params?.answer_submitted?.join(','),
          },
        ],
      })
        .unwrap()
        .catch(err => console.log(err));
    },
    [answers, dispatch, isMultiple, no, saveAnswers, session_id, times],
  );

  return {submitAnswer, answers};
};

export const useSession = () => {
  const ans = useSelector(state => state.sessions?.answers);
  const pbm = useSelector(state => state.sessions?.problems);
  const total: number = useSelector(state => state.sessions?.problems?.length);

  const atten = ans?.filter(item => item?.answer_submitted)?.length;

  const unattempted: number = useMemo(() => total - atten, [atten, total]);

  return {
    unattempted,
    answers: useMemo(() => ans, [ans]),
    problems: useMemo(() => pbm, [pbm]),
  };
};
