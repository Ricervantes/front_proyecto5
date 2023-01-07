import Hero from "../components/Hero";
let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Home = () => {
    return (
        <div>

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
                                                <img src="https://static9.depositphotos.com/1177973/1089/i/600/depositphotos_10890272-stock-photo-perfume-bottle-and-pink-rose.jpg" className="card-img-top" alt='test' />

                                                <div className="card-body">
                                     
                                                    <h4 className='card-title'>$2099.00</h4>
                                                    <p className="card-text">Perfume Carolina Herrera 212 VIP Rosé Eau de Parfum 50 ml</p>
                                                    <a href="/#" className="btn btn-info btn-sm d-grid">Carrito</a>
                                                    <a href="/#" className="btn btn-danger btn-sm d-grid mt-2">Detalle</a>
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

        </div>
    );
}

export default Home;
