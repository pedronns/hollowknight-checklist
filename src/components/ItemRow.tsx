import { getTranslation } from "../lib/locales/pt"
import { renderText } from "../utils/tokenMap"

type ItemRowProps = {
  item: Item
  checked: boolean
  url?: string
  toggle: () => void
}

export const ItemRow = ({ item, checked, toggle }: ItemRowProps) => (
	<div className="flex gap-2 mb-1">
		<input
			type="checkbox"
			checked={checked}
			onChange={toggle}
			className="
				h-5 w-5 mt-1 rounded border border-white
				accent-black/90
			"
		/>
		{item.icon && (
			<img
				src={`/img/charms/${item.icon}`}
				className="w-5 h-5 mt-1 flex-shrink-0"
			/>
		)}

		{item.url && (
			<a
				className={`text-left  md:text-lg text-xl flex-1 break-words hover:underline ${
					checked
						? 'text-white/40 line-through  pointer-events-none '
						: ''
				}`}
				href={item.url}
				target="_blank"
			>
				{renderText(
					getTranslation(item?.name || item?.description || ''),
				)}
			</a>
		)}

		{!item.url && (
			<p
				className={`text-left  md:text-lg text-xl flex-1 break-words ${
					checked
						? 'text-white/40 line-through'
						: ''
				}`}
			>
				{renderText(
					getTranslation(item?.name || item?.description || ''),
				)}
			</p>
		)}
	</div>
)