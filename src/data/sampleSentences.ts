import type { Sentence } from '../types/sentence'

const now = new Date().toISOString()

export const sampleSentences: Sentence[] = [
  {
    id: 's1',
    text: 'I need to keep this phrase in my active vocabulary.',
    meaning: '이 표현을 적극적으로 사용하는 어휘로 유지해야 한다.',
    note: 'active vocabulary vs passive vocabulary 구분',
    tags: ['vocabulary', 'speaking'],
    isFavorite: true,
    reviewCount: 3,
    lastReviewedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 's2',
    text: 'Could you walk me through your reasoning?',
    meaning: '네가 어떤 추론을 했는지 단계적으로 설명해 줄래?',
    note: '회의/협업 상황에서 자주 씀',
    tags: ['meeting', 'question'],
    isFavorite: false,
    reviewCount: 1,
    lastReviewedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 's3',
    text: 'Consistency beats intensity.',
    meaning: '강도보다 꾸준함이 더 중요하다.',
    note: '학습 습관 관련 문장',
    tags: ['mindset'],
    isFavorite: false,
    reviewCount: 0,
    createdAt: now,
    updatedAt: now,
  },
]
