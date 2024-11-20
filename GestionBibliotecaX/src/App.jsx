import './App.css';
import FooterComponent from './estilosComponentes/FooterComponent';
import { HeaderComponent } from './estilosComponentes/HeaderComponent';
import ListaEstudiantes from './estilosComponentes/ListaEstudiantes';

function App() {
    return (
        <div>
          <HeaderComponent/>
          <ListaEstudiantes/>
            <FooterComponent/>
        </div> 
    );
}

export default App;
