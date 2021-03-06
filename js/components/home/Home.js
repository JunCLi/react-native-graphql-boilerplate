import React from 'react'
import { Platform, Text, View} from 'react-native'

import { homeStyles } from '../../stylesheets/appStyles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default Home = () => {
	return (
		<View style={homeStyles.container}>
			<Text style={homeStyles.welcome}>Welcome to React Native!</Text>
			<Text style={homeStyles.instructions}>To get started, edit App.js</Text>
			<Text style={homeStyles.instructions}>{instructions}</Text>
		</View>
	)
}