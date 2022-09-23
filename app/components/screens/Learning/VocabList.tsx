import { FlatList, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import VocabItem from './VocabItem'
import { savedItemResponse } from '../../../../models/savedListResponse'
import { dictItemResponce } from '../../../../models/dictListResponse'

interface IVocabList {
	data: Array<dictItemResponce>
}

const VocabList: FC<IVocabList> = ({ data }) => {
	const renderVocabItem = (item: any) => <VocabItem vocabItemProps={item} />
	return (
		<View style={styles.vocabList}>
			<FlatList
				data={data}
				renderItem={renderVocabItem}
				keyExtractor={(item) => item.id}
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
