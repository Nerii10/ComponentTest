import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Blender from './Pages/Blender/blender';
import WebDevelopment from './Pages/WebDevelopment/WebDevelopment';
import UnrealEngine from './Pages/UnrealEngine/UnrealEngine';
import Error404 from './Pages/404/404';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="blender" element={<Blender />} />
        <Route path="unrealengine" element={<UnrealEngine />} />
        <Route path="webdevelopment" element={<WebDevelopment />} />
        <Route path="contact" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
