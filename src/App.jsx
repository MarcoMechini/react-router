import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './components/AppLayout'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import PostsPage from './components/pages/PostsPage';
import DetailPage from './components/pages/DetailPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/posts/:id" element={<DetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}