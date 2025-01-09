import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import PostsPage from './components/PostsPage'
import AppLayout from './components/AppLayout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}