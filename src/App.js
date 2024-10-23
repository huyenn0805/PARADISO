// import './App.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
import Cn from './camnangdulich';
import Banner from './Banner';
import EventSection from "./tiec";
import Registration from './RegisterForm';
import LoginForm from './LoginForm';

import 'aos/dist/aos.css'; // Import CSS của AOS
import { useEffect } from 'react';
import Aos from 'aos';
// import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lienhe from './lienhe';
import Spa from './spa';
import Dichvu from './dichvu';
import Trangchu from './trangchu';
// import Phong from './phong';
// import Cn from './1';
import ChiTiet from './ChiTiet';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Thời gian của hiệu ứng
      once: true, // Chỉ chạy hiệu ứng một lần
    });
  }, []);
  return (
    <BrowserRouter>
        <div className="container">
            {<header><Header /></header>}
            <main>
                <article className="blog-page-wrapper">
                    <Routes>
                        <Route path="/trangchu" element={<Trangchu />} />
                        {/* <Route path="/BlogPage" element={<BlogPage />} /> */}
                        <Route path="/Banner" element={<Banner />} />
                        <Route path="/tiec" element={<EventSection />} />
                        <Route path="/lienhe" element={<Lienhe/>} />
                        <Route path="/spa" element={<Spa/>} />
                        <Route path="/dichvu" element={<Dichvu/>} />
                        <Route path='dangky' element={<Registration/>} />
                        <Route path='dangnhap' element={<LoginForm/>} />
                        
                        <Route path="/ChiTiet" element={<ChiTiet/>} />
                        {/* <Route path="/phong" element={<Phong/>} /> */}
                        <Route path="/cn" element={<Cn/>} />

                       
                    </Routes>
                </article>
            </main>
            {/* <footer><Footer /></footer> */}
            <footer><Footer /></footer>
            {/* <GlobalStyle></GlobalStyle> */}
        </div>
    </BrowserRouter>

);
}

export default App;
