import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { voiceSpeech } from '../../../../utils/voiceSpeech'
import { dictItemResponse } from '../../../../../models/dictListResponse'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import IconButton from '../../../ui/IconButton'
import { defaultFontSize, displayRowStyle, pTextStyle, secondTextColor } from '../../../../styles'
import Sentence from '../../../ui/Sentence'
import SliderItem from '../../../ui/SliderItem'
import LevelIndicator from '../../../ui/LevelIndicator'
import VocabHeader from './VocabHeader'

interface IVocabularyContainer {
	data: dictItemResponse
	index: number | null
	setIndex: (index: number | null) => void
	unPresentBottomSheet: () => void
	bottomSheetModalRef: any
	setIsOpen: (value: boolean) => void
}

const VocabularyContainer: FC<IVocabularyContainer> = ({
	data,
	bottomSheetModalRef,
	index,
	setIndex,
	setIsOpen,
	unPresentBottomSheet,
}) => {
	const snapPoints = ['97%', '98%']
	const moreLink = (value: number): void => {}
	return (
		<View style={styles.vocabularyContainer}>
			<BottomSheetModalProvider>
				<BottomSheetModal
					ref={bottomSheetModalRef}
					index={1}
					snapPoints={snapPoints}
					backgroundStyle={{
						borderRadius: 30,
						shadowColor: '#171717',
						shadowOffset: { width: 0, height: 4 },
						shadowOpacity: 3,
						shadowRadius: 5,
					}}
					onDismiss={() => {
						setIsOpen(false)
						setIndex(null)
					}}>
					<View style={styles.contentContainer}>
						<VocabHeader unPresentBottomSheet={unPresentBottomSheet} />
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '12%',
								marginBottom: '2%',
							}}>
							<Sentence
								text={data?.sentences[0]?.segments[index]?.word}
								isSelected={false}
								optionalStyles={{ marginTop: 0 }}
							/>
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
								<SliderItem text={'More'} selected={true} onPress={() => moreLink} />
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
							<IconButton
								iconName={'volume-high'}
								onPress={() => voiceSpeech(data?.sentences[0]?.voice)}
							/>
							<Text style={{ fontSize: defaultFontSize, color: secondTextColor, marginLeft: '2%' }}>
								Pronounce
							</Text>
						</View>
						<View style={{ ...displayRowStyle, alignItems: 'center', marginBottom: '2%' }}>
							<LevelIndicator
								levelCount={data?.sentences[0]?.segments[index]?.levels?.level_hsk3 ?? '1'}
							/>
							<Text
								style={{
									...pTextStyle,
									fontSize: defaultFontSize,
									fontWeight: '700',
									color: '#576168',
									marginRight: '2%',
									marginLeft: '2%',
								}}>
								{data && data?.sentences[0]?.segments[index]?.pos[0]}.
							</Text>
							<View style={styles.artText}>
								<Text style={{ color: '#D5D7D9' }}>
									{data?.sentences[0]?.segments[index]?.word}
								</Text>
							</View>
						</View>
						<View
							style={{
								borderBottomWidth: 1,
								borderColor: 'rgba(45, 57, 66, 0.1);',
								paddingBottom: '4%',
							}}></View>
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
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 16,
		display: 'flex',
		flexDirection: 'column',
	},
	artText: {
		padding: 4,
		borderWidth: 1,
		borderColor: '#D5D7D9',
		borderRadius: 8,
	},
})
