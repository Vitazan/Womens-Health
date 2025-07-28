import Link from "next/link";
import Image from 'next/image';

import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#e6d3ff] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
           <h3 className="text-gray-800 font-bold text-lg mb-4">
              Social Links
            </h3>
                <div className="flex space-x-4 pb-4 items-center">
                  <a
                    target="_blank"
                    href="https://nfh.ca"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/nfh.png"
                      alt="Vitazan"
                      width={160} // or adjust size as needed
                      height={40}
                      className="h-auto w-24 max-h-10"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Nutritional-Fundamentals-for-Health-Inc-935117029962456/"
                    target="_blank"
                    className="text-black hover:text-blue-900 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lucide lucide-facebook-icon lucide-facebook"  width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nfh-inc"
                    className="text-black hover:text-blue-900 transition-colors"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/nfh.supplements/"
                    className="text-black hover:text-pink-900 transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              
            
                <div className="flex space-x-4 items-center">
                  <a
                    target="_blank"
                    href="https://vitazan.com"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/vitazan.png"
                      alt="Vitazan"
                      width={160} // or adjust size as needed
                      height={40}
                      className="h-auto w-24 max-h-10"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/vitazanpro/"
                    target="_blank"
                    className="text-black hover:text-blue-900 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vitazan-professional-36139514a/"
                    className="text-black hover:text-blue-900 transition-colors"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/vitazanprofessional/"
                    className="text-black hover:text-pink-900 transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>

                    
                  </a>
                </div>
             
           
          </div>

          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-800 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#webinars"
                  className="text-gray-800 hover:text-blue-400 transition-colors"
                >
                  Schedule
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#faq"
                  className="text-gray-800 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-800">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@vitazan.com"
                  className="hover:text-blue-400  transition-colors"
                >
                  info@nfh.com
                </a>
              </li>
              <li className="flex items-center text-gray-800">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@vitazan.com"
                  className="hover:text-blue-400  transition-colors"
                >
                  info@vitazan.com
                </a>
              </li>
              <li className="flex items-center text-gray-800">
                <Phone className="h-5 w-5 mr-2" />
                <a
                  href="tel:+18665103123"
                  className="hover:text-blue-400  transition-colors"
                >
                  1-866-510-3123
                </a>
              </li>
              {/* <li className="flex items-center text-gray-800"></li>
              <li>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://nfh.ca"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="nfh.png"
                      alt="Vitazan"
                      width={160} // or adjust size as needed
                      height={40}
                      className="h-auto w-24 max-h-10"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Nutritional-Fundamentals-for-Health-Inc-935117029962456/"
                    target="_blank"
                    className="text-gray-800 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nfh-inc"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/nfh.supplements/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://vitazan.com"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="vitazan.png"
                      alt="Vitazan"
                      width={160} // or adjust size as needed
                      height={40}
                      className="h-auto w-24 max-h-10"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/vitazanpro/"
                    target="_blank"
                    className="text-gray-800 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vitazan-professional-36139514a/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/vitazanprofessional/"
                    className="text-gray-800 hover:text-white transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} New Roots Herbal. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
