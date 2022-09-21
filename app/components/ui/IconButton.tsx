import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { bgGrey } from '../../styles'

interface IIconButton {
	iconName: string
	onPress: () => void
}

const IconButton: FC<IIconButton> = ({ iconName, onPress }) => {
	return (
		<TouchableOpacity style={styles.iconButton}>
			<Ionicons name={iconName} size={24} color={bgGrey} />
		</TouchableOpacity>
	)
}

export default IconButton

const styles = StyleSheet.create({
	iconButton: {},
})
