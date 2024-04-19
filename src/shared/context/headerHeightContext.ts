import { createContext, useContext } from 'react'

interface HeightContextType {
  headerHeight: number
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>
}

const HeaderHeightContext = createContext<HeightContextType | undefined>(
  undefined
)

export const useHeightContext = () => {
  const context = useContext(HeaderHeightContext)
  if (context === undefined) {
    throw new Error('useHeightContext must be used within a HeightProvider')
  }
  return context
}
export default HeaderHeightContext
