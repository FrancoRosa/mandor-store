"use client";
const newForm = {
  client: "Cliente",
  started: new Date().toLocaleString("sv"),
  //   products: [{ name: 1, price: 5 }],
  products: [],
  payment: "cash",
};

const payment = ["cash", "yape", "card"];
const OrderForm = ({ data = newForm }) => {
  return (
    <div>
      <p>{data.client}</p>
      <p>Creado: {data.started}</p>
      {data.products.length > 0 ? (
        <>
          {data.products.map((p) => {
            <p>{p.name}</p>;
          })}
        </>
      ) : (
        <p>No hay productos</p>
      )}
      <p>Pago: {data.payment}</p>
      <p>Total: {data.products.reduce((s, p) => s + p.price, 0)}</p>
    </div>
  );
};

export default OrderForm;
