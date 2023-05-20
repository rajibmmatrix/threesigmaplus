import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IAnswer, IExams} from 'types';

interface SessionsState extends IExams {
  question_number: number;
  answers: IAnswer[];
}

const initialState: SessionsState = {
  session_id: '',
  started_at: '',
  ended_at: null,
  subject_id: '',
  chapter_id: '',
  status: '',
  max_question_score: 0,
  problems: [],
  question_number: 0,
  answers: [],
};

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    setExam: (state, {payload}: PayloadAction<IExams>) => {
      state.session_id = payload.session_id;
      state.started_at = payload.started_at;
      state.ended_at = payload.ended_at;
      state.subject_id = payload.subject_id;
      state.chapter_id = payload.chapter_id;
      state.status = payload.status;
      state.max_question_score = payload.max_question_score;
      state.problems = payload.problems;
      state.question_number = 0;
      state.answers = [];
    },
    setQuestion: (state, {payload}: PayloadAction<number>) => {
      state.question_number = payload;
    },
    prevQuestion: state => {
      state.question_number =
        state.question_number > 0 ? state.question_number - 1 : 0;
    },
    nextQuestion: state => {
      state.question_number =
        state.question_number < state.problems?.length - 1
          ? state.question_number + 1
          : state.problems?.length - 1;
    },
    setAnswer: (state, {payload}: PayloadAction<IAnswer>) => {
      state.answers[state.question_number] = payload;
    },
    reset: state => {
      state.session_id = '';
      state.started_at = '';
      state.ended_at = null;
      state.subject_id = '';
      state.chapter_id = '';
      state.status = '';
      state.max_question_score = 0;
      state.problems = [];
      state.question_number = 0;
      state.answers = [];
    },
  },
});

export const {
  setExam,
  setQuestion,
  prevQuestion,
  nextQuestion,
  setAnswer,
  reset,
} = sessionsSlice.actions;

export default sessionsSlice.reducer;
