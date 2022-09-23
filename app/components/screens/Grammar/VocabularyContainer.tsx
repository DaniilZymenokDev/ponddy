import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useRef, useState } from 'react'
import IconButton from '../../ui/IconButton'
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet'
import {
	pTextStyle,
	defaultFontSize,
	secondTextColor,
	displayRowStyle,
	h2TextStyle,
	grammarBg,
} from '../../../styles'
import LevelIndicator from '../../ui/LevelIndicator'
import Sentence from '../../ui/Sentence'
import SliderItem from '../../ui/SliderItem'

interface IVocabularyContainer {
	value: boolean
	setValue: (value: boolean) => void
	ref: any
}

const VocabularyContainer: FC<IVocabularyContainer> = ({ value, setValue, ref }) => {
	const snapPoints = ['97%', '98%']
	const voiceSpeech = (): void => {}

	const handleUnPresentModal = (): void => {
		ref.current?.dismiss()
		setTimeout(() => {
			setValue(false)
		}, 100)
	}

	return (
		<View style={styles.vocabularyContainer}>
			<BottomSheetModalProvider>
				<BottomSheetModal
					ref={ref}
					index={1}
					snapPoints={snapPoints}
					backgroundStyle={{
						borderRadius: 30,
						shadowColor: '#171717',
						shadowOffset: { width: 0, height: 4 },
						shadowOpacity: 3,
						shadowRadius: 5,
					}}
					onDismiss={() => setValue(false)}>
					<View style={styles.contentContainer}>
						<View style={styles.vocabularyHeader}>
							<View
								style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'flex-end',
								}}>
								<IconButton iconName={'close'} onPress={handleUnPresentModal} />
							</View>
							<Text
								style={{
									...pTextStyle,
									fontWeight: '700',
									width: '100%',
									textAlign: 'center',
									lineHeight: 15,
								}}>
								Vocabulary
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '12%',
								marginBottom: '2%',
							}}>
							<Sentence text={'九月'} isSelected={false} optionalStyles={{ marginTop: 0 }} />
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									width: '35%',
								}}>
								<SliderItem
									selected={false}
									unBordered={true}
									iconName={'bookmark'}
									iconColor={'orange'}
								/>
								<SliderItem text={'More'} selected={true} onPress={setValue} />
							</View>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								width: '100%',
								marginBottom: '2%',
							}}>
							<IconButton iconName={'volume-high'} onPress={voiceSpeech} />
							<Text style={{ fontSize: defaultFontSize, color: secondTextColor, marginLeft: '2%' }}>
								jiǔyuè
							</Text>
						</View>
						<View style={{ ...displayRowStyle, alignItems: 'center' }}>
							<LevelIndicator levelCount={1} />
							<Text
								style={{
									...pTextStyle,
									fontSize: defaultFontSize,
									fontWeight: '700',
									color: '#576168',
									marginRight: '2%',
									marginLeft: '2%',
								}}>
								n.
							</Text>
							<View style={styles.artText}>
								<Text style={{ color: '#D5D7D9' }}>繁</Text>
							</View>
							<Text style={{ ...h2TextStyle, marginLeft: '2%' }}>九月</Text>
						</View>
						<Text></Text>
					</View>
				</BottomSheetModal>
			</BottomSheetModalProvider>
		</View>
	)
}

export default VocabularyContainer

const styles = StyleSheet.create({
	vocabularyContainer: {
		flex: 1,
		backgroundColor: grammarBg,
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 16,
		display: 'flex',
		flexDirection: 'column',
	},
	vocabularyHeader: {
		width: '100%',
		height: '12%',
		display: 'flex',
		flexDirection: 'column',
		borderBottomWidth: 1,
		borderColor: 'rgba(45, 57, 66, 0.1);',
	},
	artText: {
		padding: 4,
		borderWidth: 1,
		borderColor: '#D5D7D9',
		borderRadius: 8,
	},
})
