import React, {FC, memo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS} from '~constants';

interface Props {
  text?: string;
  link?: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  linkStyle?: TextStyle;
}

const Link: FC<Props> = ({
  text,
  link,
  onPress,
  containerStyle = {},
  textStyle = {},
  linkStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <Text style={[styles.link, linkStyle]}>{link}</Text>
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
    fontWeight: '400',
    fontFamily: FONTS.InterRegular,
    color: COLORS.primary_title,
  },
  link: {
    color: COLORS.primary,
  },
});
