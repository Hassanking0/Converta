type Props = {
	title: string
	onClick: () => void
}

export const CustomButton = (props: Props) => {
	return (
		<button
			onClick={props.onClick}
			className='bg-blue-500 text-white py-3 px-6 cursor-pointer hover:bg-purple-900 rounded-md transition mr-4'
		>
			{props.title}
		</button>
	)
}
