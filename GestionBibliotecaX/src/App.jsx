import { useState } from "react";
import './App.css';  // Archivo CSS para estilos

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  // Lista de libros
  const bookList = [
    { 
      title: 'El Gran Gatsby', 
      author: 'F. Scott Fitzgerald', 
      imageUrl: 'https://via.placeholder.com/100x150.png?text=El+Gran+Gatsby' 
    },
    { 
      title: 'Matar a un Ruiseñor', 
      author: 'Harper Lee', 
      imageUrl: 'https://via.placeholder.com/100x150.png?text=Matar+a+un+Ruiseñor' 
    },
    { 
      title: '1984', 
      author: 'George Orwell', 
      imageUrl: 'https://via.placeholder.com/100x150.png?text=1984' 
    },
    { 
      title: 'Orgullo y Prejuicio', 
      author: 'Jane Austen', 
      imageUrl: 'https://via.placeholder.com/100x150.png?text=Orgullo+y+Prejuicio' 
    },
    { 
      title: 'Cien Años de Soledad', 
      author: 'Gabriel García Márquez', 
      imageUrl: 'https://via.placeholder.com/100x150.png?text=Cien+Años+de+Soledad' 
    },
    { 
      title: 'Don Quijote de la Mancha', 
      author: 'Miguel de Cervantes', 
      imageUrl: 'https://via.placeholder.com/100x150.png?text=Don+Quijote' 
    }
  ];

  return (
    <div className="App">
      {/* Barra de navegación */}
      <nav className="navbar">
        <ul>
          <li onClick={() => handleNavClick('home')}>Inicio</li>
          <li onClick={() => handleNavClick('collections')}>Colecciones</li>
          <li onClick={() => handleNavClick('about')}>Acerca de</li>
          <li onClick={() => handleNavClick('library')}>Biblioteca</li>
          <li onClick={() => handleNavClick('support')}>Soporte</li>
          <li onClick={() => handleNavClick('news')}>Noticias</li>
          <li>Español</li>
        </ul>
      </nav>

      {/* Sección de portada */}
      {activeSection === 'home' && (
        <header className="header">
          <div className="overlay">
            <h1>Bienvenido a la Librería</h1>
            <p>Explora nuestras colecciones de textos históricos</p>
            <div className="scroll-down">⬇️ Desplázate hacia abajo</div>
          </div>
        </header>
      )}

      {/* Sección de Biblioteca */}
      {activeSection === 'library' && (
        <section className="library">
          <h2>Nuestra Biblioteca</h2>
          <div className="book-list">
            {bookList.map((book, index) => (
              <div className="book" key={index}>
                <img src={book.imageUrl} alt={book.title} />
                <h3>{book.title}</h3>
                <p>Autor: {book.author}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
