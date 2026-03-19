type Props = {
  title: string
}

const Label = ({ title }: Props) => {
  return (
    <div className="flex gap-1 items-end justify-center max-w-full break-words">
      <img src="/img/flourish.png" className="scale-x-[-1] h-6 mb-0.5" />
      <p className="flex-1 text-2xl capitalize font-semibold hover:underline break-words text-center">
        {title}
      </p>
      <img src="/img/flourish.png" className="h-6 mb-0.5" />
    </div>
  )
}

export default Label