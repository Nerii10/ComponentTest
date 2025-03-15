import { Routes, Route } from 'react-router-dom';
import Test from './Pages/Test';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/ComponentTest/" element={<MainPage />} />
      <Route path="/ComponentTest/Test" element={<Test />} />
    </Routes>
  );
}

export default App;
