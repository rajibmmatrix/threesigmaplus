import {StyleSheet} from 'react-native';
import {COLORS} from '~constants';

const styles = StyleSheet.create({
  flex: {flex: 1},
  shadow: {
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  selfCenter: {alignSelf: 'center'},
  alignCenter: {alignItems: 'center'},
  allCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
