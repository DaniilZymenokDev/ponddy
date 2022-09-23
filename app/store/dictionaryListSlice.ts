import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IVocabItem } from '../components/screens/Learning/VocabItem'

const initialState: IVocabItem[] = []

const dictionaryListReducer = createSlice({
	name: 'dictionaryList',
	initialState: initialState,
	reducers: {
		addItem: (state, action: any) => {
			state.unshift(action.payload)
		},
		addList: (state, action: any) => {
			action.payload.map((item: any) => state.push(item))
		},
	},
})
export const dictionaryListReducerActions = dictionaryListReducer.actions
export const { addItem, addList } = dictionaryListReducerActions
export default dictionaryListReducer.reducer
