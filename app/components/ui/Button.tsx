import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { buttonStyle, buttonTextStyle, primaryColor } from '../../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface IButton {
	onPress: () => void
	title?: string
	color: string
	iconName: string
	iconColor: string
	size?: number
}

const Button: FC<IButton> = ({
	onPress,
	title,
	color,
	iconName,
	size = 28,
	iconColor = 'white',
}) => {
	return (
		<TouchableOpacity style={{ ...buttonStyle, backgroundColor: color }} onPress={() => onPress}>
			<MaterialCommunityIcons name={iconName} size={size} color={iconColor} />
			<Text style={buttonTextStyle}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button
