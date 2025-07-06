import React from "react";

const footer = () => {
  return (
    <footer className="bg-[#f7fafe] text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">TailGrids</h2>
          <p className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lorem.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Useful Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Legal & Privacy</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Gift Card</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 invisible md:visible">&nbsp;</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Women</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Gift</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Subscribe Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter your email to receive our valuable newsletters.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-l w-full text-sm focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 12H4m0 0l4-4m-4 4l4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-500 space-y-2 md:space-y-0">
          <div className="flex flex-wrap gap-4">
            <a href="#">Payment</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">Gift Cards</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Stockists</a>
          </div>
          <div className="flex gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Discover_Card_logo.svg" alt="Discover" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
 

  );
};
