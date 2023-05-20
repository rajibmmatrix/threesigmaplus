import React, {FC, memo, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Modal, Space} from '~common';
import {COLORS, FONTS, Icons} from '~constants';
import {useQuestion} from '~app';
import {useGetExamQuery} from '~services';
import {navigationRef, swidth} from '~utils';

const ActiveSessionModal: FC = () => {
  const navigation = useNavigation();
  const routeName = navigationRef?.current?.getCurrentRoute()?.name;

  const {data} = useGetExamQuery();
  const {updateQuestion} = useQuestion();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (data?.session_id && routeName !== 'Exam') {
      setShow(true);
    } else {
      setShow(false);
    }
    return () => {};
  }, [data?.session_id, routeName]);

  const handleContinue = () => {
    setShow(false);
    updateQuestion(data!);
    navigation.navigate('Exam');
  };

  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <View style={styles.container}>
        <Pressable style={styles.closeBtn} onPress={() => setShow(false)}>
          <Icons.CloseModal width={12} height={12} />
        </Pressable>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.desc}>
            You already have a active session. do you want to continue.
          </Text>
          <Space height={25} />
          <Button title="Continue" onPress={handleContinue} />
          <Space height={30} />
        </View>
      </View>
    </Modal>
  );
};

export default memo(ActiveSessionModal);

const styles = StyleSheet.create({
  container: {width: swidth - 65},
  closeBtn: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  content: {
    paddingTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.RobotoBold,
    color: COLORS.primary,
    textAlign: 'center',
  },
  desc: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_title,
    textAlign: 'center',
  },
});
