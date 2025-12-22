interface Props {
  text: string
}
export const DeactivateChip = ({ text }: Props) => {
  return (
    <p className='text-gray-400 bg-gray-100 px-2 rounded-full'>{text}</p>
  )
}
