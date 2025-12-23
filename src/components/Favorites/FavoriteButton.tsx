import { Heart as HeartIcon } from '@/icons/Heart'
import { HeartFilled as HeartFilledIcon } from '@/icons/HeartFilled'

interface Props {
  isFavorite: boolean
  className?: string
}

export const FavoriteButton = ({ isFavorite, className }: Props) => {
  return (
    <button type='button' className={`p-2 py-3 rounded-full hover:bg-amber-100 transition-colors duration-300 cursor-pointer bg-gray-50 ${className}`}>
      {isFavorite ? <HeartFilledIcon className='size-4 text-red-500' /> : <HeartIcon className='size-4' />}
    </button>
  )
}
