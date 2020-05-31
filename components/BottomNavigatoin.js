import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { View, Text } from 'react-native'

const Tab = createMaterialBottomTabNavigator()

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  )
}
const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default MyTabs
