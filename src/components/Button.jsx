export default function Button({label, onClick}) {
  return (
    <section>
        <button type="button" onClick={onClick}>{label}</button>
    </section>
  )
}
