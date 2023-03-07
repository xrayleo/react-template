import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/views/Home';
import About from '@/views/About';
import Test from '@/views/Test';
import Loadable from '@/components/Loadable';
import { lazy } from 'react';

const test = Loadable(lazy(() => import('../views/Test')));

function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/test" element={test}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
