import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { primaryColor } from '../../styles'

const Loader: FC = () => {
	return <ActivityIndicator style={styles.loader} size='large' color={primaryColor} />
}

export default Loader

const styles = StyleSheet.create({
	loader: {
		flex: 1,
	},
})
