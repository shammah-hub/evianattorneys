"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/Loadingscreen";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <html lang="en">
      <body data-cjcrx="addYes">
        {/* Pass the loading state to the LoadingScreen component */}
        <LoadingScreen isLoading={isLoading} />
        
        {/* Use opacity and pointer-events to hide the content while loading */}
        <div 
          className={`transition-opacity duration-500 ${isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}