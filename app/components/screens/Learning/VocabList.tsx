import { FlatList, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import VocabItem from './VocabItem'
import { dictItemResponse } from '../../../../models/dictListResponse'

interface IVocabList {
	data: Array<dictItemResponse>
}

const VocabList: FC<IVocabList> = ({ data }) => {
	const renderVocabItem = (item: any) => <VocabItem item={item} />
	return (
		<View style={styles.vocabList}>
			<FlatList
				data={data}
				renderItem={renderVocabItem}
				keyExtractor={(item) => `${item.id}`}
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
