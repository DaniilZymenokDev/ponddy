import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import IconButton from '../../ui/IconButton'
import { voiceSpeech } from '../../../utils/voiceSpeech'
import Sentence from '../../ui/Sentence'
import { basicPadding, pTextStyle, secondTextColor } from '../../../styles'
import Tooltip from 'react-native-walkthrough-tooltip'
import { dictItemResponse } from '../../../../models/dictListResponse'
import TooltipContent from '../../ui/TooltipContent'

interface iTranslateBox {
	data: dictItemResponse
	index: number | null
	setIndex: (index: number | null) => void
	presentBottomSheet: () => void
	unPresentBottomSheet: () => void
}

const TranslateBox: FC<iTranslateBox> = ({
	data,
	index,
	setIndex,
	presentBottomSheet,
	unPresentBottomSheet,
}) => {
	const [isToolTip, setIsToolTip] = useState(false)
	return (
		<View style={{ ...basicPadding, height: '35%' }}>
			<Text style={{ ...pTextStyle, color: secondTextColor, marginTop: '4%', marginBottom: '4%' }}>
				{data?.name}
			</Text>
			<View style={styles.translateContainer}>
				<View style={styles.textContainer}>
					<View style={{ width: '10%', paddingTop: '6%' }}>
						<IconButton
							iconName={'volume-high'}
							onPress={() => voiceSpeech(data?.sentences[0]?.voice)}
						/>
					</View>
					{data?.sentences[0]?.segments.map((item: any, key: number) => {
						return (
							<View style={styles.sentenceContainer} key={key}>
								<Sentence
									text={item.word}
									isSelected={key === index ? true : false}
									isAnchor={item.anchor}
									onPress={() => {
										if (item.levels && index !== key) {
											presentBottomSheet()
											setIndex(key)
										} else if (item.levels && index === key) {
											unPresentBottomSheet()
										}
									}}
								/>
							</View>
						)
					})}
				</View>
				<View
					style={{
						borderTopWidth: 1,
						borderColor: 'rgba(45, 57, 66, 0.1);',
						paddingVertical: '3%',
					}}>
					<Text
						style={{
							...pTextStyle,
							color: secondTextColor,
						}}>
						{data?.sentences[0]?.trans}
					</Text>
				</View>
				<View
					style={{
						borderTopWidth: 1,
						borderColor: 'rgba(45, 57, 66, 0.1);',
						paddingVertical: '3%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Text
							style={{
								...pTextStyle,
								fontWeight: '700',
								marginRight: '2%',
								color: secondTextColor,
							}}>
							Key Words :
						</Text>
						<Text style={{ color: secondTextColor }}>{data?.sentences[0]?.simp}</Text>
					</View>
					<Tooltip
						isVisible={isToolTip}
						contentStyle={{ backgroundColor: '#26293F' }}
						content={<TooltipContent />}
						placement='bottom'
						onClose={() => {
							setIsToolTip(false)
						}}>
						<IconButton iconName={'help-circle'} onPress={() => setIsToolTip(true)} />
					</Tooltip>
				</View>
			</View>
		</View>
	)
}

export default TranslateBox

const styles = StyleSheet.create({
	translateContainer: {
		width: '100%',
		height: '80%',
		backgroundColor: 'white',
		padding: '3%',
		borderRadius: 10,
	},
	textContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '65%',
	},
	sentenceContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '10%',
		flexWrap: 'wrap',
		overflow: 'hidden',
	},
})
