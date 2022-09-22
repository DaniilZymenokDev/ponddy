import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { primaryColor } from '../../styles'
import { LinearGradient } from 'expo-linear-gradient'

interface IHeader {
	children: React.ReactNode
	optionalStyles?: Object
	colors?: Array<string>
}

const Header: FC<IHeader> = ({ children, optionalStyles, colors }) => {
	return (
		<LinearGradient
			colors={colors || ['rgba(8, 169, 218, 1)', 'rgba(147, 226, 250, 1)']}
			style={{ ...styles.header, ...optionalStyles }}>
			{children}
		</LinearGradient>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '22%',
		backgroundColor: primaryColor,
		paddingTop: '15%',
		paddingBottom: '3%',
		display: 'flex',
		justifyContent: 'space-between',
	},
})
