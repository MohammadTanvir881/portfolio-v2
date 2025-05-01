import React, { ReactNode } from "react";
import Navigation from "../component/navigation";
import Footer from "../component/footer";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto">
      <div className="sticky top-0 z-50 bg-slate-900">
        <Navigation />
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
