import {User} from '~app';

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginR {
  user: User;
  token: string;
}
