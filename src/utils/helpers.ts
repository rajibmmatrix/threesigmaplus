import {Dimensions} from 'react-native';
import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export const sheight = height;
export const swidth = width;

export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function reset(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({index: 1, routes: [{name, params}]}),
    );
  }
}

export function randomColor() {
  return (
    'rgb(' +
    (Math.floor(Math.random() * 56) + 200) +
    ', ' +
    (Math.floor(Math.random() * 56) + 200) +
    ', ' +
    (Math.floor(Math.random() * 56) + 200) +
    ')'
  );
}

export function toDifTime(start?: any, end?: any): string {
  if (!start || !end) {
    return '00:00';
  }
  const time = new Date((end - start) * 1000);
  const h: number | string = time.getUTCHours();
  const m: number | string = time.getUTCMinutes();
  const s: number | string = time.getUTCSeconds();
  const hr = h > 9 ? `${h}:` : h === 0 ? '' : `0${h}:`;
  const mi = m > 9 ? `${m}:` : `0${m}:`;
  const sc = h !== 0 ? '' : s > 9 ? `${s}` : `0${s}`;
  return hr + mi + sc;
}

export function toString(params: string | number): string {
  return params as string;
}

export async function delay(time: number): Promise<void> {
  return await new Promise<void>(resolve => {
    setTimeout(() => resolve(), time * 1000);
  });
}

export const ALPHABETS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export const error_message = 'Something went wrong, Please try again later';
