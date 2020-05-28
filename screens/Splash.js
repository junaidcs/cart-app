import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/logo_splash.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a3b8f',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Splash
