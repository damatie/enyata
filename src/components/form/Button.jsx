export const Button = ({ onClick, label, styleBtn }) => {
  return (
    <button type="button" onClick={onClick} className={`${styleBtn} bg-primaryBlue px-3 py-2 text-white rounded-md`}>
     {label}
    </button>
  )
}