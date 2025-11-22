import { StyleSheet } from 'react-native'
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { HSpacer } from '../../components/Spacers'
import { globalStyles } from '../../constants/global_styles'

const Books = () => {
  return (
    <ThemedView style={[globalStyles.container, { alignItems: "stretch" }]}>

      <HSpacer />
      <ThemedText title={true} style={globalStyles.heading}>
        Your Reading List
      </ThemedText>

    </ThemedView>
  )
}

export default Books