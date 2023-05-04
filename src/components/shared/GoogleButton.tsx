import React, {FC, memo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, Icons} from '~constants';

interface Props {
  title: string;
  loading?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const GoogleButton: FC<Props> = ({
  title,
  loading = false,
  onPress,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={COLORS.primary} size={'small'} />
      ) : (
        <>
          <Icons.GoogleIcon width={24} height={24} />
          <Text style={[styles.title, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default memo(GoogleButton);

const styles = StyleSheet.create({
  container: {
    height: 47,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary_gray,
    borderWidth: 1,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    lineHeight: 19,
    color: COLORS.primary_gray,
    marginLeft: 10,
  },
});
