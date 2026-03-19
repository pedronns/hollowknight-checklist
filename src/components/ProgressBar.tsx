type Props = {
  current: number
  total: number
}

export const ProgressBar = ({ current, total }: Props) => {
  const safeTotal = total > 0 ? total : 1
  const safeCurrent = Math.min(current, safeTotal)

  const percent = Math.min((safeCurrent / safeTotal) * 100, 100)

  return (
    <div className="w-full">
      <div
        className="w-full bg-black/40 rounded h-0.5 relative overflow-hidden"
        role="progressbar"
        aria-valuenow={safeCurrent}
        aria-valuemin={0}
        aria-valuemax={safeTotal}
      >
        <div
          className="bg-white/60 h-full rounded transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-xs mt-1 text-right">
        {current} / {total}
      </p>
    </div>
  )
}