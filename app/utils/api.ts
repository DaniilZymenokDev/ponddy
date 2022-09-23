import axios, { AxiosResponse } from 'axios'
import { dictItemResponse } from '../../models/dictListResponse'
import { savedObjectResponse } from '../../models/savedListResponse'

export const _api = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
})

//TODO: token must be saved in storage
_api.interceptors.request.use((config) => {
	config.headers = {
		Authorization: `SSO ${process.env.REACT_APP_AUTH_JWT}`,
	}
	return config
})

export const api = {
	getSavedList: async () => {
		const result: AxiosResponse<savedObjectResponse> = await _api.get(`/grammars/saved`)
		return result.data
	},
	getSentence: async () => {
		const result: AxiosResponse<dictItemResponse> = await _api.get(`/grammars/grammar/20`)
		console.log('api:', result)
		return result.data
	},
}
