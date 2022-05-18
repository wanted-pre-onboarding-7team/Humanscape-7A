import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import ReactQuery from './ReactQuerySearch'
import RecoilSearch from './RecoilSearch'
import ReduxToolkitSearch from './ReduxToolkitSearch'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<ReactQuery />} />
        <Route path='redux' element={<ReduxToolkitSearch />} />
        <Route path='/recoil' element={<RecoilSearch />} />
      </Route>
    </Routes>
  )
}

export default App
