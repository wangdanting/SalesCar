import EStyleSheet from 'react-native-extended-stylesheet';

const CommonStyles = EStyleSheet.create({
  borderBottom: {
    borderBottomWidth: '1rem',
    borderBottomColor: '$borderColorBase',
  },
  borderTop: {
    borderTopWidth: '1rem',
    borderTopColor: '$borderColorBase',
  },
  borderLeft: {
    borderLeftWidth: '1rem',
    borderLeftColor: '$borderColorBase',
  },
  borderRight: {
    borderRightWidth: '1rem',
    borderRightColor: '$borderColorBase',
  },
  largeBtn: {
    height: '110rem',
    backgroundColor: '$primaryColor',
    borderRadius: 2,
    borderWidth: 0,
  },
  btnActiveStyle: {
    backgroundColor: 'rgba(240, 131, 0, .9)',
  },
});

export default CommonStyles;
