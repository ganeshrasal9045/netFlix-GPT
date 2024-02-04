import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-indigo-950 dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
                className="h-8"
                alt="netlix-Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Netflix-GPT
              </span>
            </span>
            <ul className="flex flex-wrap items-center mb-6 text-base font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <span className="hover:underline me-4 md:me-6">
                  About
                </span>
              </li>
              <li>
                <span className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:underline me-4 md:me-6">
                  Licensing
                </span>
              </li>
              <li>
                <span className="hover:underline">
                  Contact
                </span>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-base text-gray-500 sm:text-center dark:text-gray-400">
            Designed and developed by Ganesh Rasal.
            <p className="text-center">Made with ❤️ in India</p>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
