import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));

function AppRoutes() {
    return (
        <div>
            <Suspense fallback={<FullScreenLoader/>}>
            <Routes>
                <Route element={<StructureLayout />} >
                    <Route index path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Route>
            </Routes>
            </Suspense>
        </div>
    );
}

export default AppRoutes;