interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-wrap">
      <span className="label">Search</span>
      <input
        className="search-input"
        type="search"
        placeholder="문장, 의미, 메모, 태그 검색"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export default SearchBar
