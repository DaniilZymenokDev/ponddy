import { configureStore } from '@reduxjs/toolkit'
import dictionaryListReducer from './dictionaryListSlice'
import statesListReducer from './statesSlice'

const store = configureStore({
	reducer: {
		dictionaryList: dictionaryListReducer,
		statesList: statesListReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
