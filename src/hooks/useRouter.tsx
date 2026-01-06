import { useLocation, useNavigate } from 'react-router'

export function useRouter () {
  const navigate = useNavigate()
  const location  = useLocation()

  const navigateTo = (path: string) => {
    navigate(path)
  }

  return {
    currentPath: location.pathname,
    navigateTo,
  }
}
