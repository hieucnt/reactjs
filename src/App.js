import { useState } from "react";

function App() {
  const [numberItems, setNumberItems] = useState(3);
  const [products, setProducts] = useState([
    {
      id: 1,
      nameProduct: "Nike Air Max Viva",
      description:
        "Designed with every woman in mind, the mixed material upper of the Nike Air Max Viva features a plush collar, detailed patterning and intricate stitching. The new lacing system uses 2 separate laces constructed from heavy-duty tech chord, letting you find the perfect fit. Mixing comfort with style, it combines Nike Air with a lifted foam heel for and unbelievable ride that looks as good as it feels.",
      price: 150,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/20875a18-6199-407b-9d5d-ec0f6c73ae76/air-max-viva-shoe-31Zblk.jpg",
      quantity: 3,
    },
    {
      id: 2,
      nameProduct: "Nike Air Force 1 '07 SE",
      description:
        "The radiance lives on in the Nike Air Force 1 '07 SE, the b-ball icon that puts a Valentine's Day spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine. The embossed words LOVE and LOVE FOR ALL form the Swoosh designs, while little lockets of creativity throughout reveal your love for style and detail.",
      price: 300,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/87e2a0be-5ffe-481f-9abc-ca4f385a0ce4/air-force-1-07-se-shoe-G0dtLG.jpg",
      quantity: 2,
    },
    {
      id: 3,
      nameProduct: "Air Jordan 1 Mid",
      description:
        "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness. Fresh colour trims the clean, classic materials, injecting some newness into the familiar design.",
      price: 459,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/zzmfk3kwuw3ktkilxfnp/air-jordan-1-mid-shoe-BpARGV.jpg",
      quantity: 1,
    },
  ]);
  function removeProduct(id) {
    let newProducts = products.filter((product) => product.id !== id);
    let newNumberItems = numberItems - 1;
    setProducts(newProducts);
    setNumberItems(newNumberItems);
  }
  let subTotal = products.reduce(
    (total, productPrice) => total + productPrice.price * productPrice.quantity,
    0
  );
  let total = subTotal + 5;
  let productComponent = products.map((product) => (
    <li className="row" key={product.id}>
      <div className="col left">
        <div className="thumbnail">
          <a href="/">
            <img src={product.image} alt="img" />
          </a>
        </div>
        <div className="detail">
          <div className="name">
            <a href="/">{product.nameProduct}</a>
          </div>
          <div className="description">{product.description}</div>
          <div className="price">${product.price}</div>
        </div>
      </div>
      <div className="col right">
        <div className="quantity">
          <input
            type="number"
            className="quantity"
            step={1}
            defaultValue={product.quantity}
          />
        </div>
        <div className="remove">
          <svg
            version="1.1"
            className="close"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
            onClick={() => removeProduct(product.id)}
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </li>
  ));
  return (
    <div>
      <main>
        <header className="container">
          <h1>Shopping Cart</h1>
          <ul className="breadcrumb">
            <li>Home</li>
            <li>Shopping Cart</li>
          </ul>
          <span className="count">{numberItems} items in the bag</span>
        </header>
        <section className="container">
          <ul className="products">{productComponent}</ul>
        </section>
        <section className="container">
          <div className="promotion">
            <label htmlFor="promo-code">Have A Promo Code?</label>
            <input type="text" id="promo-code" /> <button type="button" />
          </div>
          <div className="summary">
            <ul>
              <li>
                Subtotal <span>${subTotal}</span>
              </li>
              <li>
                Tax <span>$5.00</span>
              </li>
              <li className="total">
                Total <span>${total}</span>
              </li>
            </ul>
          </div>
          <div className="checkout">
            <button type="button">Check Out</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
