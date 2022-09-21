import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'

interface ILevelIndicator {
	levelCount: number
}
const colors: Array<string> = [
	'#E4E900',
	'#E4E900',
	'#71E67C',
	'#02CCC2',
	'#e81a1a',
	'#d71ae8',
	'#511AE8',
]
const LevelIndicator: FC<ILevelIndicator> = ({ levelCount }) => {
	return (
		<View style={{ ...styles.levelIndicator, backgroundColor: colors[levelCount] }}>
			<Text style={{ ...styles.lvl }}>LVL {levelCount}</Text>
		</View>
	)
}

export default LevelIndicator

const styles = StyleSheet.create({
	levelIndicator: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 48,
		height: 24,
		borderRadius: 4,
	},
	lvl: {
		fontWeight: '700',
		fontSize: 12,
		lineHeight: 14,
		color: 'white',
	},
})
