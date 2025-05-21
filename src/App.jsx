import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PopularList } from './components/PopularList';
import { Detail } from './components/Detail';
import './styles.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </Router>
  )
}
