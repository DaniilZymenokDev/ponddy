import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../layout/Layout'
import { defaultH1 } from '../../../styles'

const Challenge = () => {
	return (
		<Layout>
			<Text style={{ fontSize: defaultH1, textAlign: 'center', marginTop: '50%' }}>Challenge</Text>
		</Layout>
	)
}

export default Challenge

const styles = StyleSheet.create({})
