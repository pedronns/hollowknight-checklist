type Props = {
	checked: boolean
	toggle: () => void
}

const Checkbox = ({ checked, toggle }: Props) => {
	return (
		<input
			type="checkbox"
			checked={checked}
			onChange={toggle}
			className={'h-5 w-5 mt-1 appearance-none bg-cover cursor-pointer'}
			style={{
				backgroundImage: `url('/img/notch_${checked ? 'on' : 'off'}.png')`,
			}}
		/>
	)
}

export default Checkbox