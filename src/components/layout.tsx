import Footer from "./footer";
import Header from "./Header/header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};
