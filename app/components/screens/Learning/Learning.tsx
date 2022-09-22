import { TouchableOpacity, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../../ui/Header'
import Avatar from '../../ui/Avatar'
import Button from '../../ui/Button'
import SliderItem from '../../ui/SliderItem'
import { basicPadding } from '../../../styles'
import IconButton from '../../ui/IconButton'
import { familiarVocabItemsList, unFamiliarVocabItemsList } from '../../../utils/vocabItemsList'
import VocabItem from './VocabItem'
import Panel from './Panel'
import VocabList from './VocabList'
import ContentSwitch from './ContentSwitch'

const Learning = () => {
	const renderVocabItem = ({ item }: any) => <VocabItem vocabItemProps={item} />
	const [isFirstPage, setIsFirstPage] = useState<boolean>(true)
	const [isFamiliar, setIsFamiliar] = useState<boolean>(true)

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
				<View style={{ ...basicPadding, ...styles.dictionaryContent }}>
					<Panel value={isFamiliar} setValue={setIsFamiliar} />
					<VocabList data={isFamiliar ? familiarVocabItemsList : unFamiliarVocabItemsList} />
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
