import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import MakaFooter from './Components/Footer/Footer'
import GamesDetails from './Pages/GameDetails/GamesDetails'
import RulesModel from './Components/Rulesmodel.js/RulesModel'
import GamePagess from './Pages/GamePagess/GamePagess'
import ErrorPage from './Pages/Error/ErrorPage'

function App() {

  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/GameInfo/:id' element={<GamesDetails />} />
        <Route path='/Rules' element={<RulesModel />} />
        <Route path='/GamesPages/:name' element={<GamePagess />} />
        <Route path='/*' element={<ErrorPage />} />



      </Routes>
      <MakaFooter/>
      </BrowserRouter>
  )
}

export default App
