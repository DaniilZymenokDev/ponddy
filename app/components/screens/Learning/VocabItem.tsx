import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { h2TextStyle, pTextStyle, secondTextColor } from '../../../styles'
import LevelIndicator from '../../ui/LevelIndicator'
import SliderItem from '../../ui/SliderItem'
import { dictItemResponse } from '../../../../models/dictListResponse'

interface IVocabItem {
	item: dictItemResponse
}

const VocabItem: FC<IVocabItem> = ({ item }) => {
	return (
		<TouchableOpacity style={styles.vocabItem}>
			<View style={styles.chineseAndTechBar}>
				<View style={styles.chineseBar}>
					<Text style={{ ...h2TextStyle, marginBottom: '4%' }}>{item.name}</Text>
					<Text style={{ ...pTextStyle, color: secondTextColor, fontSize: 12 }}>
						{item.name_hsk3}
					</Text>
				</View>
				<View style={styles.techBar}>
					<LevelIndicator levelCount={item.level} />
					<SliderItem
						selected={false}
						iconName={item.saved ? 'bookmark-alt' : 'bookmark'}
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
					{item.name_hsk3}
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
					{item.name_hsk3}
				</Text>
				<Text
					style={{
						...pTextStyle,
						color: secondTextColor,
						fontSize: 14,
						fontWeight: '600',
						minWidth: '10%',
					}}>
					{item.name_hsk3}
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
