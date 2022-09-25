import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../../ui/Header'
import Avatar from '../../ui/Avatar'
import Button from '../../ui/Button'
import { basicPadding } from '../../../styles'
import Panel from './Panel'
import VocabList from './VocabList'
import ContentSwitch from './ContentSwitch'
import { useAppSelector } from '../../../store/hooks'
import useLoading from '../../../hooks/useLoading'
import { api } from '../../../utils/api'
import Loader from '../../ui/Loader'
import { dictItemResponse, dictListResponse } from '../../../../models/dictListResponse'

const Learning = () => {
	const [isFirstPage, setIsFirstPage] = useState<boolean>(true)
	const [isFamiliar, setIsFamiliar] = useState<boolean>(true)
	const [savedList, setSavedList] = useState<Array<dictItemResponse>>()

	const { isLoading, startLoading, finishLoading, error, setError } = useLoading()
	useEffect(() => {
		startLoading()
		api
			.getVocabList()
			.then((res) => setSavedList(res.results))
			.catch((err) => setError(err.message))
			.finally(() => {
				if (!error.isError) finishLoading()
			})
	}, [])
	return (
		<Layout>
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
				isLoading ? (
					<Loader />
				) : (
					<View style={{ ...basicPadding, ...styles.dictionaryContent }}>
						<Panel value={isFamiliar} setValue={setIsFamiliar} />
						<VocabList data={savedList} />
					</View>
				)
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
