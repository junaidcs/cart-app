import React from 'react'
import { Text, View } from 'react-native'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>Splash Screens</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Splash
