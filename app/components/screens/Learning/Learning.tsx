import { StyleSheet, View, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../../ui/Header'
import Avatar from '../../ui/Avatar'
import Button from '../../ui/Button'
import { basicPadding } from '../../../styles'
import {
	familiarVocabItemsList,
	unFamiliarVocabItemsList,
	vocabItemList,
} from '../../../utils/vocabItemsList'
import Panel from './Panel'
import VocabList from './VocabList'
import ContentSwitch from './ContentSwitch'
import Grammar from '../Grammar/Grammar'
import { useAppSelector } from '../../../store/hooks'
import { savedItemResponse, savedObjectResponse } from '../../../../models/savedListResponse'
import { api } from '../../../utils/api'

const Learning = () => {
	const [isFirstPage, setIsFirstPage] = useState<boolean>(true)
	const [isModal, setIsModal] = useState<boolean>(false)
	const [isFamiliar, setIsFamiliar] = useState<boolean>(true)
	// const [savedList, setSavedList] = useState<savedItemResponse[]>([])
	const [savedList, setSavedList] = useState(vocabItemList)

	const statesStore = useAppSelector((state) => state.statesList)

	// useEffect(() => {
	// 	api.getSavedList().then((result: savedObjectResponse) => setSavedList(result.results))
	// }, [])
	return (
		<Layout>
			<Modal
				animationType='slide'
				transparent={true}
				visible={statesStore.isModal}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.')
					setIsModal(!isModal)
				}}>
				<Grammar setVisible={setIsModal} />
			</Modal>
			<Header>
				<View style={styles.infoSettingBar}>
					<Avatar name={'Johnathan Johnson'} profileLink={() => console.log('Profile')} />
					<Button
						color='#6AE5C8'
						title='Settings'
						onPress={() => console.log('Settings')}
						iconName={'cog-outline'}
						iconColor={'white'}
					/>
				</View>
				<ContentSwitch isFirstPage={isFirstPage} setIsFirstPage={setIsFirstPage} />
			</Header>
			{isFirstPage ? (
				<View style={{ ...basicPadding, ...styles.dictionaryContent }}>
					<Panel value={isFamiliar} setValue={setIsFamiliar} />
					<VocabList data={savedList} />
				</View>
			) : (
				<></>
			)}
		</Layout>
	)
}

export default Learning

const styles = StyleSheet.create({
	infoSettingBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: '3%',
	},

	dictionaryContent: {},
})
