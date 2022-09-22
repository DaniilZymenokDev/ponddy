import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import VocabItem, { IVocabItem } from './VocabItem'

interface IVocabList {
	data: Array<IVocabItem>
}

const VocabList: FC<IVocabList> = ({ data }) => {
	const renderVocabItem = ({ item }: any) => <VocabItem vocabItemProps={item} />
	return (
		<View style={styles.vocabList}>
			<FlatList
				data={data}
				renderItem={renderVocabItem}
				keyExtractor={(item) => item.chineseText}
				scrollEnabled={true}
			/>
		</View>
	)
}

export default VocabList

const styles = StyleSheet.create({
	vocabList: {
		display: 'flex',
		flexDirection: 'column',
		height: '80%',
	},
})
