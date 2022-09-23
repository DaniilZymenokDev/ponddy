import { StyleSheet, Text, View } from 'react-native'
import { Audio } from 'expo-av'
import React, { FC, useEffect, useRef, useState } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Layout from '../../layout/Layout'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import Sentence from '../../ui/Sentence'
import SliderItem from '../../ui/SliderItem'
import LevelIndicator from '../../ui/LevelIndicator'
import {
	basicPadding,
	defaultFontSize,
	displayRowStyle,
	grammarBg,
	primaryColor,
	pTextStyle,
	secondTextColor,
} from '../../../styles'
import { useAppDispatch } from '../../../store/hooks'
import { changeModal } from '../../../store/statesSlice'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { dictItemResponse } from '../../../../models/dictListResponse'
import Loader from '../../ui/Loader'
import { api } from '../../../utils/api'
import useLoading from '../../../hooks/useLoading'
import Tooltip from 'react-native-walkthrough-tooltip'
import TooltipContent from '../../ui/TooltipContent'
interface iGrammar {
	setVisible?: (value: boolean) => void
}

const Grammar: FC<iGrammar> = ({ setVisible }) => {
	useEffect(() => {
		handleUnPresentModal()
		startLoading()
		api
			.getSentence()
			.then((res) => setSavedList(res))
			.catch((err) => setError(err.message))
			.finally(() => {
				if (!error.isError) finishLoading()
			})
	}, [])

	const [activeIndex, setActiveIndex] = useState<number>()
	const { isLoading, startLoading, finishLoading, error, setError } = useLoading()
	const [savedList, setSavedList] = useState<dictItemResponse>({} as dictItemResponse)
	const [isToolTip, setIsToolTip] = useState(false)
	const dispatch = useAppDispatch()
	const backNav = () => {
		dispatch(changeModal(false))
	}
	const bottomSheetModalRef = useRef(null)
	const snapPoints = ['97%', '98%']
	const setValue = (value: number): void => {}
	async function voiceSpeech(soundLink: string) {
		const { sound } = await Audio.Sound.createAsync({
			uri: soundLink,
		})
		await sound.playAsync()
	}
	const [isOpen, setIsOpen] = useState(false)
	const handlePresentModal = (): void => {
		bottomSheetModalRef.current?.present()
		setTimeout(() => {
			setIsOpen(true)
		}, 100)
	}
	const handleUnPresentModal = (): void => {
		bottomSheetModalRef.current?.dismiss()
		setActiveIndex(null)
		setTimeout(() => {
			setIsOpen(false)
		}, 100)
	}

	return error.isError ? (
		<View>{error.message}</View>
	) : isLoading ? (
		<Loader />
	) : (
		<Layout optionalStyles={{ backgroundColor: grammarBg }}>
			<Header
				optionalStyles={styles.header}
				colors={['rgba(53, 133, 189, 1)', 'rgba(108, 174, 231, 1)']}>
				<IconButton iconName={'arrow-back'} color={'white'} onPress={backNav} />
				<Text style={{ ...pTextStyle, ...styles.headerText }}>New Grading Standard</Text>
			</Header>
			<View style={{ ...basicPadding, height: '35%' }}>
				<Text
					style={{ ...pTextStyle, color: secondTextColor, marginTop: '4%', marginBottom: '4%' }}>
					{savedList?.name}
				</Text>
				<View style={styles.translateContainer}>
					<View style={styles.textContainer}>
						<View style={{ width: '10%', paddingTop: '6%' }}>
							<IconButton
								iconName={'volume-high'}
								onPress={() => voiceSpeech(savedList?.sentences[0]?.voice)}
							/>
						</View>
						{savedList?.sentences[0]?.segments.map((item: any, key: number) => {
							return (
								<View style={styles.sentenceContainer} key={key}>
									<Sentence
										text={item.word}
										isSelected={key === activeIndex ? true : false}
										isAnchor={item.anchor}
										onPress={() => {
											if (item.levels && activeIndex !== key) {
												handlePresentModal()
												setActiveIndex(key)
											} else if (item.levels && activeIndex === key) {
												handleUnPresentModal()
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
							{savedList?.sentences[0]?.trans}
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
							<FontAwesome
								name='anchor'
								size={10}
								color={primaryColor}
								style={{ marginRight: '2%' }}
							/>
							<Text
								style={{
									...pTextStyle,
									fontWeight: '700',
									marginRight: '2%',
									color: secondTextColor,
								}}>
								Key Words :
							</Text>
							<Text style={{ color: secondTextColor }}>{savedList?.sentences[0]?.simp}</Text>
						</View>
						<Tooltip
							isVisible={isToolTip}
							contentStyle={{ backgroundColor: '#26293F' }}
							content={<TooltipContent />}
							placement='bottom'
							onClose={() => setIsToolTip(false)}>
							<IconButton iconName={'help-circle'} onPress={() => setIsToolTip(true)} />
						</Tooltip>
					</View>
				</View>
			</View>
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
						onDismiss={() => setIsOpen(false)}>
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
								<Sentence
									text={savedList && savedList?.sentences[0]?.segments[activeIndex]?.word}
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
								<Text
									style={{ fontSize: defaultFontSize, color: secondTextColor, marginLeft: '2%' }}>
									Pronounce
								</Text>
							</View>
							<View style={{ ...displayRowStyle, alignItems: 'center', marginBottom: '2%' }}>
								<LevelIndicator
									levelCount={
										savedList
											? savedList?.sentences[0]?.segments[activeIndex]?.levels?.level_hsk3
											: '1'
									}
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
									{savedList && savedList?.sentences[0]?.segments[activeIndex]?.pos[0]}.
								</Text>
								<View style={styles.artText}>
									<Text style={{ color: '#D5D7D9' }}>
										{savedList?.sentences[0]?.segments[activeIndex]?.word}
									</Text>
								</View>
								{/* <Text style={{ ...h2TextStyle, marginLeft: '2%' }}>九月</Text> */}
							</View>
							<View
								style={{
									borderBottomWidth: 1,
									borderColor: 'rgba(45, 57, 66, 0.1);',
									paddingBottom: '4%',
								}}>
								{/* <Text
									style={{
										...pTextStyle,
										color: '#576168',
									}}>
									September
								</Text> */}
							</View>
						</View>
					</BottomSheetModal>
				</BottomSheetModalProvider>
			</View>
		</Layout>
	)
}

export default Grammar

const styles = StyleSheet.create({
	header: {
		height: '15%',
		display: 'flex',
		flexDirection: 'row',
		paddingLeft: '5%',
		paddingRight: '35%',
		paddingTop: '18%',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 12,
		fontWeight: '400',
		color: 'white',
	},
	vocabularyContainer: {
		flex: 1,
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
