import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useRef, useState } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import Layout from '../../layout/Layout'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import { grammarBg, pTextStyle } from '../../../styles'
import { dictItemResponse } from '../../../../models/dictListResponse'
import Loader from '../../ui/Loader'
import { api } from '../../../utils/api'
import useLoading from '../../../hooks/useLoading'
import TranslateBox from './TranslateBox'
import VocabularyContainer from './Vocabulary/VocabularyContainer'

interface iGrammar {}

const Grammar: FC<iGrammar> = () => {
	useEffect(() => {
		handleUnPresentModal()
		startLoading()
		api
			.getSentence()
			.then((res) => setDictItem(res))
			.catch((err) => setError(err.message))
			.finally(() => {
				finishLoading()
			})
	}, [])

	const [isOpen, setIsOpen] = useState(false)
	const [activeIndex, setActiveIndex] = useState<number | null>()
	const bottomSheetModalRef = useRef<BottomSheetModal>(null)
	const { isLoading, startLoading, finishLoading, error, setError } = useLoading()
	const [dictItem, setDictItem] = useState<dictItemResponse>({} as dictItemResponse)

	const backNav = () => {}

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
			<TranslateBox
				data={dictItem}
				index={activeIndex}
				setIndex={setActiveIndex}
				presentBottomSheet={handlePresentModal}
				unPresentBottomSheet={handleUnPresentModal}
			/>
			<VocabularyContainer
				data={dictItem}
				index={activeIndex}
				setIndex={setActiveIndex}
				unPresentBottomSheet={handleUnPresentModal}
				bottomSheetModalRef={bottomSheetModalRef}
				setIsOpen={setIsOpen}
			/>
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
})
