// src/context/LoadingContext.ts
import { createContext, Dispatch, SetStateAction } from 'react'

interface LoadingContextProps {
  loading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const LoadingContext = createContext<LoadingContextProps>({
  loading: false,
  setIsLoading: () => {},
})
