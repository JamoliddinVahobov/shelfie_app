import { StyleSheet, Pressable, Text } from 'react-native'
import { Colors } from '../constants/Colors'

const MainButton = ({ onPress, label, style }) => {
  return (
    <Pressable 
     onPress={onPress}
     style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }, style]}>
     <Text style={{ color: '#f2f2f2'}}>{ label }</Text>
    </Pressable>
  )
}

export default MainButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',  
    marginHorizontal: 20,
  },
}) 