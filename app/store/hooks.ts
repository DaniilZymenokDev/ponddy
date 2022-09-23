import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './index'
import { bindActionCreators } from '@reduxjs/toolkit'
import { dictionaryListReducerActions } from './dictionaryListSlice'
import { statesListReducerActions } from './statesSlice'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const allActions = {
	...dictionaryListReducerActions,
	...statesListReducerActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(allActions, dispatch)
}
