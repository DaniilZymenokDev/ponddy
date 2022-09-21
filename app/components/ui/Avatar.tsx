import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface IAvatar {
	name: string
	profileLink: () => void
}

const nameDivider = (name: string): string => {
	return `${name.split(' ')[0]}\n${name.split(' ')[1]}`
}

const Avatar: FC<IAvatar> = ({ name, profileLink }) => {
	return (
		<TouchableOpacity style={styles.avatar} onPress={() => profileLink}>
			<MaterialCommunityIcons name='account' size={35} color='white' />
			<Text style={styles.name}>{nameDivider(name)}</Text>
		</TouchableOpacity>
	)
}

export default Avatar

const styles = StyleSheet.create({
	avatar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	name: {
		fontWeight: '500',
		fontSize: 18,
		color: 'white',
		lineHeight: 24,
		marginLeft: '3%',
	},
})
