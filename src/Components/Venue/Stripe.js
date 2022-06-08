import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
// const stripe = await stripePromise;
export const Stripe = async id => {
const stripe  =await loadStripe('pk_test_51KebqKLo3oIyoa1DhqnFEIdKktE5bEqBTSCpUE1sN9juQJY7qzExmqBv8Y7eRUVtoinAKs8THKKC5om3dC9ckWQN00kJCuOfIh');

    console.log(id)
    try {
      // 1) Get checkout session from API
      const session = await axios.get(
        `https://weddingz-server.herokuapp.com/api/v1/getCheckoutSession/${id}`,{headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }}
      );
      console.log(session, "Session");
  
      // 2) Create checkout form + chanre credit card
      
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id
      });
      
    } catch (err) {
      console.log(err);
    }
  };


export default Stripe;

