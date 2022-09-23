import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { h2TextStyle, pTextStyle, secondTextColor } from '../../../styles'
import LevelIndicator from '../../ui/LevelIndicator'
import SliderItem from '../../ui/SliderItem'
import { useAppDispatch } from '../../../store/hooks'
import { changeModal } from '../../../store/statesSlice'
import { savedItemResponse } from '../../../../models/savedListResponse'

const VocabItem: FC<{ vocabItemProps: savedItemResponse }> = ({ vocabItemProps }) => {
	const dispatch = useAppDispatch()
	return (
		<TouchableOpacity style={styles.vocabItem} onPress={() => dispatch(changeModal(true))}>
			<View style={styles.chineseAndTechBar}>
				<View style={styles.chineseBar}>
					<Text style={{ ...h2TextStyle, marginBottom: '4%' }}>{vocabItemProps.grammar.name}</Text>
					<Text style={{ ...pTextStyle, color: secondTextColor, fontSize: 12 }}>
						{vocabItemProps.grammar.name_hsk3}
					</Text>
				</View>
				<View style={styles.techBar}>
					<LevelIndicator levelCount={vocabItemProps.grammar.level_hsk3} />
					<SliderItem
						selected={false}
						iconName={vocabItemProps.saved ? 'bookmark-alt' : 'bookmark-alt'}
						iconColor={'orange'}
						unBordered
					/>
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
