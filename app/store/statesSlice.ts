import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IVocabItem } from '../components/screens/Learning/VocabItem'

interface IStates {
	isModal: boolean
}

const initialState: IStates = {
	isModal: false,
}

const statesListReducer = createSlice({
	name: 'statesList',
	initialState: initialState,
	reducers: {
		changeModal: (state, action: any) => {
			state.isModal = action.payload
		},
	},
})
export const statesListReducerActions = statesListReducer.actions
export const { changeModal } = statesListReducerActions
export default statesListReducer.reducer
