import { useState } from "react";
import { BsInstagram, BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // handle subscribe
  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      setEmail(""); // clear input after success
    } catch (err) {
      setMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      <footer className="py-5 footergap bg-black shadow-md text-white ">
        <div className="row">
          {/* Categories */}
          <div className="col-6 col-md-2 mb-3">
            <h5 className="footer-heading">Categories</h5>
            <ul className="nav flex-column ">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Milk Pedas
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Dry Fruit Pedas
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Chocolate Pedas
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Regional Special Pedas
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Festival Pedas
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-2 mb-3">
            <h5 className="footer-heading">Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Shipping Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Return Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2 ">
                <a href="#" className="nav-link p-0 text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-2 mb-3">
            <h5 className="footer-heading">Contact</h5>
            <p className="text-sm ">Mathura, India</p>
            <p className="text-sm ">+91 6398783975</p>
            <p className="text-sm ">+91 97203 86529</p>
          </div>

          {/* About Us + Subscribe */}
          <div className="col-md-5 offset-md-1 mb-3">
            <aside className="border rounded-lg p-3">
              <h4 className="footer-heading mb-3">About Us</h4>
              <p className="text-sm mb-4">
                Hum Mathura ke traditional pedhe banate hain jo har festival ko
                khaas bana dete hain.
              </p>

              <div className="mb-4">
                <label className="block text-sm mb-1">Enter your email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-sm bg-gray-700"
                  placeholder="you@example.com"
                />
              </div>
              <button
                className="btn btn-warning w-full px-4 py-2 border rounded"
                type="button"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>

              {/* Show success/error message */}
              {message && (
                <p className="mt-2 text-sm text-yellow-400">{message}</p>
              )}
            </aside>
          </div>
        </div>

        {/* Bottom */}
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2025 Pedhe Wala. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-white" href="#" aria-label="Instagram">
                <BsInstagram size={24} color="white" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-white" href="#" aria-label="Facebook">
                <BsFacebook size={24} color="white" />
              </a>
            </li>
             <li className="ms-3">
              <a className="text-white" href="#" aria-label="Youtube">
                <BsYoutube size={24} color="white" />
              </a>
            </li>
             <li className="ms-3">
              <a className="text-white" href="#" aria-label="Whatsapp">
                <BsWhatsapp size={24} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
