import { getTranslation } from "../lib/locales/pt"
import { renderText } from "../utils/tokenMap"

type ItemRowProps = {
  item: Item
  checked: boolean
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
		<p
			className={`text-left text-base sm:text-lg flex-1 break-words ${
				checked ? 'text-white/40 line-through' : ''
			}`}
		>
			{renderText(getTranslation(item?.name || item?.description || ''))}
		</p>
	</div>
)