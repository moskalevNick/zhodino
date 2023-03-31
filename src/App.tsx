import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { NewsModule } from './modules/NewsModule/NewsModule';
import { StructureModule } from './modules/StructureModule/StructureModule';
import { TableModule } from './modules/TableModule/TableModule';
import i18n from './i18n';
import { PhotoModule } from './modules/PhotoModule/PhotoModule';
import { SponsorsModule } from './modules/SponsorsModule/SponsorsModule';
import { AttributesModule } from './modules/AttributesModule/AttributesModule';
import { Footer } from './components/Footer/Footer';

function App() {
  const [isRus, setIsRus] = useState(true);

  const currentLanguage = localStorage.getItem('i18nextLng');

  useEffect(() => {
    if (currentLanguage === 'en') {
      setIsRus(false);
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('ru');
    }
  }, [currentLanguage]);
  console.log(isRus);

  return (
    <BrowserRouter>
      <div className='mainContainer'>
        <Routes>
          <Route
            element={
              <>
                <Header />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route path='news' element={<NewsModule />} />
            <Route path='structure' element={<StructureModule />} />
            <Route path='table' element={<TableModule />} />
            <Route path='photo' element={<PhotoModule />} />
            <Route path='sponsors' element={<SponsorsModule />} />
            <Route path='attributes' element={<AttributesModule />} />
            <Route path='*' element={<Navigate to='/news' replace={true} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
