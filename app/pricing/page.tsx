"use client";

import React from "react";

export default function PricingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f2f4f7] text-[#0b2540] Poppins">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[#0e2a47] text-white pt-24 pb-40 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold PoppinBold">
            Pricing plans
          </h1>
          <p className="mt-4 text-gray-300 text-lg Poppins">
            Simple, transparent pricing that grows with you.
          </p>
        </div>
      </section>

      {/* ================= FLOATING PRICING CARD ================= */}
      <section className="relative -mt-32 z-10 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 PoppinBold">
            WHAT MAKES THIS COURSE DIFFERENT?
          </h2>

          <ul className="space-y-4 text-gray-700 max-w-md w-auto mx-auto">
            <CheckItem text="Free lifetime support on WhatsApp/Telegram" />
            <CheckItem text="Give you assistance for Job" />
            <CheckItem text="Updates on Job vacancy" />
            <CheckItem text="Future Amendments guidance" />
            <CheckItem text="Certificate of course for easy job apply" />
            <CheckItem text="On hand training with XERO software" />
          </ul>

          {/* Pricing Options */}
          <div className="mt-12 grid md:grid-cols-2 gap-10 text-center">
    <a href="https://rzp.io/rzp/C5efaWH" className="flex flex-col items-center">
      <div className="bg-[#0e2a47] text-white px-6 py-3 rounded-md text-2xl font-bold">
        <p>9999/-</p>
      </div>
      <p className="mt-4 text-lg font-semibold">Live Session</p>
    </a>
        <a href="https://rzp.io/rzp/bl0GvGU" className="flex flex-col items-center">
      <div className="bg-[#0e2a47] text-white px-6 py-3 rounded-md text-2xl font-bold">
        4999/-
      </div>
      <p className="mt-4 text-lg font-semibold">Recorded & Live Q/A</p>
    </a>
          </div>
        </div>
      </section>

      {/* ================= WHY THIS COURSE ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-md p-8 md:p-10">

          <h3 className="text-2xl font-bold text-center mb-8 PoppinBold">
            WHY THIS COURSE?
          </h3>

          <ul className="w-auto max-w-sm  space-y-3 text-gray-700 list-disc list-inside text-lg Poppins">
            <li>Business Structures</li>
            <li>GST Treatment</li>
            <li>BAS Preparation</li>
            <li>Payroll & STP Compliance</li>
            <li>Real Xero System Handling</li>
          </ul>

        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-[#0e2a47] font-bold mt-1">✔</span>
      <span>{text}</span>
    </li>
  );
}

