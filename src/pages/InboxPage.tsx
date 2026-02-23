import SearchBar from '../components/SearchBar'
import SentenceCard from '../components/SentenceCard'
import TagFilter from '../components/TagFilter'
import type { Sentence } from '../types/sentence'
import { filterByTag, searchSentences, sortByNewest } from '../utils/sentence'

interface InboxPageProps {
  sentences: Sentence[]
  searchQuery: string
  selectedTag: string
  tags: string[]
  onSearchQueryChange: (value: string) => void
  onSelectTag: (tag: string) => void
  onToggleFavorite: (id: string) => void
}

function InboxPage({
  sentences,
  searchQuery,
  selectedTag,
  tags,
  onSearchQueryChange,
  onSelectTag,
  onToggleFavorite,
}: InboxPageProps) {
  const filtered = sortByNewest(filterByTag(searchSentences(sentences, searchQuery), selectedTag))

  return (
    <section className="page">
      <h2>Inbox</h2>
      <SearchBar value={searchQuery} onChange={onSearchQueryChange} />
      <TagFilter tags={tags} selectedTag={selectedTag} onSelectTag={onSelectTag} />

      <div className="card-list">
        {filtered.length === 0 && <p className="empty">조건에 맞는 문장이 없습니다.</p>}
        {filtered.map((sentence) => (
          <SentenceCard key={sentence.id} sentence={sentence} onToggleFavorite={onToggleFavorite} />
        ))}
      </div>
    </section>
  )
}

export default InboxPage
