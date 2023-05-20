import React, {FC, memo, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, Icons} from '~constants';
import {_styles} from '~shared';

interface Props {
  question: string;
  answers: string;
}

const FAQItem: FC<Props> = ({question, answers}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={[styles.container, _styles.shadow]}>
      <Pressable onPress={() => setIsOpen(prev => !prev)}>
        <View style={_styles.rowCenterSpace}>
          <Text style={styles.title}>{question}</Text>
          {isOpen ? (
            <Icons.UpArrow width={24} height={24} />
          ) : (
            <Icons.DownArrow width={24} height={24} />
          )}
        </View>
      </Pressable>
      {isOpen && (
        <View style={styles.footer}>
          <Text style={styles.description}>{answers}</Text>
        </View>
      )}
    </View>
  );
};

export default memo(FAQItem);

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 24,
    backgroundColor: COLORS.background,
    borderRadius: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.RobotoMedium,
    color: COLORS.primary_text,
    lineHeight: 25,
  },
  footer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  description: {
    fontSize: 16,
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
    lineHeight: 21,
    textAlign: 'justify',
  },
});
