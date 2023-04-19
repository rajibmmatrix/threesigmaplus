import React, {FC, memo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  title: string;
  loading?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: FC<Props> = ({
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
        <ActivityIndicator color={COLORS.light} size={'small'} />
      ) : (
        <Text style={[styles.title, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  container: {
    height: 47,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary_button,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: COLORS.light,
  },
});
