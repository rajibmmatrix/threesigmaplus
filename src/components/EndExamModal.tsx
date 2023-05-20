import React, {FC, memo} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {Modal} from '~common';
import {COLORS, Icons, FONTS} from '~constants';
import {useSession} from '~app';

interface Props {
  show: boolean;
  onClose: () => void;
  onViewAll: () => void;
  onEnd: () => void;
}

const EndExamModal: FC<Props> = ({show, onClose, onViewAll, onEnd}) => {
  const {unattempted} = useSession();

  return (
    <Modal show={show} onClose={onClose}>
      <Pressable style={styles.closeBtn} onPress={onClose}>
        <Icons.CloseModal width={12} height={12} />
      </Pressable>
      <Text style={styles.title}>
        You have {unattempted} unattempted questions.
      </Text>
      <Text style={styles.description}>
        Do you want to end the session now?
      </Text>
      <View style={styles.footer}>
        <Pressable
          onPress={() => {
            onClose();
            onViewAll();
          }}
          style={[styles.button, styles.leftBtn]}>
          <Text style={styles.description}>View All Questions</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            onClose();
            onEnd();
          }}
          style={styles.button}>
          <Text style={styles.description}>End Session</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default memo(EndExamModal);

const styles = StyleSheet.create({
  closeBtn: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoBold,
    color: COLORS.primary,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    textAlign: 'center',
  },
  footer: {
    paddingTop: 32,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    minHeight: 55,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.buttons[0],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  leftBtn: {
    width: 133,
    backgroundColor: COLORS.buttons[1],
  },
});
