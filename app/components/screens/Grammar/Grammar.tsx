import { StyleSheet, Text, View } from 'react-native'
import { Audio } from 'expo-av'
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Layout from '../../layout/Layout'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import Sentence from '../../ui/Sentence'
import SliderItem from '../../ui/SliderItem'
import LevelIndicator from '../../ui/LevelIndicator'
import {
	basicPadding,
	bgGrey,
	defaultFontSize,
	defaultShadow,
	displayRowStyle,
	grammarBg,
	h2TextStyle,
	pTextStyle,
	secondTextColor,
} from '../../../styles'
import { useAppDispatch } from '../../../store/hooks'
import { changeModal } from '../../../store/statesSlice'
import { vocabEmptyItem, vocabItemList } from '../../../utils/vocabItemsList'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { dictItemResponse } from '../../../../models/dictListResponse'
import axios from 'axios'
import Loader from '../../ui/Loader'
import { api } from '../../../utils/api'
import useLoading from '../../../hooks/useLoading'
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
			.finally(() => finishLoading())
	}, [])
	const [activeIndex, setActiveIndex] = useState(0)
	const { isLoading, startLoading, finishLoading, error, setError } = useLoading()
	const [savedList, setSavedList] = useState<dictItemResponse>()

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
					Sample sentence of Time
				</Text>
				<View style={{ backgroundColor: 'white', borderRadius: 18, padding: 12, marginTop: 20 }}>
					<View style={{ flexDirection: 'column' }}>
						<View style={{ flexDirection: 'row', padding: 10 }}>
							<AntDesign
								name='sound'
								size={20}
								style={{ marginTop: 42 }}
								color='#969CA0'
								onPress={() => voiceSpeech(savedList?.sentences[0]?.voice)}
							/>
							{savedList?.sentences[0]?.segments.map((item: any, key: number) => {
								return (
									<View
										style={{
											alignItems: 'center',
											flexWrap: 'wrap',
										}}
										key={key}>
										<FontAwesome
											onPress={handleUnPresentModal}
											name='anchor'
											color={item.anchor ? '#6ACFED' : '#fff'}
											size={10}></FontAwesome>
										<Text
											style={
												key === activeIndex
													? {
															padding: 10,
															fontSize: 20,
															borderWidth: 1,
															borderRadius: 12,
															borderColor: '#6ACFED',
															marginTop: 10,
															color: item.levels ? 'black' : 'grey',
													  }
													: {
															padding: 10,
															fontSize: 20,
															color: item.levels ? 'black' : 'grey',
															marginTop: 10,
													  }
											}
											onPress={() => {
												if (item.levels && activeIndex !== key) {
													handlePresentModal()
													setActiveIndex(key)
												} else if ('levels' in item && activeIndex === key) {
													handleUnPresentModal()
													setActiveIndex(null)
												}
											}}>
											{item.word}
										</Text>
									</View>
								)
							})}
						</View>
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
})
