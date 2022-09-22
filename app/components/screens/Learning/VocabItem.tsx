import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { bgGrey, h2TextStyle, pTextStyle, secondTextColor, textColor } from '../../../styles'
import LevelIndicator from '../../ui/LevelIndicator'
import SliderItem from '../../ui/SliderItem'

export interface IVocabItem {
	chineseText: string
	transcript: string
	levelCount: number
	description1: string
	description2: string
	description3: string
}

const VocabItem: FC<{ vocabItemProps: IVocabItem }> = ({ vocabItemProps }) => {
	return (
		<TouchableOpacity style={styles.vocabItem}>
			<View style={styles.chineseAndTechBar}>
				<View style={styles.chineseBar}>
					<Text style={{ ...h2TextStyle, marginBottom: '4%' }}>{vocabItemProps.chineseText}</Text>
					<Text style={{ ...pTextStyle, color: secondTextColor, fontSize: 12 }}>
						{vocabItemProps.transcript}
					</Text>
				</View>
				<View style={styles.techBar}>
					<LevelIndicator levelCount={vocabItemProps.levelCount} />
					<SliderItem selected={false} iconName={'bookmark-alt'} iconColor={'orange'} unBordered />
				</View>
			</View>
			<View style={styles.description}>
				<Text
					style={{
						...pTextStyle,
						color: secondTextColor,
						fontSize: 14,
						fontWeight: '400',
						minWidth: '10%',
						marginRight: '1%',
					}}>
					{vocabItemProps.description1}
				</Text>
				<Text
					style={{
						...pTextStyle,
						color: secondTextColor,
						fontSize: 14,
						fontWeight: '500',
						minWidth: '10%',
						marginRight: '1%',
					}}>
					{vocabItemProps.description2}
				</Text>
				<Text
					style={{
						...pTextStyle,
						color: secondTextColor,
						fontSize: 14,
						fontWeight: '600',
						minWidth: '10%',
					}}>
					{vocabItemProps.description3}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default VocabItem

const styles = StyleSheet.create({
	vocabItem: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		borderBottomWidth: 1,
		borderColor: 'rgba(45, 57, 66, 0.1);',
		paddingHorizontal: '4%',
		paddingVertical: '4%',
	},
	chineseAndTechBar: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	chineseBar: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
	},
	techBar: {
		width: '27%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	description: {
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
	},
})
