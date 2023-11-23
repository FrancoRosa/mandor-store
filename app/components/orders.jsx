"use client";
import { useState } from "react";
import OrderForm from "./order_form";

const testOrders = [
  { client: "Santos", status: "completed", employee: "Erwin" },
  { client: "Joseph", status: "Process", employee: "Nelly" },
];

const Orders = () => {
  const [orders, setOrders] = useState(testOrders);
  const handleNew = () => {
    console.log("nueva orden");
  };

  return (
    <div className="dark:text-gray-400">
      <p className=" font-bold">Orders!</p>
      {orders.map((order) => (
        <div>
          <p>{order.client}</p>
        </div>
      ))}
      <button
        onClick={handleNew}
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Nueva orden
      </button>
      <OrderForm />
    </div>
  );
};
export default Orders;
