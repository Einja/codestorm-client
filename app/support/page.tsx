"use client";
import React, { useState } from "react";

export default function Page() {
  const [donation, setDonation] = useState("");
  const handlePayment = async (amount: number) => {
    if (!amount || amount < 1 || amount > 100) {
      alert("Please enter a valid donation amount.");
      return;
    }
    amount = parseFloat(amount.toFixed(2));
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      };
      const response = await fetch("/api/stripe", options);

      if (!response.ok) {
        const errorText = await response.text();
        console.log(response.url);
        console.error("Server Error:", errorText);
        return;
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Unknown error from server.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-1/3 h-full bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-lg shadow-lg mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Special Thanks:</h2>
        <ul className="space-y-3">
          <li className="bg-gray-500 p-3 rounded-lg">My CS Friends</li>
          <li className="bg-gray-500 p-3 rounded-lg">The CMPSC263 Class</li>
        </ul>
      </div>
      <div className="text-lg font-bold mt-20 mb-3">
        Thank you for stopping by to visit my website. If you would like to show
        your support, please refer to the donation button below (Minimum $1, Max $100):
      </div>
      <div className="flex flex-col items-center">
        <input
          type="number"
          className="p-2 border border-gray-400 rounded-lg mb-4 text-black"
          placeholder="Enter amount (USD)"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
        />
        <button
          onClick={() => handlePayment(parseFloat(donation))}
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Donate
        </button>
      </div>
    </div>
  );
}
