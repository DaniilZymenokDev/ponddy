import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultH1 } from '../../../styles'
import Layout from '../../layout/Layout'

const LiveLessons = () => {
	return (
		<Layout>
			<Text style={{ fontSize: defaultH1, textAlign: 'center', marginTop: '50%' }}>
				Live Lessons
			</Text>
		</Layout>
	)
}

export default LiveLessons

const styles = StyleSheet.create({})
