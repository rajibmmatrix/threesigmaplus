import React, {FC, memo} from 'react';
import {View, ViewStyle} from 'react-native';

interface Props {
  height?: number | string;
  width?: number | string;
  style?: ViewStyle;
}

const Space: FC<Props> = ({height, width, style = {}}) => {
  let hw;
  if (height) {
    hw = {height};
  }
  if (width) {
    hw = {...hw, width};
  }
  return <View style={[style, hw]} />;
};

export default memo(Space);
