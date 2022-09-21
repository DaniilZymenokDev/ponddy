import { View } from 'react-native'
import React, { FC } from 'react'

interface ILayout {
	children: React.ReactNode
}

export const styleCenter = {
	width: '100%',
	height: '100%',
	backgroundColor: 'white',
}

const Layout: FC<ILayout> = ({ children }) => {
	return <View style={styleCenter}>{children}</View>
}

export default Layout
