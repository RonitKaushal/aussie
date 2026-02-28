import Link from "next/link";
import { Facebook, Youtube, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e2a47] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Container */}
        <div className="flex flex-col items-center text-center 
                        md:flex-row md:items-start md:justify-between md:text-left">

          {/* Logo Section */}
          <div className="space-y-4 md:w-1/3 flex md:block justify-center">
            <div className="relative w-40 h-40">
              <Image
                src="/logo.png"
                alt="Australia Map"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Links + Contact Wrapper */}
          <div className="flex flex-col items-center 
                          md:flex-row md:items-start md:gap-20 md:w-2/3 mt-8 md:mt-0">

            {/* Navigation */}
            <div className="space-y-3 mt-5 md:mt-0">
              <h4 className="font-semibold mb-2 PoppinBold">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 Poppins">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mt-8 md:mt-0">
              <h4 className="font-semibold mb-2 PoppinBold">Contact</h4>
              <p className="text-gray-300 Poppins">
                Email: theaussieca@gmail.com
              </p>
              <p className="text-gray-300 Poppins">
                Phone no: 6352644993
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4 flex justify-center items-center flex-col mt-8 md:mt-0 md:items-end">
            <h4 className="font-semibold PoppinBold">Follow us on</h4>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61588053154014"
                className="w-10 h-10 bg-[#1b3a5f] flex items-center justify-center rounded-lg hover:bg-[#244a76] transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.youtube.com/@theaussieca"
                className="w-10 h-10 bg-[#1b3a5f] flex items-center justify-center rounded-lg hover:bg-[#244a76] transition"
              >
                <Youtube size={18} />
              </a>

              <a
                href="https://www.instagram.com/theaussieca/"
                className="w-10 h-10 bg-[#1b3a5f] flex items-center justify-center rounded-lg hover:bg-[#244a76] transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1f4068] mt-12 pt-6 text-center text-gray-400 text-sm Poppins">
          © {new Date().getFullYear()} The Aussie CA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}