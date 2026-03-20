import { renderText } from "../utils/tokenMap"
import CustomCheckbox from "./Checkbox"

type ItemRowProps = {
	item: Item
	text: string
	checked: boolean
	url?: string
	toggle: () => void
}

export const ItemRow = ({ item, text, checked, toggle }: ItemRowProps) => (
	<div className="flex gap-2 mb-1">
		<CustomCheckbox checked={checked} toggle={toggle} />
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
				{renderText(text)}
			</a>
		)}

		{!item.url && (
			<p
				className={`text-left  md:text-lg text-xl flex-1 break-words ${
					checked ? 'text-white/40 line-through' : ''
				}`}
			>
				{renderText(text)}
			</p>
		)}
	</div>
)