interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const anchorStyles = 'flex items-center justify-center size-10 no-underline rounded-lg transition-colors duration-300 ease-in-out hover:bg-green-pet '
  const handlePrevClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if(!isFirstPage) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if(!isLastPage) {
      onPageChange(currentPage + 1)
    }
  }

  const handleChange = (event: React.MouseEvent<HTMLAnchorElement>, page: number) => {
    event.preventDefault()
    if (page !== currentPage) {
      onPageChange(page)
    }
  }
  return (
    <nav className="flex flex-row gap-2 justify-center mt-8">
      <a href="#" className={`${anchorStyles} ${isFirstPage ? 'opacity-50 pointer-events-none hover:bg-transparent' : ''}`}  onClick={handlePrevClick}>
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 6l-6 6l6 6' />
        </svg>
      </a>
      {
        pages.map((page) => (
          <a href="#" key={page} onClick={(event) => handleChange(event, page)} className={`${anchorStyles} ${currentPage === page ? 'bg-green-pet' : ''}`}>{page}</a>
        ))
      }
      <a href="#" className={`${anchorStyles} ${isLastPage ? 'opacity-50 pointer-events-none hover:bg-transparent' : ''}`} onClick={handleNextClick}>
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 6l6 6l-6 6' />
        </svg>
      </a>
    </nav>
  )
}
