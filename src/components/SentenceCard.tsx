import type { Sentence } from '../types/sentence'
import { formatDateTime } from '../utils/date'

interface SentenceCardProps {
  sentence: Sentence
  onToggleFavorite: (id: string) => void
}

function SentenceCard({ sentence, onToggleFavorite }: SentenceCardProps) {
  return (
    <article className="card">
      <div className="card-head">
        <div className="card-tags">
          {sentence.tags.map((tag) => (
            <span key={tag} className="chip">
              #{tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className={`favorite-btn ${sentence.isFavorite ? 'on' : ''}`}
          onClick={() => onToggleFavorite(sentence.id)}
          aria-label="Toggle favorite"
          title="Favorite"
        >
          {sentence.isFavorite ? '★' : '☆'}
        </button>
      </div>

      <p className="text">{sentence.text}</p>
      {sentence.meaning && <p className="meaning">{sentence.meaning}</p>}
      {sentence.note && <p className="note">📝 {sentence.note}</p>}

      <div className="meta-grid">
        <span>Created: {formatDateTime(sentence.createdAt)}</span>
        <span>Reviewed: {sentence.reviewCount}회</span>
        <span>
          Last Review:{' '}
          {sentence.lastReviewedAt ? formatDateTime(sentence.lastReviewedAt) : '아직 없음'}
        </span>
      </div>
    </article>
  )
}

export default SentenceCard
