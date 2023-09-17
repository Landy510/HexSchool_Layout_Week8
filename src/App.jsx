import { useState } from 'react'
import './App.scss';
import Header from '@/laylout/header/Header';
import Index from '@/pages/index/Index';
import Footer from '@/laylout/footer/Footer';
function App() {

  return (
    <>
      <Header />
      <main>
        <Index />
      </main>
      <Footer />
    </>
  )
}

export default App
