import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import IconButton from '../../../ui/IconButton'
import { pTextStyle } from '../../../../styles'

interface IVocabHeader {
	unPresentBottomSheet: () => void
}

const VocabHeader: FC<IVocabHeader> = ({ unPresentBottomSheet }) => {
	return (
		<View style={styles.vocabularyHeader}>
			<View
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-end',
				}}>
				<IconButton iconName={'close'} onPress={unPresentBottomSheet} />
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
	)
}

export default VocabHeader

const styles = StyleSheet.create({
	vocabularyHeader: {
		width: '100%',
		height: '12%',
		display: 'flex',
		flexDirection: 'column',
		borderBottomWidth: 1,
		borderColor: 'rgba(45, 57, 66, 0.1);',
	},
})
