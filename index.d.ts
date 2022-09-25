import { ReactNode } from 'react'
import { TooltipProps as Props } from 'react-native-walkthrough-tooltip'

declare module 'react-native-walkthrough-tooltip' {
	export interface TooltipProps extends Props {
		children: ReactNode
	}
}
