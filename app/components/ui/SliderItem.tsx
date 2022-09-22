import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { bgGrey, primaryColor } from '../../styles'
import { Fontisto } from '@expo/vector-icons'

interface ISliderItem {
	text?: string
	selected?: boolean
	iconName?: string
	iconColor?: string
	unBordered?: boolean
	value?: boolean
	setValue?: (value: boolean) => void
}

const SliderItem: FC<ISliderItem> = ({
	text,
	selected,
	iconName,
	iconColor,
	unBordered,
	value,
	setValue,
}) => {
	const styles = StyleSheet.create({
		sliderItem: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: unBordered ? 10 : 20,
			height: 35,
			borderWidth: unBordered ? 0 : 1,
			borderRadius: 20,
			borderColor: selected ? primaryColor : bgGrey,
			backgroundColor: selected ? primaryColor : '#FBFCFC',
		},
		text: {
			fontWeight: '700',
			fontSize: 13,
			lineHeight: 24,
			color: selected ? 'white' : bgGrey,
		},
	})

	return (
		<TouchableOpacity style={styles.sliderItem} onPress={setValue}>
			{iconName ? (
				<Fontisto name={iconName} size={20} color={selected ? 'white' : iconColor} />
			) : (
				<Text style={styles.text}>{text}</Text>
			)}
		</TouchableOpacity>
	)
}

export default SliderItem
