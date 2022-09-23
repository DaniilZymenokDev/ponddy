import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pTextStyle, secondTextColor } from '../../styles'

const TooltipContent = () => {
	return (
		<View style={styles.tooltip}>
			<Text
				style={{ ...pTextStyle, fontWeight: '700', color: secondTextColor, marginBottom: '5%' }}>
				What is Key Words?
			</Text>
			<Text style={{ ...pTextStyle, color: 'white' }}>
				Used to identify the key words or structures of this grammar point.
			</Text>
		</View>
	)
}

export default TooltipContent

const styles = StyleSheet.create({
	tooltip: {
		width: 285,
		height: 109,
		paddingHorizontal: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
