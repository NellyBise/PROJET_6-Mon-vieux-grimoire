export default function Button({
  title,
  clickFunction,
  disabled,
  condition = 'true',
}) {
  return (
    <button
      className="bg-orange-950 text-white px-4 py-3 rounded w-max flex gap-4 items-center self-center duration-300 hover:bg-orange-800 disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
      onClick={clickFunction}
      disabled={disabled}
    >
      {title}
    </button>
  )
}
