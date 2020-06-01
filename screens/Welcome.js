import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import BottomNavigation from '../components/BottomNavigation'


const Welcome = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>Hello Junaid!</Text>
      </SafeAreaView>
      <BottomNavigation />
    </View>
  )
}

export default Welcome
