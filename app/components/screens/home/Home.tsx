import { Text } from 'react-native'
import React, { FC } from 'react'
import Layout from '../../layout/Layout'
import { defaultH1 } from '../../../styles'

const Home: FC = () => {
	return (
		<Layout>
			<Text style={{ fontSize: defaultH1, textAlign: 'center', marginTop: '50%' }}>Home</Text>
		</Layout>
	)
}

export default Home
