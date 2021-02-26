function Welcome(props){
    return (
    <div>
            <h1>Bienvenido : {props.name}</h1>
            <h1>Apellidos : {props.lastName}</h1>
            <h3>{props.children}</h3>
            <h3>{props.envio.nombre.nombre2}</h3>
            <h3>{props.envio.apellido}</h3>
    </div>
    )
}

function Ap2(props) {
    return (
        <div>
            <Welcome name='Miguel' lastName='Simijaca' envio={props.prueba}>
                <div>
                    <h1>Hola mundo</h1>
                </div>
            </Welcome>
        </div>
    )
}

function Ap3(){
    const objeto = {
        nombre : {
            nombre1 : 'miguel',
            nombre2 : 'angel'
        },
        apellido : 'Simijaca',
    }

    return(
        <div>
            <h1>Mi informacion: </h1>
            <Ap2 prueba={objeto}>

                </Ap2>
        </div>
    )
}

export default Ap3;