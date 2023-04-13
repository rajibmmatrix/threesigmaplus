import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  text?: string;
  link?: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
}

const Link: FC<Props> = ({text, link, onPress, containerStyle = {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.link}>{link}</Text>
    </TouchableOpacity>
  );
};

export default memo(Link);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
