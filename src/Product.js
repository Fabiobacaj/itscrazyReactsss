import React from 'react'

const img = 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f20477.jpg'

const Product = (props) => {
    const { nome, prezzo, costofinale ,children} = props;
    return (
        <article>
            <div className="card" />
            <img src={props.img} alt={`${props.nome}`} />
            <h6>{nome}</h6>
            <hr />
            <p style={{
                color: 'red',
            }}>{prezzo}</p>
            <p>{children}</p>
            <div />
            <p>Acquista Ora</p>
            <button>{costofinale}$</button>
        </article>
    )
}

export default Product