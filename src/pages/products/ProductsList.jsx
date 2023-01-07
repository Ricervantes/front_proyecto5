import React from 'react'
import Hero from "../../components/Hero";
let products=[
{
    id:1,
    name:'Perfume Paris Hilton Pink Rush Eau de Perfum 100 ml',
    price:1299,
    img:'https://static5.depositphotos.com/1048902/493/i/450/depositphotos_4934396-stock-photo-young-woman-using-perfume-abstract.jpg'
},
{
    id:2,
    name:' Perfume Salvatore Ferragamo Signorina Eleganza Eau de Parfum 100 m',
    price:2099,
    img:'https://st.depositphotos.com/1048902/4796/i/450/depositphotos_47961913-stock-photo-spraying-perfume.jpg'
},
{
    id:3,
    name:'adore de Dior',
    price:2625,
    img:'https://st.depositphotos.com/1048902/4796/i/450/depositphotos_47961913-stock-photo-spraying-perfume.jpg'
},
{
    id:4,
    name:'Chanel Coco Mademoiselle Eau de Parfum',
    price:3400,
    img:'https://st.depositphotos.com/1048902/4796/i/450/depositphotos_47961913-stock-photo-spraying-perfume.jpg'
},
];

const ProductsList = () => {
  return (
    <main>
                <Hero />

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-2">
                            <h5>Esto puede ser algun menu o anuncio</h5>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                {products.map((product) => {
                                    return (
                                        <div className="col-sm-6 col-md-4" key={product}>
                                            <div className="card mb-4">
                                                <img src="https://st.depositphotos.com/1048902/4796/i/450/depositphotos_47961913-stock-photo-spraying-perfume.jpg" className="card-img-top" alt='test' />

                                                <div className="card-body">
                                                    <h4 className='card-title'>$950.00</h4>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<<<<<<< HEAD
                                                    <a href="/#" className="btn btn-primary btn-sm d-grid">Carrito</a>
                                                    <a href="/#" className="btn btn-warning btn-sm d-grid mt-2">Detalle</a>
=======
                                                    <a href="" className="btn btn-primary btn-sm d-grid">Carrito</a>
                                                    <a href="" className="btn btn-warning btn-sm d-grid mt-2">Detalle</a>
>>>>>>> 0718f24c2fffa688dab8587dfce0f44678b5c3c1
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                </div>



            </main>
  )
}

export default ProductsList;