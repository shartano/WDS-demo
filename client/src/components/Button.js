
function Button({ label, onClick }) {
  const isOperator = ["+", "-", "x", "/"].includes(label)
  const isEquals = label === "="

  return (
    <button
      className={`btn ${isOperator ? "btn-operator" : ""} ${isEquals ? "btn-equals" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}

export default Button
