import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import Layout from '../../layout/Layout'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import { basicPadding, grammarBg, primaryColor, pTextStyle, secondTextColor } from '../../../styles'
import Sentence from '../../ui/Sentence'

const Grammar: FC = () => {
	const backNav = () => {}
	const voiceSpeech = () => {}
	const helper = () => {}

	return (
		<Layout optionalStyles={{ backgroundColor: grammarBg }}>
			<Header
				optionalStyles={styles.header}
				colors={['rgba(53, 133, 189, 1)', 'rgba(108, 174, 231, 1)']}>
				<IconButton iconName={'arrow-back'} color={'white'} onPress={backNav} />
				<Text style={{ ...pTextStyle, ...styles.headerText }}>New Grading Standard</Text>
			</Header>
			<View style={{ ...basicPadding }}>
				<Text
					style={{ ...pTextStyle, color: secondTextColor, marginTop: '4%', marginBottom: '4%' }}>
					Sample sentence of Time
				</Text>
				<View style={styles.translateContainer}>
					<View style={styles.textContainer}>
						<View style={{ width: '10%', paddingTop: '6%' }}>
							<IconButton iconName={'volume-high'} onPress={voiceSpeech} />
						</View>
						<View style={styles.sentenceContainer}>
							<Sentence text={'九月'} isSelected={true} isAnchor />
							<Sentence text={'九月'} isSelected={false} isAnchor />
							<Sentence text={'九月'} isSelected={false} />
							<Sentence text={'九月'} isSelected={false} />
						</View>
					</View>
					<View
						style={{
							borderTopWidth: 1,
							borderColor: 'rgba(45, 57, 66, 0.1);',
							paddingVertical: '3%',
						}}>
						<Text
							style={{
								...pTextStyle,
								color: secondTextColor,
							}}>
							Your birthday falls on September 12.
						</Text>
					</View>
					<View
						style={{
							borderTopWidth: 1,
							borderColor: 'rgba(45, 57, 66, 0.1);',
							paddingVertical: '3%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<FontAwesome
								name='anchor'
								size={10}
								color={primaryColor}
								style={{ marginRight: '2%' }}
							/>
							<Text
								style={{
									...pTextStyle,
									fontWeight: '700',
									marginRight: '2%',
									color: secondTextColor,
								}}>
								Key Words :
							</Text>
							<Text style={{ color: secondTextColor }}>星期/礼拜/月/日/号</Text>
						</View>
						<IconButton iconName={'help-circle'} onPress={helper} />
					</View>
				</View>
			</View>
			<View>
				<Text>What is Key Words?</Text>
				<Text>Used to identify the key words or structures of this grammar point.</Text>
			</View>
		</Layout>
	)
}

export default Grammar

const styles = StyleSheet.create({
	header: {
		height: '15%',
		display: 'flex',
		flexDirection: 'row',
		paddingLeft: '5%',
		paddingRight: '35%',
		paddingTop: '18%',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 12,
		fontWeight: '400',
		color: 'white',
	},
	translateContainer: {
		width: '100%',
		height: '50%',
		backgroundColor: 'white',
		padding: '3%',
		borderRadius: 10,
	},
	textContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '65%',
	},
	sentenceContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '90%',
		flexWrap: 'wrap',
	},
})
