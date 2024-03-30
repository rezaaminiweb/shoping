'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import './../assets/css/ReactToastify.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShopContextProvider } from "./components/context/Shopcontext";
import { metadata } from "./metadata"; // وارد کردن ماژول metadata
import { ToastContainer } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" >
      <body className={inter.className + 'relative overflow-hidden'}>
      
        <ShopContextProvider>
        <App/>
        
        <Header/>
        {children}
        <Footer />
        </ShopContextProvider>
        
        </body>
    </html>
  );
}
const App = ()=>{
  return(
    <div>
      <ToastContainer/>
    </div>
  )
}
