import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingContext } from './context/Loading'
import 'react-toastify/dist/ReactToastify.css'
import { Loading } from './components/Loading'
import { ToastContainer } from 'react-toastify'
import { Router } from './routes/router'
import { Box } from '@mui/material'

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <Box sx={{ margin: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
      <LoadingContext.Provider value={{ loading: isLoading, setIsLoading }}>
        <BrowserRouter>
          <Loading />
          <ToastContainer theme="colored" />
          <Router />
        </BrowserRouter>
      </LoadingContext.Provider>
    </Box>
  )
}
