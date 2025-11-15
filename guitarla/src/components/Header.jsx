import {Fragment } from 'react'

function Header(){

    const name = "Juan"
    
    return (
        <Fragment>
            <p>Hola: {name}</p>
            <p>Despues</p>
        </Fragment>
        
    )
}

export default Header