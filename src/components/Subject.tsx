import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  title: string;
  onPress: () => void;
}

const Subject: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Subject);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: COLORS.light,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.dark,
    textAlign: 'center',
  },
});
