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
  shadowSmall: {
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selfStart: {alignSelf: 'flex-start'},
  selfCenter: {alignSelf: 'center'},
  selfEnd: {alignSelf: 'flex-end'},
  alignCenter: {alignItems: 'center'},
  allCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenterSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
