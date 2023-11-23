const Orders = () => {
  const testOrders = [
    { client: "Santos", status: "completed", employee: "Erwin" },
    { client: "JOseph", status: "Process", employee: "Nelly" },
  ];
  const [orders, setOrders] = useState(testOrders);
  return <p>Orders!</p>;
};
export default Orders;
