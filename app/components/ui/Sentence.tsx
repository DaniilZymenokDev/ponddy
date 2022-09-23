import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { primaryColor, textColor } from '../../styles'

interface ISentence {
	text: string
	isAnchor?: boolean
	isSelected: boolean
	optionalStyles?: Object
	onPress: Function
}

const Sentence: FC<ISentence> = ({ text, isAnchor, isSelected, optionalStyles, onPress }) => {
	const styles = StyleSheet.create({
		sentenceContainer: {
			display: 'flex',
			flexDirection: 'column',
			textAlign: 'center',
			marginRight: '1%',
			marginTop: '3%',
		},
		sentence: {
			padding: 8,
			height: 40,
			borderWidth: isSelected ? 1 : 0,
			borderColor: primaryColor,
			borderRadius: 10,
			marginTop: '2%',
		},
	})

	return (
		<TouchableOpacity onPress={onPress} style={{ ...styles.sentenceContainer, ...optionalStyles }}>
			<View
				style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', height: '20%' }}>
				{isAnchor && <FontAwesome name='anchor' size={10} color={primaryColor} />}
			</View>
			<View style={{ ...styles.sentence }}>
				<Text style={{ color: textColor, fontSize: 20, lineHeight: 24 }}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Sentence
