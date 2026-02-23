import { useMemo, useState } from 'react'
import type { Sentence } from '../types/sentence'
import { sortByNewest } from '../utils/sentence'

interface ReviewPageProps {
  sentences: Sentence[]
  onMarkReviewed: (id: string) => void
}

function ReviewPage({ sentences, onMarkReviewed }: ReviewPageProps) {
  const reviewList = useMemo(() => sortByNewest(sentences), [sentences])
  const [index, setIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)

  if (reviewList.length === 0) {
    return (
      <section className="page">
        <h2>Review</h2>
        <p className="empty">아직 저장된 문장이 없습니다. 먼저 문장을 추가해 주세요.</p>
      </section>
    )
  }

  const current = reviewList[index % reviewList.length]

  const handleMarkReviewed = () => {
    onMarkReviewed(current.id)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviewList.length)
    setShowMeaning(false)
  }

  return (
    <section className="page">
      <h2>Review</h2>
      <article className="review-card">
        <p className="text">{current.text}</p>

        <button type="button" className="ghost-btn" onClick={() => setShowMeaning((prev) => !prev)}>
          {showMeaning ? '의미 숨기기' : '의미 보기'}
        </button>

        {showMeaning && <p className="meaning">{current.meaning || '저장된 의미가 없습니다.'}</p>}

        {current.note && <p className="note">📝 {current.note}</p>}

        <div className="review-actions">
          <button type="button" className="primary-btn" onClick={handleMarkReviewed}>
            Mark Reviewed
          </button>
          <button type="button" className="ghost-btn" onClick={handleNext}>
            Next
          </button>
        </div>

        <p className="review-meta">Review Count: {current.reviewCount}</p>
      </article>
    </section>
  )
}

export default ReviewPage
