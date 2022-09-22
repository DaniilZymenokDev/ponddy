import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'

interface IContentSwitch {
	isFirstPage: boolean
	setIsFirstPage(value: boolean): void
}

const ContentSwitch: FC<IContentSwitch> = ({ isFirstPage, setIsFirstPage }) => {
	return (
		<View style={styles.switch}>
			<TouchableOpacity onPress={() => setIsFirstPage(true)}>
				<Text style={isFirstPage ? styles.activeText : styles.nonActiveText}>Dictionary</Text>
				{isFirstPage ? <View style={styles.divider}></View> : <></>}
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setIsFirstPage(false)}>
				<Text style={isFirstPage ? styles.nonActiveText : styles.activeText}>Grammar</Text>
				{isFirstPage ? <></> : <View style={styles.divider}></View>}
			</TouchableOpacity>
		</View>
	)
}

export default ContentSwitch

const styles = StyleSheet.create({
	switch: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: '15%',
	},
	activeText: {
		fontWeight: '600',
		fontSize: 18,
		lineHeight: 24,
		color: 'white',
		marginBottom: 4,
	},
	nonActiveText: {
		fontWeight: '600',
		fontSize: 16,
		lineHeight: 24,
		color: 'white',
		opacity: 0.5,
	},
	divider: {
		height: 4,
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 12,
	},
})
