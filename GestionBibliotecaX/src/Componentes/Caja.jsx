
function Caja(props) {

    return (
        <>
            <div className='contenedorTexto'>
                <img
                    className='contenedorImagen'
                    src={require(`../imagenes/${props.imagen}`)}
                    alt={props.altImagen}
                />
                <h5
                    className='contenedorTitulo'>{props.titulo}
                </h5>
                <p
                    className='contenedorParrafo'>{props.texto}
                </p>
                <button
                    className='botonMasInfo'> Ver mas
                    informacion
                </button>
            </div>
        </>
    )
}

export { Caja}
