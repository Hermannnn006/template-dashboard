import '@/assets/css/index.css'
import { Suspense, lazy } from 'react'
import DefaultLayout from './layout/DefaultLayout'
import { Routes, Route } from 'react-router-dom'

const Dashboard = lazy(() => import('@/pages/dashboard'))

function App() {

  return (
    <DefaultLayout>
      <Routes>
        <Route
            index
            element={
                <Suspense fallback={ <div>Loading...</div> }>
                  <Dashboard />
                </Suspense>
            }
          />
      </Routes>
    </DefaultLayout>
  )
}

export default App
