import React from 'react';
import Product from "./Product";
import products from "./products.js";


function App() {
  return (
    <div className="App">
      <section style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px'}}>
        {
          products.map((el) => {
            console.log(el)
            return <Product key={el.id} {...el}/>
          })
        }
      </section>
    </div>
  );
}

export default App;
