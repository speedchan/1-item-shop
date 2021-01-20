import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('');

const Checkout = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            }
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
        </Elements>
    );
};

export default Checkout;