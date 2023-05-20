import {isRejectedWithValue} from '@reduxjs/toolkit';
import type {MiddlewareAPI, Middleware} from '@reduxjs/toolkit';
import {logout} from '~app';
import {log, reset, storage} from '~utils';

/**
 * error Handle middleware
 * return error
 */
export const errorHandler: Middleware =
  (_api: MiddlewareAPI) => next => async action => {
    if (isRejectedWithValue(action)) {
      if (action.payload.status === 401) {
        await storage.removeToken();
        _api.dispatch(logout());
        reset('Login');
      }
      log('error: ', action?.payload?.data);
    }

    return next(action);
  };
