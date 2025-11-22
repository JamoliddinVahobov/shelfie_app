import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../hooks/use_theme'

export default function RootLayout() {
  const theme = useTheme()

  return (
   <>
    <StatusBar value="auto" />
    <Stack screenOptions={{
      headerStyle: {backgroundColor: theme.navBackground},
      headerTintColor: theme.title,
    }}>
      <Stack.Screen name='index' options={{ title: "Home", headerTitleAlign: 'center' }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
    </Stack>
   </>
  )
}

