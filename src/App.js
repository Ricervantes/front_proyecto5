import './App.css';
import './css/prodcts.css'
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {

  return (
    <>
      <PayPalScriptProvider options={{ "client-id": "ARvYq5hQNfWxYMpGqLlRGV_FOF2cSOqoE4EnWNfKnRqSxUaNxqqrpWHMcJvyK_0DMxiAh-EDnAaD2waW" }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </>
  );
}

export default App;










