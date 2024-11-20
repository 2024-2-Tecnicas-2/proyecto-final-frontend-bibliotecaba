import './App.css';
import FooterComponent from './estilosComponentes/FooterComponent';
import { HeaderComponent } from './estilosComponentes/HeaderComponent';
import ListaLibro from './estilosComponentes/ListaLibro';

function App() {
    return (
        <div>
          <HeaderComponent/>
           <ListaLibro/>
            <FooterComponent/>
        </div>
    );
}

export default App;
