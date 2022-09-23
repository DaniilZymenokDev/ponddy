export interface savedObjectResponse {
	next: string
	previous: string | null
	results: Array<savedItemResponse>
}

export interface savedItemResponse {
	object_id: string
	deleted: boolean
	created_at: string
	updated_at: string
	email_encode: string
	grammar: {
		id: number
		gid: string
		gid_hsk3: string
		name: string
		name_trad: string
		name_hsk3: string
		anchor_words: string
		explan: string
		explan_trad: string
		search_keyword: string
		level_hsk: string | null
		level_hsk3: string
		video: string | null
		thumbnail: string
		video_trad: string | null
		thumbnail_trad: string
	}
	saved: boolean
	learned: boolean
}
