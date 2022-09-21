import { StyleSheet, TextInput, View } from 'react-native'
import React, { FC } from 'react'

interface IField {
	onChange: (value: string) => void
	value: string
	placeholder: string
	isSecure?: boolean
}

const Field: FC<IField> = ({ onChange, value, placeholder, isSecure }) => {
	return (
		<TextInput
			placeholder={placeholder}
			onChangeText={onChange}
			value={value}
			secureTextEntry={isSecure}
			autoCapitalize={'none'}
			style={styles.field}
		/>
	)
}

export default Field

const styles = StyleSheet.create({
	field: {
		width: '100%',
		height: 40,
		borderRadius: 12,
		backgroundColor: '#cfcfcf',
		marginTop: '3%',
		padding: 12,
	},
})
