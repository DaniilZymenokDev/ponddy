import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../../ui/Header'
import Avatar from '../../ui/Avatar'
import Button from '../../ui/Button'
import SliderItem from '../../ui/SliderItem'
import { basicPadding } from '../../../styles'
import IconButton from '../../ui/IconButton'
import VocabItem from './VocabItem'

const Learning = () => {
	const [isFirstPage, setIsFirstPage] = useState<boolean>(true)
	const searchWord = () => {}
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
				<View style={styles.switch}>
					<TouchableOpacity onPress={() => setIsFirstPage(true)}>
						<Text style={isFirstPage ? styles.activeText : styles.nonActiveText}>Dictionary</Text>
						{isFirstPage ? <View style={styles.divider}></View> : <></>}
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setIsFirstPage(false)}>
						<Text style={isFirstPage ? styles.nonActiveText : styles.activeText}>Grammar</Text>
						{isFirstPage ? <></> : <View style={styles.divider}></View>}
					</TouchableOpacity>
				</View>
			</Header>
			<View style={{ ...basicPadding, ...styles.dictionaryContent }}>
				<View style={styles.panel}>
					<SliderItem selected={false} iconName={'bookmark'} iconColor={'orange'} />
					<SliderItem text={'Familiar'} selected={true} />
					<SliderItem text={'Unfamiliar'} selected={false} />
					<IconButton iconName={'md-search-sharp'} onPress={searchWord} />
					<IconButton iconName={'filter'} onPress={searchWord} />
				</View>
				<View style={styles.vocabList}>
					<VocabItem />
					<VocabItem />
					<VocabItem />
					<VocabItem />
				</View>
			</View>

			<Text>{`${isFirstPage}`}</Text>
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
	switch: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: '15%',
	},
	activeText: {
		fontWeight: '600',
		fontSize: 18,
		lineHeight: 24,
		color: 'white',
		marginBottom: 4,
	},
	nonActiveText: {
		fontWeight: '600',
		fontSize: 16,
		lineHeight: 24,
		color: 'white',
		opacity: 0.5,
	},
	divider: {
		height: 4,
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 12,
	},
	panel: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: '5%',
	},
	dictionaryContent: {},
	vocabList: {
		display: 'flex',
		flexDirection: 'column',
	},
})
