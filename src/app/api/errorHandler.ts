import {isRejectedWithValue} from '@reduxjs/toolkit';
import type {MiddlewareAPI, Middleware} from '@reduxjs/toolkit';
import {logout} from '~app';
import {storage} from '~utils';

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
      }
      console.log('error: ', action.payload.data);
    }

    return next(action);
  };
