import { useState } from 'react'
import type { NewSentenceInput } from '../types/sentence'
import { normalizeTags } from '../utils/sentence'

interface AddSentencePageProps {
  onSave: (input: NewSentenceInput) => void
}

function AddSentencePage({ onSave }: AddSentencePageProps) {
  const [text, setText] = useState('')
  const [meaning, setMeaning] = useState('')
  const [note, setNote] = useState('')
  const [tagsRaw, setTagsRaw] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!text.trim()) {
      setError('문장은 필수 입력입니다.')
      return
    }

    onSave({
      text: text.trim(),
      meaning: meaning.trim() || undefined,
      note: note.trim() || undefined,
      tags: normalizeTags(tagsRaw),
    })

    setText('')
    setMeaning('')
    setNote('')
    setTagsRaw('')
    setError('')
  }

  return (
    <section className="page">
      <h2>Add Sentence</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span className="label">Sentence *</span>
          <textarea
            rows={4}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="학습 중 만난 문장을 적어주세요"
          />
        </label>

        <label>
          <span className="label">Meaning / Translation</span>
          <textarea
            rows={3}
            value={meaning}
            onChange={(event) => setMeaning(event.target.value)}
            placeholder="선택 입력"
          />
        </label>

        <label>
          <span className="label">Note</span>
          <textarea
            rows={3}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="문맥, 뉘앙스, 기억 포인트"
          />
        </label>

        <label>
          <span className="label">Tags (comma-separated)</span>
          <input
            type="text"
            value={tagsRaw}
            onChange={(event) => setTagsRaw(event.target.value)}
            placeholder="ex) speaking, idiom"
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button className="primary-btn" type="submit">
          Save Sentence
        </button>
      </form>
    </section>
  )
}

export default AddSentencePage
