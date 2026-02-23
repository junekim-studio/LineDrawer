import { useMemo, useState } from 'react'
import FloatingAddButton from './components/FloatingAddButton'
import { sampleSentences } from './data/sampleSentences'
import { useLocalStorage } from './hooks/useLocalStorage'
import AddSentencePage from './pages/AddSentencePage'
import InboxPage from './pages/InboxPage'
import ReviewPage from './pages/ReviewPage'
import type { NewSentenceInput, Sentence } from './types/sentence'
import { getAllTags } from './utils/sentence'
import './App.css'

type PageKey = 'inbox' | 'add' | 'review'

function App() {
  const [page, setPage] = useState<PageKey>('inbox')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [sentences, setSentences] = useLocalStorage<Sentence[]>('linedrawer.sentences.v1', sampleSentences)

  const tags = useMemo(() => getAllTags(sentences), [sentences])

  const addSentence = (input: NewSentenceInput) => {
    const timestamp = new Date().toISOString()
    const newSentence: Sentence = {
      id: crypto.randomUUID(),
      text: input.text,
      meaning: input.meaning,
      note: input.note,
      tags: input.tags,
      isFavorite: false,
      reviewCount: 0,
      createdAt: timestamp,
      updatedAt: timestamp,
    }

    setSentences((prev) => [newSentence, ...prev])
    setPage('inbox')
  }

  const toggleFavorite = (id: string) => {
    setSentences((prev) =>
      prev.map((sentence) =>
        sentence.id === id
          ? {
              ...sentence,
              isFavorite: !sentence.isFavorite,
              updatedAt: new Date().toISOString(),
            }
          : sentence,
      ),
    )
  }

  const markReviewed = (id: string) => {
    setSentences((prev) =>
      prev.map((sentence) =>
        sentence.id === id
          ? {
              ...sentence,
              reviewCount: sentence.reviewCount + 1,
              lastReviewedAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
          : sentence,
      ),
    )
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Linedrawer</h1>
        <p>Save now, review later.</p>
      </header>

      <main>
        {page === 'inbox' && (
          <InboxPage
            sentences={sentences}
            searchQuery={searchQuery}
            selectedTag={selectedTag}
            tags={tags}
            onSearchQueryChange={setSearchQuery}
            onSelectTag={setSelectedTag}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {page === 'add' && <AddSentencePage onSave={addSentence} />}
        {page === 'review' && <ReviewPage sentences={sentences} onMarkReviewed={markReviewed} />}
      </main>

      <nav className="bottom-nav" aria-label="Bottom Navigation">
        <button
          type="button"
          className={page === 'inbox' ? 'active' : ''}
          onClick={() => setPage('inbox')}
        >
          Inbox
        </button>
        <button
          type="button"
          className={page === 'review' ? 'active' : ''}
          onClick={() => setPage('review')}
        >
          Review
        </button>
      </nav>

      <FloatingAddButton onClick={() => setPage('add')} />
    </div>
  )
}

export default App
