import { HashRouter, Routes, Route } from 'react-router-dom';
import Test from './Pages/Test';
import MainPage from './Pages/MainPage';
import Blank from './Pages/Blank';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/blank" element={<Blank />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
