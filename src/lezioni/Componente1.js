import React from 'react'

const Componente1 = () => {
    return (
        <section>
            <Saluto/>
        </section>
    )

}
const Persona = () => {
    return (
        <h2>Ciaoo sono Fabiooooo </h2>
    )
}

const Messagio = () => {
    return (
        <h4>sono un messaggio </h4>
    )
}

const Saluto = () => {
    return (
        <React.Fragment>
            <Persona />
            <Messagio />

        </React.Fragment>
    )
}
export default Componente1