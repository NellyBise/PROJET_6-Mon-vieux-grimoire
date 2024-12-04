export default function Stars({ number }) {
  return (
    <div className="flex gap-1 text-3xl">
      <p className={`${number > 0 ? 'text-amber-400' : 'text-slate-300'}`}>★</p>
      <p className={`${number > 1 ? 'text-amber-400' : 'text-slate-300'}`}>★</p>
      <p className={`${number > 2 ? 'text-amber-400' : 'text-slate-300'}`}>★</p>
      <p className={`${number > 3 ? 'text-amber-400' : 'text-slate-300'}`}>★</p>
      <p className={`${number > 4 ? 'text-amber-400' : 'text-slate-300'}`}>★</p>
    </div>
  )
}
