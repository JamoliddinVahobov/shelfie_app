import { StyleSheet, Image } from 'react-native'
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import { Link } from 'expo-router';
import { HSpacer } from '../components/Spacers';

const Home = () => {
   return (
    <ThemedView style={ styles.container }>
      <Image source={require('../assets/img/react-native.png')} 
       style={{ width: 200, height: 200, marginVertical: 20 }}>
      </Image>

      <ThemedText title style={[styles.title, {paddingBottom: 10}]}>
        The number 1
      </ThemedText>
        
      <ThemedText style={[{fontSize: 16, paddingBottom: 10}]}>Reading list app</ThemedText>

      <Link href="/login">
      <ThemedText>Login page</ThemedText>
      </Link>

      <HSpacer/>
      
      <Link href="/register">
      <ThemedText>Register page</ThemedText>
      </Link>

      <HSpacer/>

      <Link href="/profile">
      <ThemedText>Profile page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
    },
})

