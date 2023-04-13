import {User} from '~app';

//For Login request
export interface ILogin {
  username: string;
  password: string;
}

//For Signup request
export interface ISignup {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password1: string;
  password2: string;
}

//For Login and signup response
export interface IAuth {
  user: User;
  token: string;
}
