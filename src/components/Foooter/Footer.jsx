import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import App from '../../assets/APP.png'
import Qrcode from '../../assets/Qrcode 1.png'
import { FiSend } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        
        {/* Exclusive */}
        <div>
          <h2 className="text-xl font-bold">Exclusive</h2>
          <p className="mt-4 text-sm">Get 10% off your first order</p>
          {/* <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 text-black w-full"
            />
            <button className="bg-white text-black px-3">→</button>
          </div> */}


          <div className="flex mt-10 items-center border border-gray-500 rounded px-2 py-1 w-fit">
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-black text-gray-300 placeholder-gray-500 focus:outline-none px-2"
      />
      <button>
        <FiSend className="text-gray-300" />
      </button>
    </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mt-2 text-sm">exclusive@gmail.com</p>
          <p className="mt-2 text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-semibold mb-4">Download App</h3>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex gap-2 mb-4">
            <img src={Qrcode} alt="QR Code" className="w-16" />
            <div className="flex flex-col gap-2">
              <img src={App} alt="Google Play" className="w-24" />
             
            </div>
          </div>
          <div className="flex space-x-3 mt-4 text-white text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-500 text-sm mt-5">
        © Copyright Rimel 2024. All right reserved
      </div>
    </footer>
  );
}
