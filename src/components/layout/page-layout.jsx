import Navbar from "./navbar";
import Footer from "./footer";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
