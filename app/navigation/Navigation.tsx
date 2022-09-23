import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Learning from '../components/screens/Learning/Learning'
import Challenge from '../components/screens/Challenge/Challenge'
import LiveLessons from '../components/screens/LiveLessons/LiveLessons'
import Home from '../components/screens/home/Home'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { bgGrey, defaultGrey, defaultShadow, primaryColor } from '../styles'
import { Image, Platform, Text } from 'react-native'

const Tab = createMaterialBottomTabNavigator()

const Navigation: FC = () => {
	const homeName = 'Home'
	const challengeName = 'Challenge'
	const learningName = 'My learning'
	const lessonsName = 'Live Lessons'

	const iconPicker = (rn: string, focused: boolean, color: string, iconName: string) => {
		if (rn === lessonsName) {
			return focused ? (
				<Image source={require('../../assets/png/lessonsActive.png')} />
			) : (
				<Image source={require('../../assets/png/lessons.png')} />
			)
		} else if (rn === challengeName) {
			color = focused ? '#6ACFED' : defaultGrey
			return focused ? (
				<Image source={require('../../assets/png/challengeActive.png')} />
			) : (
				<Image source={require('../../assets/png/challenge.png')} />
			)
		} else {
			return <Entypo name={iconName} size={24} color={color} />
		}
	}

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={learningName}
				activeColor='#6ACFED'
				inactiveColor='black'
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color }) => {
						let iconName
						let rn = route.name

						if (rn === homeName) {
							iconName = 'home'
							color = focused ? '#6ACFED' : defaultGrey
						} else if (rn === challengeName) {
							iconName = 'target'
							color = focused ? '#6ACFED' : defaultGrey
						} else if (rn === learningName) {
							iconName = 'graduation-cap'
							color = focused ? '#6ACFED' : defaultGrey
						} else if (rn === lessonsName) {
							iconName = 'human-male-board'
							color = focused ? '#6ACFED' : defaultGrey
						}
						return iconPicker(rn, focused, color, iconName)
					},
				})}
				barStyle={{
					...defaultShadow,
					backgroundColor: 'white',
					marginBottom: Platform.OS === 'ios' ? -20 : 0,
				}}>
				<Tab.Screen name={'Home'} component={Home} />
				<Tab.Screen name={'Challenge'} component={Challenge} />
				<Tab.Screen name={'My learning'} component={Learning} />
				<Tab.Screen name={'Live Lessons'} component={LiveLessons} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
