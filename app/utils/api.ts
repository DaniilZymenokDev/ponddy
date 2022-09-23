import axios, { AxiosResponse } from 'axios'
import { dictItemResponse } from '../../models/dictListResponse'
import { savedObjectResponse } from '../../models/savedListResponse'

export const _api = axios.create({
	baseURL: 'https://dictionary-api-development.ponddy.com/api/v1',
	// baseURL: process.env.REACT_APP_BASE_URL,
})

//TODO: token must be saved in storage
_api.interceptors.request.use((config) => {
	config.headers = {
		// Authorization: `SSO ${process.env.REACT_APP_AUTH_JWT}`,
		Authorization:
			'SSO eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iml2YW4ubnVrb2xAcGVjb2Rlc29mdHdhcmUuY29tNjM4MiIsImZpcnN0X25hbWUiOiIiLCJsYXN0X25hbWUiOiIiLCJpbWFnZSI6Imh0dHBzOi8vcG9uZGR5LWF1dGgtZGV2ZWxvcC5zMy5hbWF6b25hd3MuY29tL3N0YXRpYy91c2VyLWltYWdlcy84OTg2Mjg2OS1lNDg5LTQzMGItOTg1Zi0yNGZhNzMzYWQwMTYucG5nPzE2NTkzNDQwNzkiLCJlbWFpbCI6Iml2YW4ubnVrb2xAcGVjb2Rlc29mdHdhcmUuY29tIiwidGltZSI6IjE2NTkzNDQwNzkuOTg1NzM2NCIsImFwaSI6IjIzOGRjYzNkLTgyMWQtNDlkMi1hYjhjLTQwZmRkM2ZmOWRiMSIsInV1aWQiOiI4OTg2Mjg2OS1lNDg5LTQzMGItOTg1Zi0yNGZhNzMzYWQwMTYiLCJsYXN0X3NvdXJjZSI6bnVsbCwicmVhbF9lbWFpbCI6bnVsbH0.VOfUPJoybMIja5i12BsCvxRwsmltnle6d5BwoXbN3UQ',
		Cookie: 'sessionid=ba9pzdtbp91hfkqi91blljl357e6ybzh',
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
		return result.data
	},
}
