import React, {FC, memo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  label?: string;
  isChecked: boolean;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  error?: string;
  onPress: () => void;
}

const Checkbox: FC<Props> = ({
  label,
  labelStyle = {},
  containerStyle = {},
  isChecked = false,
  error,
  onPress,
}) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress} style={[styles.container]}>
        {isChecked ? (
          <View style={[styles.checkbox, styles.checkedbox]} />
        ) : (
          <View style={styles.checkbox} />
        )}
        <Text style={[styles.title, labelStyle]}>{label}</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default memo(Checkbox);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: '400',
    color: COLORS.dark,
    marginLeft: 10,
  },
  checkbox: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.light,
    borderWidth: 1,
    borderColor: COLORS.dark,
    borderRadius: 2,
  },
  checkedbox: {
    backgroundColor: COLORS.dark,
  },
  error: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.error,
    marginTop: 6,
  },
});
