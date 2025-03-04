import { createCheckoutSession } from "@/backend/api/stripe/createCheckoutSession";

export async function POST(req) {
  try {
    const body = await req.json();
    const url = await createCheckoutSession(body.amount);
    return new Response(JSON.stringify({ url: url }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
