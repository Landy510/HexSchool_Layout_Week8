import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import ScrollToTop from '@/components/scrollToTop/ScrollToTop';

// Individual Route | START
import Index from '@/pages/index/Index.jsx';
const Products = lazy(() => import('@/pages/products/Products.jsx'));
const AboutUs = lazy(() => import('@/pages/aboutUs/AboutUs.jsx'));
const FAQ = lazy(() => import('@/pages/faq/FAQ.jsx'));
const ContactUs = lazy(() => import('@/pages/contactUs/ContactUs.jsx'));
const News = lazy(() => import('@/pages/news/News.jsx'));
const NewsDetail = lazy(() => import('@/pages/news/pages/newsDetail/NewsDetail.jsx'));
const RegisterRootComponent = lazy(() => import('@/pages/register/index.jsx'));
const Register = lazy(() => import('@/pages/register/pages/register/Register.jsx'));
const Login = lazy(() => import('@/pages/register/pages/login/Login.jsx'));
// END

function App() {

  return (
    <HashRouter>
      <Header />
      <ScrollToTop />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route index element={<Index />}></Route>
            <Route path='/products/:name' element={<Products />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/contactUS' element={<ContactUs />} />
            <Route path='/news'>
              <Route index element={<News />} />
              <Route path=':id' element={<NewsDetail />} />
            </Route> 
            <Route path='/user' element={<RegisterRootComponent />}>
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
            </Route> 
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
