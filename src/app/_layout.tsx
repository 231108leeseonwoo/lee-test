import { Stack, Tabs } from 'expo-router'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: 'green'
    },
    headerTintColor: 'white',
    headerTitle: 'App',
    headerBackTitle: 'Back',
    headerTitleStyle: {
      fontSize: 32,
      fontWeight: 'bold'
    },
    headerTitleAlign: 'center'
  }} />
}

export default Layout
