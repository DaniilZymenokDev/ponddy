import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import SliderItem from '../../ui/SliderItem'
import IconButton from '../../ui/IconButton'

interface IPanel {
	value: boolean
	setValue: (value: boolean) => void
}

const Panel: FC<IPanel> = ({ value, setValue }) => {
	const searchWord = () => {}
	return (
		<View style={styles.panel}>
			<SliderItem selected={false} iconName={'bookmark'} iconColor={'orange'} />
			<SliderItem text={'Familiar'} selected={value} onPress={setValue} />
			<SliderItem text={'Unfamiliar'} selected={!value} onPress={setValue} />
			<IconButton iconName={'md-search-sharp'} onPress={searchWord} />
			<IconButton iconName={'filter'} onPress={searchWord} />
		</View>
	)
}

export default Panel

const styles = StyleSheet.create({
	panel: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: '5%',
	},
})
