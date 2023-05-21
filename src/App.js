import Header from "./Componentes/Encabezado";
import Footer from "./Componentes/Rodapie";
import Banner from "./Componentes/Banner";
import Cuerpo from "./Global";
import Carrusel from "./Componentes/Carousel/Carrusel";
function App() {
  return (
    <Cuerpo>
      <Header/>
      <Banner/> 
      <Carrusel/>
      <Footer/>
    </Cuerpo>
  );
}

export default App;
