import type { Sentence } from '../types/sentence'

export function normalizeTags(rawTags: string) {
  return rawTags
    .split(',')
    .map((tag) => tag.trim().toLowerCase())
    .filter((tag, index, self) => tag.length > 0 && self.indexOf(tag) === index)
}

export function getAllTags(sentences: Sentence[]) {
  return Array.from(new Set(sentences.flatMap((sentence) => sentence.tags))).sort()
}

export function searchSentences(sentences: Sentence[], query: string) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return sentences

  return sentences.filter((sentence) => {
    const fields = [sentence.text, sentence.meaning ?? '', sentence.note ?? '', sentence.tags.join(' ')]
    return fields.some((field) => field.toLowerCase().includes(normalized))
  })
}

export function filterByTag(sentences: Sentence[], tag: string) {
  if (!tag) return sentences
  return sentences.filter((sentence) => sentence.tags.includes(tag))
}

export function sortByNewest(sentences: Sentence[]) {
  return [...sentences].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}
