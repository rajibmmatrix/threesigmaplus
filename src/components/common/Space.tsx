import React, {FC, memo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

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
  return <View style={[styles.container, style, hw]} />;
};

export default memo(Space);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
