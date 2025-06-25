import React from "react";
import Header from "sections/Header";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, showHeader = true }) => {
  return (
    <div className="relative bg-black min-h-screen">
      {showHeader && (
        <Header />
      )}
      <main className={showHeader ? "pt-20" : ""}>
        {children}
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Layout; 