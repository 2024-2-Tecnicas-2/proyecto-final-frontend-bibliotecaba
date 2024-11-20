function GeneroCrud() {
    const [generos, setGeneros] = useState([]);
    const [nuevoGenero, setNuevoGenero] = useState("");

    const crearGenero = () => {
        if (nuevoGenero.trim()) {
            setGeneros([...generos, { id: Date.now(), nombre: nuevoGenero }]);
            setNuevoGenero("");
        }
    };

    const eliminarGenero = (id) => {
        setGeneros(generos.filter((genero) => genero.id !== id));
    };

    return (
        <div>
            <h2>Gestión de Géneros</h2>
            <div>
                <input
                    placeholder="Nombre del género"
                    value={nuevoGenero}
                    onChange={(e) => setNuevoGenero(e.target.value)}
                />
                <button onClick={crearGenero}>Crear</button>
            </div>
            <ul>
                {generos.map((genero) => (
                    <li key={genero.id}>
                        <span>{genero.nombre}</span>
                        <button onClick={() => eliminarGenero(genero.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}/////////////// hasta aqui termian el div  retomar otros metodos 

export default GeneroCrud;
