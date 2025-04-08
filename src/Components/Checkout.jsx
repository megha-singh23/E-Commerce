import { useSelector } from "react-redux";
import Navbar from "./navbar";
import { useDispatch } from "react-redux";
import { removeProduct } from '../redux/slices/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value); 
  if (!Array.isArray(cart)) {
    console.warn('Cart is not an array!', cart);
    return <div>Something went wrong with the cart data.</div>;
  }

  const totalPrice = cart.reduce(
    (total, product) => total + product.price ,
    0
  );
  console.log(cart);

  return (
    <>
    <Navbar/>
    <div style={styles.container} className="mt-14">
      <h1 style={styles.heading} >🧾 Checkout</h1>

      {/* Cart Items */}
      <div style={styles.section}>
        <h2 style={styles.subheading}>🛒 Your Items</h2>
        
        <ul>
  {cart.map((item) => (
    <li className="flex py-6" key={item.id}>
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.description}
          className="size-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{item.title}</a>
            </h3>
            <p className="ml-4">${item.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty 1</p>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => dispatch(removeProduct(item.id)) }
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  ))}
</ul>


        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={styles.item}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>💰 Billing Summary</h2>
        <div style={styles.billRow}>
          <span>Subtotal:</span>
          <span>₹{totalPrice}</span>
        </div>
        <div style={styles.billRow}>
          <span>Shipping:</span>
          <span>$10</span>
        </div>
        <div style={{ ...styles.billRow, fontWeight: 'bold' }}>
          <span>Total:</span>
          <span>${totalPrice + 10}</span>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>💳 Payment Info</h2>
        <p>Card or UPI details will go here.</p>
      </div>

      {/* Place Order */}
      <button style={styles.checkoutBtn}>Place Order</button>
    </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '30px',
  },
  subheading: {
    fontSize: '22px',
    marginBottom: '15px',
  },
  section: {
    marginBottom: '30px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  billRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  checkoutBtn: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#facc15',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default Checkout;
