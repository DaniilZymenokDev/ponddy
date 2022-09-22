import { View } from 'react-native'
import React, { FC } from 'react'

interface ILayout {
	children: React.ReactNode
	optionalStyles?: Object
}

export const styleCenter = {
	width: '100%',
	height: '100%',
	backgroundColor: 'white',
}

const Layout: FC<ILayout> = ({ children, optionalStyles }) => {
	return <View style={{ ...styleCenter, ...optionalStyles }}>{children}</View>
}

export default Layout
