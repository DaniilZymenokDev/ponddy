import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { bgGrey } from '../../styles'

interface IIconButton {
	iconName: string
	onPress: () => void
	color?: string
	optionalStyles?: Object
}

const IconButton: FC<IIconButton> = ({ iconName, onPress, color, optionalStyles }) => {
	return (
		<TouchableOpacity style={{ ...styles.iconButton, ...optionalStyles }} onPress={onPress}>
			<Ionicons name={iconName} size={24} color={color || bgGrey} />
		</TouchableOpacity>
	)
}

export default IconButton

const styles = StyleSheet.create({
	iconButton: {},
})
