import type { Sentence } from '../types/sentence'

export interface AIAnalysisResult {
  summary: string
  keyExpressions: string[]
  nuance: string
  examples: string[]
}

// Extension point for future AI integration.
// Replace this mocked function with real API calls later.
export async function analyzeSentenceWithAI(
  _sentence: Sentence,
): Promise<AIAnalysisResult | null> {
  return null
}
