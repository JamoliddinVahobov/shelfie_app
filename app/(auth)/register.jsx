import { StyleSheet } from 'react-native'
import { HSpacer } from '../../components/Spacers'
import { Link } from 'expo-router'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import MainButton from '../../components/MainButton'

const Register = () => {
   function submitRegisterForm() {
    console.log('Register form submitted');
  }

  return (
       <ThemedView style={styles.container}>
       <ThemedText title style={styles.title}>Register for an account</ThemedText>
       <MainButton onPress={submitRegisterForm} label={"Register"}/>
       <HSpacer h={100} />
       <Link href="/login">
       <ThemedText style={{ textAlign: 'center'}}>Login instead</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,  
  }
})