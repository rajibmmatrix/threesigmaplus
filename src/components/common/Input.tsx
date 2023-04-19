import React, {FC, memo, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, Icons} from '~constants';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
}

const Input: FC<Props> = ({
  label,
  error,
  containerStyle = {},
  isPassword = false,
  ...props
}) => {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.title}>{label}</Text>}
      <View style={styles.body}>
        <TextInput
          placeholderTextColor={COLORS.primary_gray}
          secureTextEntry={secure}
          style={[styles.inputText, styles.input]}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setSecure(p => !p)}>
            <Icons.Eye width={20} height={20} />
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
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.secondary_gray,
    paddingHorizontal: 2,
  },
  body: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.6,
    borderBottomColor: COLORS.primary_title,
  },
  error: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.error,
    marginTop: 5,
  },
  inputText: {
    fontSize: 16,
    fontWeight: '400',
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
