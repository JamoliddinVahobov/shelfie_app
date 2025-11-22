import ThemedView from '../../components/ThemedView'
import { globalStyles } from '../../constants/global_styles'
import ThemedText from '../../components/ThemedText'
import { HSpacer } from '../../components/Spacers'

const Create = () => {
  return (
    <ThemedView style={globalStyles.container}>

      <ThemedText title={true} style={globalStyles.heading}>
        Add a New Book
      </ThemedText>
      <HSpacer h={40}/>

    </ThemedView>
  )
}

export default Create

