import React, {FC, memo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

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
        <ActivityIndicator
          color={'#ffffff'}
          size={'small'}
          style={styles.loader}
        />
      ) : (
        <Text style={[styles.title, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EC8A8A',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  loader: {
    //backgroundColor: '#ffffff',
  },
});
