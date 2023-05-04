import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const sheight = height;
export const swidth = width;

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
