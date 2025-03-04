import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const createCheckoutSession = async (amount) => {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Donation" },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donation/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donation/cancel`,
  });
  return session.url;
};

export { createCheckoutSession };
