export interface Sentence {
  id: string
  text: string
  meaning?: string
  note?: string
  tags: string[]
  isFavorite: boolean
  reviewCount: number
  lastReviewedAt?: string
  createdAt: string
  updatedAt: string
}

export interface NewSentenceInput {
  text: string
  meaning?: string
  note?: string
  tags: string[]
}
