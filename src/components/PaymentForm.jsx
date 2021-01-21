import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {itemIdList} from '../Constants';

// Make sure to call `loadStripe` outside of a component’s render to avoid recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY);

const PaymentForm = ({ totalAmountDue }) => {
    let itemId;
    switch (totalAmountDue) {
        default:
            itemId = itemIdList[0];
            break;
        case 24:
            itemId = itemIdList[1];
            break;
        case 48:
            itemId = itemIdList[2];
            break;
    }


    let handleClick = async (event) => {
        let stripe = await stripePromise;
        let { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: itemId,
                quantity: 1
            }],
            mode: 'payment',
            successUrl: 'http://localhost:3000/succeed/',
            cancelUrl: 'http://localhost:3000/fail/',
            shippingAddressCollection: {
                allowedCountries: ['SG']
            },
            submitType: 'pay'
        }).then((result) => {
            console.log(result.error.message);
        });
    };

    return (
        <Elements stripe={stripePromise}>
            ${totalAmountDue}
            <button role="link" onClick={handleClick}>Checkout</button>
        </Elements>
    );
};

export default PaymentForm;