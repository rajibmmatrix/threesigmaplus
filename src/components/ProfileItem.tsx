import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  title: string;
  onPress: () => void;
}

const ProfileItem: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(ProfileItem);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: COLORS.light,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.dark,
  },
});
