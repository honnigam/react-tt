export function Tweet(props) {
  return (
    <div>
      <strong>{props.user}</strong>
      <p>{props.content}</p>
      <p>{props.children}</p> {/* referenciado no main.tsx como children */}
      <button>Like</button>
    </div>
  ) 
}