import React from 'react'
import products from './products'

const Product = ({ img, nome, prezzo, children, costofinale }) => {
    const handleClick = () => {
        alert('immagine Premuta');
    }
    const paramsHandler = (prezzo) => {
        console.log(prezzo)
    }

    const eventHandler = (nome) => (ev) =>{
        console.log(ev.target.innerText)
        console.log(nome)
    }
       return (
        <article className="product-card" display='flex' onMouseOver={() => console.log('mouse over')}>
            <img src={img} alt={nome} onClick={handleClick} />
            <h6>{nome}</h6>
            <hr />
            <p className="prezzo">{prezzo} €</p>
            {children && <p>{children}</p>}
            <p>Acquista Ora</p>
            <button onClick={() => alert('Bottone Premuto')}>{costofinale} $</button>
            <button onClick={()=>paramsHandler(prezzo)}>args</button>
            <button onClick={eventHandler(nome)}>event on target click</button>
        </article>
    )
}

export default Product