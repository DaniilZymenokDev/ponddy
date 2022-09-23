import { dictItemResponse } from '../../models/dictListResponse'

export const vocabEmptyItem: dictItemResponse = {
	id: 0,
	name: '',
	name_trad: '',
	explan_en: '',
	explan_en_trad: '',
	level: 0,
	level_hsk: '',
	level_hsk3: '',
	name_hsk3: '',
	name_hsk3_trad: '',
	name_hsk3_original: '',
	gid: '',
	gid_hsk3: '',
	structure: '',
	structure_trad: '',
	explan: '',
	explan_trad: '',
	explan_ja: '',
	explan_ja_trad: '',
	name_trad_ja: '',
	anchor_words: '',
	reference: '',
	video: '',
	video_trad: '',
	search_keyword: '',
	search_keyword_trad: '',
	thumbnail: '',
	thumbnail_trad: '',
	saved: true,
	learned: false,
	sentences: [
		{
			id: 0,
			simp: '',
			trans: '',
			voice: '',
			segments: [
				{
					id: 0,
					levels: {
						level_hsk: null,
						level_hsk3: '',
					},
					word: '',
					pos: '',
					anchor: false,
				},
			],
		},
	],
	tags: [''],
	explan_en_brief: '',
	explan_en_trad_brief: '',
	name_ja: '',
}

