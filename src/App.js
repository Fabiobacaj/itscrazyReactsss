// import Inizio from "./lezioni/5-useRef/inizio/useref-example";
// import Componente1 from "./lezioni/Componente1";  
// import img from './Product.js';
import Product from "./Product";

const arr = [
  {
    nome: "10$ amazon + 20p",
    img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f20477.jpg',
    prezzo: 2.16,
    costofinale: 7.4
  },
  {
    nome: "12$ amazon + 7p",
    img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f21744.jpg',
    prezzo: 5.40,
    costofinale: 10.5
  }
];


function App() {
  return (
    <div className="App">
      <section>
        {
          arr.map(el => {
            console.log(el)
            return <Product{...el}/>
          })
        }
      </section>
    </div>
  );
}

export default App;
