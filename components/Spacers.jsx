import { View } from 'react-native'

export const HSpacer = ({ h = 12 }) => (
  <View style={{ height: h }} />
);

export const WSpacer = ({ w = 6 }) => (
  <View style={{ width: w }} />
);
