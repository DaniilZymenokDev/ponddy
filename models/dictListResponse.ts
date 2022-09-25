export interface dictListResponse {
	next: string
	previous: string | null
	results: Array<dictItemResponse>
}

export interface ISegment {
	id?: number
	levels?: {
		level_hsk: string | null
		level_hsk3: string | null
	}
	word?: string
	pos?: string
	anchor?: boolean
}
export interface ISentence {
	id?: number
	simp?: string
	trans?: string
	voice?: string
	segments?: Array<ISegment>
}
export interface dictItemResponse {
	id: number
	name: string
	name_trad: string
	explan_en?: string
	explan_trad?: string
	explan_en_trad?: string
	explan_ja?: string
	explan_ja_trad?: string
	name_ja: string
	level: number
	level_hsk: string
	level_hsk3: string
	name_hsk3: string
	name_hsk3_trad: string
	name_hsk3_original: string
	gid: string
	gid_hsk3: string
	structure: string
	structure_trad: string
	explan: string
	name_trad_ja: string
	anchor_words: string
	reference: string
	video: string
	video_trad: string
	search_keyword: string
	search_keyword_trad: string
	thumbnail: string
	thumbnail_trad: string
	saved: boolean
	learned: boolean
	sentences: Array<ISentence>
	tags: Array<string>
	explan_en_brief: string
	explan_en_trad_brief: string
}
