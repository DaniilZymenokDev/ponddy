import { StyleSheet, Text, View } from 'react-native'
import Navigation from './app/navigation/Navigation'
import { Provider } from 'react-redux'
import store from './app/store'
import Grammar from './app/components/screens/Grammar/Grammar'

export default function App() {
	return (
		<Provider store={store}>
			{/* <Navigation /> */}
			<Grammar />
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
