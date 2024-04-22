import { RefObject, useEffect } from 'react'

const useOutSideClick = ({
  ref,
  callback,
}: {
  ref?: RefObject<HTMLElement> | null
  callback: () => void
}) => {
  useEffect(() => {
    if (!callback) {
      return
    }
    const handleOutSideClick = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleOutSideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [ref, callback])
}

export default useOutSideClick
