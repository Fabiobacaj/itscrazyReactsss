import React from 'react'
import products from './products' 

const Product = ({img,nome,prezzo,children,costofinale}) => {
    return (
        <article className="product-card" display='flex'>
            <img src={img} alt={nome} />
            <h6>{nome}</h6>
            <hr />
            <p className="prezzo">{prezzo} €</p>
            {children && <p>{children}</p>}
            <p>Acquista Ora</p>
            <button>{costofinale} $</button>
        </article>
    )
}

export default Product