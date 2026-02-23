interface TagFilterProps {
  tags: string[]
  selectedTag: string
  onSelectTag: (tag: string) => void
}

function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  if (tags.length === 0) return null

  return (
    <div className="tag-chip-wrap">
      <button
        type="button"
        className={`tag-chip ${selectedTag === '' ? 'active' : ''}`}
        onClick={() => onSelectTag('')}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={`tag-chip ${selectedTag === tag ? 'active' : ''}`}
          onClick={() => onSelectTag(tag)}
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}

export default TagFilter
