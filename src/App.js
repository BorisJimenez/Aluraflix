import Header from "./Componentes/Encabezado";
import Footer from "./Componentes/Rodapie";
import Cuerpo from "./Global";
import RegistroCategoria from "./Componentes/Registro/RegistroCategoria";
import RegistroVideo from "./Componentes/Registro/RegistroVideo";
import Home from "./Componentes/Home";


function App() {
  return (
    <Cuerpo>
      <Header/>
      <Home/>
      <RegistroCategoria/>
      <RegistroVideo/>
      <Footer/>
    </Cuerpo>
  );
}

export default App;
