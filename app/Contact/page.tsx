"use client";

export default function ContactPage() {
  return (
    <main className="w-full bg-[#f3f5f7] text-[#0b2540] overflow-x-hidden Poppins">

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#0e2a47] text-white pt-28 pb-44 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide PoppinBold">
            Contact us
          </h1>
          <p className="mt-4 text-gray-300 text-lg Poppins">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>
      </section>

      {/* ================= FLOATING FORM ================= */}
      <section className="relative -mt-32 z-10 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10">

          <form className="space-y-6">

            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                  <label className="block text-sm font-medium mb-2 Poppins">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0e2a47]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 Poppins">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0e2a47]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 Poppins">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0e2a47]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2 Poppins">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0e2a47]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0e2a47] text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition PoppinBold"
            >
              Send message
            </button>

          </form>
        </div>
      </section>

      {/* ================= CONTACT INFO STRIP ================= */}
      <section className="w-full bg-[#081c34] text-white mt-20 py-16">
        <div className="flex justify-between items-center max-w-3xl mx-auto px-6 text-center md:text-left">

          <div>
            <h3 className="text-lg font-semibold mb-4 PoppinBold">Contact us</h3>
            <p className="text-gray-300 Poppins">+91 63526 44993</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 PoppinBold">Email us now</h3>
            <p className="text-gray-300 Poppins">theaussieca@gmail.com</p>
          </div>

        </div>
      </section>

    </main>
  );
}