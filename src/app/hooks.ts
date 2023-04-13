import {useMemo} from 'react';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from './store';

export const useDispatch: () => AppDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export const useAuth = () => {
  const user = useSelector(state => state.auth.user);
  return useMemo(() => ({user}), [user]);
};