export const vocabItemList: dictItemResponse = {
	id: 20,
	name: 'Affirmative + Negative (A-not-A) Question (I)',
	name_trad: 'Affirmative + Negative (A-not-A) Question (I)',
	explan_en:
		'<p>There are two ways to form a question in Chinese. The first one adds the question particle &quot;吗&quot; to the end of a declarative sentence, which is called the &quot;yes or no question.&quot; Another one is composed of both the affirmative and negative forms of the predicate in the sentence, which is called the &quot;affirmative and negative question.&quot; It contains two opposite aspects, and the person answering generally chooses one of the aspects to answer.<br />\r\nFor example:&nbsp;</p>\r\n\r\n<p style="margin-left:40px">(1) 你是老师吗？ (Are you a teacher?)&nbsp;<br />\r\n(2) 你是不是老师？ (Are you a teacher?)</p>',
	explan_en_trad:
		'<p>There are two ways to form a question in Chinese. The first one adds the question particle &quot;嗎&quot; to the end of a declarative sentence, which is called the &quot;yes or no question.&quot; Another one is composed of both the affirmative and negative forms of the predicate in the sentence, which is called the &quot;affirmative and negative question.&quot; It contains two opposite aspects, and the person answering generally chooses one of the aspects to answer.<br />\r\nFor example:&nbsp;</p>\r\n\r\n<p style="margin-left:40px">(1) 你是老師嗎？ (Are you a teacher?)&nbsp;<br />\r\n(2) 你是不是老師？ (Are you a teacher?)</p>',
	level: 0,
	level_hsk: '',
	level_hsk3: '1',
	name_hsk3: 'Asking Affirmative and Negative Questions',
	name_hsk3_trad: 'Asking Affirmative and Negative Questions',
	name_hsk3_original: '提问的方法-用正反疑问形式提问',
	gid: 'G0200',
	gid_hsk3: 'G-HSK3-1-48',
	structure: '',
	structure_trad: '',
	explan:
		'<p>中文的问句有两种。一个是在直述句的句尾加上&ldquo;吗&rdquo;，即是非问句，另一个由句中谓语的肯定形式和否定形式并列构成的正反问句，其中问句中有正反两个方面，回答者一般选择其中一项作答。<br />\r\n例如：</p>\r\n\r\n<p style="margin-left:40px">(1) 你是老师吗？</p>\r\n\r\n<p style="margin-left:40px">(2) 你是不是老师？</p>',
	explan_trad:
		'<p>中文的問句有兩種。一個是在直述句的句尾加上「嗎」，即是非問句，另一個由句中謂語的肯定形式和否定形式並列構成的正反問句，其中問句中有正反兩個方面，回答者一般選擇其中一項作答。<br />\r\n例如：</p>\r\n\r\n<p style="margin-left:40px">(1) 你是老師嗎？</p>\r\n\r\n<p style="margin-left:40px">(2) 你是不是老師？</p>',
	explan_ja:
		'<p>In Chinese, there are two ways to form a question: one adds the question particle 吗 to the end of a declarative sentence, while the other repeats a verb or adjective in its affirmative and negative forms.<br />\r\nFor example:<br />\r\n你是老师吗？ (Are you a teacher?). The question can be&nbsp;formed by saying 你是不是老师？ (Are you a teacher or not?).</p>',
	explan_ja_trad:
		'<p>In Chinese, there are two ways to form a question: one adds the question particle 嗎 to the end of a declarative sentence, while the other repeats a verb or adjective in its affirmative and negative forms.<br />\r\nFor example:<br />\r\n你是老師嗎？(Are you a teacher?). The question can be&nbsp;formed by saying 你是不是老師？(Are you a teacher or not?).</p>',
	name_ja: 'Affirmative + Negative (A-not-A) Question (I)',
	name_trad_ja: 'Affirmative + Negative (A-not-A) Question (I)',
	anchor_words: '不',
	reference: 'HSK3-1-48',
	video: '',
	video_trad: '',
	search_keyword: '',
	search_keyword_trad: '',
	thumbnail: '',
	thumbnail_trad: '',
	saved: true,
	learned: false,
	sentences: [
		{
			id: 49,
			simp: '你 明天 忙 不 忙 ？',
			trans: 'Are you busy tomorrow or not?',
			voice:
				'https://ponddychinese-us-west-2.s3.amazonaws.com/media/voices/grammar_sentences/a0ecefa9e6fd7b72b97cf12f1ab9c6df.mp3',
			segments: [
				{
					id: 5778,
					levels: {
						level_hsk: null,
						level_hsk3: '1',
					},
					word: '你',
					pos: 'pr.',
					anchor: false,
				},
				{
					id: 5665,
					levels: {
						level_hsk: '1',
						level_hsk3: '1',
					},
					word: '明天',
					pos: 'n.',
					anchor: false,
				},
				{
					id: 5447,
					levels: {
						level_hsk: '2',
						level_hsk3: '1',
					},
					word: '忙',
					pos: 'adj.',
					anchor: false,
				},
				{
					id: 586,
					levels: {
						level_hsk: '1',
						level_hsk3: '1',
					},
					word: '不',
					pos: 'adv.',
					anchor: true,
				},
				{
					id: 5447,
					levels: {
						level_hsk: '2',
						level_hsk3: '1',
					},
					word: '忙',
					pos: 'adj.',
					anchor: false,
				},
				{
					word: '？',
					pos: '',
					anchor: false,
				},
			],
		},
		{
			id: 50,
			simp: '你吃 不 吃 中国菜 ？',
			trans: 'Do you eat Chinese food or not?',
			voice:
				'https://ponddychinese-us-west-2.s3.amazonaws.com/media/voices/grammar_sentences/e7372465a6ec15a579e6f05506de4473.mp3',
			segments: [
				{
					id: 5778,
					levels: {
						level_hsk: null,
						level_hsk3: '1',
					},
					word: '你',
					pos: 'pr.',
					anchor: false,
				},
				{
					id: 1062,
					levels: {
						level_hsk: '1',
						level_hsk3: '1',
					},
					word: '吃',
					pos: 'v.',
					anchor: false,
				},
				{
					id: 586,
					levels: {
						level_hsk: '1',
						level_hsk3: '1',
					},
					word: '不',
					pos: 'adv.',
					anchor: true,
				},
				{
					id: 1062,
					levels: {
						level_hsk: '1',
						level_hsk3: '1',
					},
					word: '吃',
					pos: 'v.',
					anchor: false,
				},
				{
					id: 10626,
					levels: {
						level_hsk: '1',
						level_hsk3: '1',
					},
					word: '中国',
					pos: 'n.',
					anchor: false,
				},
				{
					id: 771,
					levels: {
						level_hsk: '1',
						level_hsk3: '1',
					},
					word: '菜',
					pos: 'n.',
					anchor: false,
				},
				{
					word: '？',
					pos: '',
					anchor: false,
				},
			],
		},
	],
	tags: ['Alternative Question', 'Yes or No Question', 'Content Question'],
	explan_en_brief:
		'There are two ways to form a question in Chinese. The first one adds the question particle &quot;吗&quot; to the end of a declarative sentence, which is called the &quot;yes or no question.&quot; Another one is composed of both the affirmative and negative forms of the predicate ...',
	explan_en_trad_brief:
		'There are two ways to form a question in Chinese. The first one adds the question particle &quot;嗎&quot; to the end of a declarative sentence, which is called the &quot;yes or no question.&quot; Another one is composed of both the affirmative and negative forms of the predicate ...',
}
