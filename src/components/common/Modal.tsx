import React, {FC, PropsWithChildren, memo} from 'react';
import {Modal as RNModal, StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '~constants';
import {_styles} from '~shared';

interface Props extends PropsWithChildren {
  show: boolean;
  onClose: () => void;
  style?: ViewStyle;
}

const Modal: FC<Props> = ({show = false, onClose, style, children}) => {
  return (
    <RNModal
      animationType="none"
      transparent={true}
      visible={show}
      onRequestClose={onClose}>
      <View style={[styles.modal, _styles.allCenter]}>
        <View style={[styles.container, _styles.shadowSmall, style]}>
          {children}
        </View>
      </View>
    </RNModal>
  );
};

export default memo(Modal);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: COLORS.modal,
  },
  container: {
    padding: 20,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});
