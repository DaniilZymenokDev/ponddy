import { StyleSheet, Text, View } from 'react-native'
import Grammar from './app/components/screens/Grammar/Grammar'
import Navigation from './app/navigation/Navigation'

export default function App() {
	// return <Navigation />
	return <Grammar />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
