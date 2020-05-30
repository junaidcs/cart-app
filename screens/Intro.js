import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

const primaryColor = '#2a3b8f'
const secondaryColor = '#ef9807'

const styles = StyleSheet.create({
  buttonCircle: {
    // borderWidth: 1,
    height: 40,
    // backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    textAlign: 'center',
    color: primaryColor,
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 30,
    fontSize: 14,
    textAlign: 'center',
    // letterSpacing: 0.2,
  },
  image: {
    width: 280,
    height: 280,
  },
  btnText: {
    color: secondaryColor,
    // backgroundColor: secondaryColor,
    textAlign: 'center',
    // fontSize: 20,
    // width: 150,
    // padding: 10,
    // borderTopLeftRadius: 50,
    // overflow: 'hidden'
  },
})

// key: Warning: Failed child context type: Invalid child context `virtualizedCell.cellKey`
// of type `number` supplied to `CellRenderer`, expected `string`
const slides = [
  {
    key: 'one',
    title: 'Get your car insured, the road \nahead could be bumpy',
    text:
      "Whether it's a brand new model or a used \none, we offer multiple auto insurance covers \ndepending on what you need",
    image: require('./../assets/images/car_ins_min.png'),
    backgroundColor: 'red',
  },
  {
    key: 'two',
    title: 'Adventures should be \nsafe too',
    text:
      'Whether its a backpacking or a spiritual \njourney, we have a range of travel insurance \npolicies for you to choose from.',
    image: require('./../assets/images/travel_ins_min.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: "Plan for your family's future.",
    text:
      "Our life insurance policies are designed to \nsafeguard your family's future without the \nhassle of long-term commitments or \nexpensive premiums.",
    image: require('./../assets/images/health_ins_min.png'),
    backgroundColor: '#22bcb5',
  },
]

const IntroScreen = () => {
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
  }

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Ion
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
        <Text style={styles.btnText}>Next></Text>
      </View>
    )
  }

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.btnText}>Start</Text>
      </View>
    )
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      activeDotStyle={{ backgroundColor: secondaryColor }}
      showSkipButton={true}
    />
  )
}

export default IntroScreen
