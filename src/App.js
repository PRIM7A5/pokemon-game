import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header 
        title="This is title" 
        descr="This is Description!"
      />
      <Layout
        urlBg="./assets/bg2.jpg"
      />
      <Layout
        colorBg="#00ff00"
      />
      <Layout
        urlBg="./assets/bg3.jpg"
      />
      <Footer />
    </>
  );
}


export default App;
