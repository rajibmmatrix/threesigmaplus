import React, {FC, memo} from 'react';
import type {PropsWithChildren} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Loader from './Loader';
import {COLORS} from '~constants';
import Space from './Space';

interface Props extends PropsWithChildren {
  isLoading?: boolean;
  style?: ViewStyle;
  header?: JSX.Element[] | JSX.Element | null;
  backgroundColor?: string;
  scrollEnabled?: boolean;
}

const Container: FC<Props> = ({
  isLoading,
  style = {},
  children,
  header = null,
  backgroundColor = COLORS.background,
  scrollEnabled = true,
}) => {
  return (
    <SafeAreaView style={[styles.container, style, {backgroundColor}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {header}
        {scrollEnabled ? (
          <ScrollView
            scrollEnabled
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            {children}
            <Space height={30} />
          </ScrollView>
        ) : (
          <>{children}</>
        )}
      </KeyboardAvoidingView>
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default memo(Container);

const styles = StyleSheet.create({
  container: {flex: 1},
});
