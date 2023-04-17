import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  title: string;
  onPress: () => void;
}

const Topic: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Topic);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 10,
    minHeight: 80,
    backgroundColor: 'rgba(151, 234, 154, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.dark,
    textAlign: 'center',
  },
});
