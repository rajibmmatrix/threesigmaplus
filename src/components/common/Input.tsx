import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
  Animated,
} from 'react-native';
import {COLORS, FONTS, Icons} from '~constants';

interface Props extends TextInputProps {
  label: string;
  error?: string;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
}

const Input: FC<Props> = ({
  label,
  error,
  containerStyle = {},
  isPassword = false,
  value = '',
  ...props
}) => {
  const position = useRef(new Animated.Value(value === '' ? 0 : 1)).current;
  const [isFocused, setIsFocused] = useState<boolean>(
    value === '' ? false : true,
  );
  const [secure, setSecure] = useState(isPassword);

  useEffect(() => {
    Animated.timing(position, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isFocused, position, value]);

  const top = position.interpolate({
    inputRange: [0, 1],
    outputRange: [26, 0],
  });

  const fontSize = position.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 14],
  });

  const color = position.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.primary_gray, COLORS.secondary_gray],
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.body}>
        {label && (
          <Animated.Text style={[styles.title, {top, fontSize, color}]}>
            {label}
          </Animated.Text>
        )}
        <TextInput
          secureTextEntry={secure}
          onFocus={e => {
            setIsFocused(true);
            props?.onFocus && props.onFocus(e);
          }}
          onBlur={e => {
            setIsFocused(value === '' ? false : true);
            props?.onBlur && props.onBlur(e);
          }}
          value={value}
          style={[styles.inputText, styles.input]}
          {...props}
          placeholder=""
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setSecure(p => !p)}>
            {secure ? (
              <Icons.EyeSlash width={20} height={20} />
            ) : (
              <Icons.Eye width={20} height={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  container: {paddingVertical: 5},
  title: {
    fontFamily: FONTS.RobotoRegular,
    position: 'absolute',
    paddingHorizontal: 2,
  },
  body: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.6,
    borderBottomColor: COLORS.primary_title,
    paddingTop: 16,
  },
  error: {
    fontSize: 14,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.error,
    marginTop: 5,
  },
  inputText: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.dark,
    paddingLeft: 2,
    paddingRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    paddingVertical: 0,
    margin: 0,
  },
});
