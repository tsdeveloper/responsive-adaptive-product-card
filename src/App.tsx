import './App.css'
import product1 from './assets/product-1.jpg';

function App() {
    return (
        <main className="products-page">
            <section className="products">
                <article className="product-card">
                    <figure className="product-card__figure">
                        <img className="product-card__image" src={product1} alt="Product 1"/>
                    </figure>

                    <div className="product-card__content">

                    <p className="product-card__content--price">$1200</p>

                    <p className="product-card__content--title">Mountain Bike</p>

                    <p className="product-card__content--description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus animi autem ea nulla numquam quaerat quos!
                    </p>

                    <a className="product-card__content--button" href="#">Add to cart</a>
                    </div>

                </article>

            </section>
        </main>
    )
}

export default App
