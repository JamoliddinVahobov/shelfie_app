import { StyleSheet } from 'react-native'
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { HSpacer } from '../../components/Spacers'
import { globalStyles } from '../../constants/global_styles'

const Profile = () => {
  return (
    <ThemedView style={globalStyles.container}>

      <ThemedText title={true} style={globalStyles.heading}>
        Your Email
      </ThemedText>
      <HSpacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <HSpacer />

    </ThemedView>
  )
}

export default Profile