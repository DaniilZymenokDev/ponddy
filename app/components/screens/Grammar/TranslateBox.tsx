import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import Tooltip from 'react-native-walkthrough-tooltip'
import { pTextStyle, secondTextColor, primaryColor } from '../../../styles'
import Sentence from '../../ui/Sentence'
import TooltipContent from '../../ui/TooltipContent'
import { FontAwesome } from '@expo/vector-icons'
import IconButton from '../../ui/IconButton'
import { dictItemResponse } from '../../../../models/dictListResponse'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface ITranslateBox {
	data: dictItemResponse
}

const TranslateBox: FC<ITranslateBox> = ({ data }) => {
	const [isToolTip, setIsToolTip] = useState<boolean>(false)
	const voiceSpeech = () => {}
	const helper = (): void => {
		setIsToolTip(true)
	}
	return (
		// 	<View style={styles.translateContainer}>
		// 		<View style={styles.textContainer}>
		// 			<View style={{ width: '10%', paddingTop: '6%' }}>
		// 				<IconButton iconName={'volume-high'} onPress={voiceSpeech} />
		// 			</View>
		// 			<View style={styles.sentenceContainer}>
		// 				<Sentence text={'九月'} isSelected={true} isAnchor />
		// 			</View>
		// 		</View>
		// 		<View
		// 			style={{
		// 				borderTopWidth: 1,
		// 				borderColor: 'rgba(45, 57, 66, 0.1);',
		// 				paddingVertical: '3%',
		// 			}}>
		// 			<Text
		// 				style={{
		// 					...pTextStyle,
		// 					color: secondTextColor,
		// 				}}>
		// 				Your birthday falls on September 12.
		// 			</Text>
		// 		</View>
		// 		<View
		// 			style={{
		// 				borderTopWidth: 1,
		// 				borderColor: 'rgba(45, 57, 66, 0.1);',
		// 				paddingVertical: '3%',
		// 				display: 'flex',
		// 				flexDirection: 'row',
		// 				justifyContent: 'space-between',
		// 				alignItems: 'center',
		// 			}}>
		// 			<View
		// 				style={{
		// 					display: 'flex',
		// 					flexDirection: 'row',
		// 					justifyContent: 'space-between',
		// 					alignItems: 'center',
		// 				}}>
		// 				<FontAwesome name='anchor' size={10} color={primaryColor} style={{ marginRight: '2%' }} />
		// 				<Text
		// 					style={{
		// 						...pTextStyle,
		// 						fontWeight: '700',
		// 						marginRight: '2%',
		// 						color: secondTextColor,
		// 					}}>
		// 					Key Words :
		// 				</Text>
		// 				<Text style={{ color: secondTextColor }}>星期/礼拜/月/日/号</Text>
		// 			</View>
		// 			<Tooltip
		// 				isVisible={isToolTip}
		// 				contentStyle={{ backgroundColor: '#26293F' }}
		// 				content={<TooltipContent />}
		// 				placement='bottom'
		// 				onClose={() => setIsToolTip(false)}>
		// 				<IconButton iconName={'help-circle'} onPress={helper} />
		// 			</Tooltip>
		// 		</View>
		// 	</View>
		//
		<View style={{ flexDirection: 'row', padding: 10 }}>
			<AntDesign
				name='sound'
				size={20}
				style={{ marginTop: 42 }}
				color='#969CA0'
				// onPress={() => playSound(data?.sentences[0]?.voice)}
			/>
			{data?.sentences[0]?.segments.map((item, key) => {
				return (
					<View
						style={{
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
						key={key}>
						<FontAwesome
							onPress={() => bottomSheetRef.current?.close()}
							name='anchor'
							color={item.anchor ? '#6ACFED' : '#fff'}
							size={20}></FontAwesome>

						<Text
							style={
								key === activeIndex
									? {
											padding: 10,
											fontSize: '20',
											borderWidth: 1,
											borderRadius: 12,
											borderColor: '#6ACFED',
											marginTop: 10,
											color: 'levels' in item ? 'black' : 'grey',
									  }
									: {
											padding: 10,
											fontSize: '20',
											color: 'levels' in item ? 'black' : 'grey',
											marginTop: 10,
									  }
							}
							onPress={() => {
								if ('levels' in item && activeIndex !== key) {
									bottomSheetRef.current?.snapToIndex(0)
									setActiveIndex(key)
								} else if ('levels' in item && activeIndex === key) {
									bottomSheetRef.current?.close()
									setActiveIndex(null)
								}
							}}>
							{item.word}
						</Text>
					</View>
				)
			})}
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
		width: '90%',
		flexWrap: 'wrap',
		overflow: 'hidden',
	},
})
