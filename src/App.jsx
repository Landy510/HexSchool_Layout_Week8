import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
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
