import React, { ReactNode } from "react";
import Navigation from "../component/navigation";
import Footer from "../component/footer";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto">
      <Navigation />
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
