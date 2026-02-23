interface FloatingAddButtonProps {
  onClick: () => void
}

function FloatingAddButton({ onClick }: FloatingAddButtonProps) {
  return (
    <button type="button" className="fab" onClick={onClick} aria-label="Add sentence">
      +
    </button>
  )
}

export default FloatingAddButton
