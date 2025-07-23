import { Route, Routes } from 'react-router-dom'
import GettingStartedPage from './pages/GettingStartedPage.tsx';
import HomePage from "./pages/HomePage.tsx"


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/getting-started" element={<GettingStartedPage />}/>
    </Routes>
  )
}

export default App
