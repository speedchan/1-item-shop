import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {itemIdList, siteUrl} from '../Constants';

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
        case 2:
            itemId = itemIdList[3];
            break;
    }


    let handleClick = async (event) => {
        let stripe = await stripePromise;
        let response = await stripe.redirectToCheckout({
            lineItems: [{
                price: itemId,
                quantity: 1
            }],
            mode: 'payment',
            successUrl: siteUrl + 'success/',
            cancelUrl: siteUrl + 'failure/',
            shippingAddressCollection: {
                allowedCountries: ['SG']
            },
            submitType: 'pay'
        }).then((result) => {
            console.log(result.error.message);
        });
    };

    return (
        <div>
        <Elements stripe={stripePromise}>
            <button role="link" onClick={handleClick}>Proceed to Payment</button>
        </Elements>
        </div>
    );
};

export default PaymentForm;