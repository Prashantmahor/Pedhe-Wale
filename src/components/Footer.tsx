import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-5 footergap bg-light ">
        <div className="row">
          {/* Categories */}
          <div className="col-6 col-md-2 mb-3">
            <h5>Categories</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Milk Pedas
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Dry Fruit Pedas
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Chocolate Pedas
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Regional Special Pedas
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Festival Pedas
                </a>
              </li>
            </ul>
          </div>

          {/* Our Shop
          <div className="col-6 col-md-2 mb-3">
            <h5>Our Shop</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Gallery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Bulk Orders
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Franchise
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div> */}
         

          {/* Support */}
          <div className="col-6 col-md-2 mb-3">
            <h5>Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Shipping Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Return Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

           <div className="col-6 col-md-2 mb-3">
              <h5 className="font-medium mb-2">Contact</h5>
              <p className="text-sm text-gray-600">Mathura, India</p>
              <p className="text-sm text-gray-600">+91 6398783975</p>
              <p className="text-sm text-gray-600">+91 97203 86529</p>
            </div>

          {/* Newsletter */}
          <div className="col-md-5 offset-md-1 mb-3">
            <aside className="border rounded-lg p-3">
            <h4 className="font-semibold mb-3">About Us</h4>
            <p className="text-sm text-gray-600 mb-4">Hum Mathura ke traditional pedhe banate hain jo har festival ko khaas bana dete hain.</p>

            <div className="mb-4">
              <label className="block text-sm mb-1">Enter your email</label>
              <input type="email" className="w-full border rounded px-3 py-2 text-sm" placeholder="you@example.com" />
            </div>
            <button className="btn btn-warning w-full px-4 py-2 border rounded" type="button">Subscribe</button>
          </aside>
          </div>
        </div>

        {/* Bottom */}
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2025 Pedhe Wala. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="#"
                aria-label="Instagram"
              >
                <BsInstagram size={24} />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-body-emphasis"
                href="#"
                aria-label="Facebook"
              >
                <BsFacebook size={24} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
