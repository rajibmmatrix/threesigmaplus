import Toast from 'react-native-simple-toast';

export function log(...params: any): void {
  if (__DEV__) {
    console.log(...params);
  }
}

export function showMessage(params: string = ''): void {
  Toast.show(params, Toast.LONG);
}

export function showError(params: string = ''): void {
  Toast.show(params, Toast.LONG);
}
