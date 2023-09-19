import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from '@/laylout/header/Header';
import Footer from '@/laylout/footer/Footer';
function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
