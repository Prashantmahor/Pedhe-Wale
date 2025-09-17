interface SideBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
const SideBar = ({ selectedCategory, setSelectedCategory }: SideBarProps) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0  text-bg-dark sidebar sticky  h-screen overflow-y-auto bg-gray-900 text-white p-4"
        style={{ width: "280px" }}
      >
        {" "}
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          {" "}
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>{" "}
          <span className="fs-4">SideBar</span>{" "}
        </a>{" "}
        <hr />{" "}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              className={`nav-link text-white ${
                selectedCategory === "Classic Pedas" && "active"
              }`}
              onClick={() => setSelectedCategory("Classic Pedas")}
            >
              Classic Pedas
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              className={`nav-link text-white ${
                selectedCategory === "Nutty & Dry Fruit Pedas" && "active"
              }`}
              onClick={() => setSelectedCategory("Nutty & Dry Fruit Pedas")}
            >
              Nutty & Dry Fruit Pedas
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              className={`nav-link text-white ${
                selectedCategory === "Modern Fusion Pedas" && "active"
              }`}
              onClick={() => setSelectedCategory("Modern Fusion Pedas")}
            >
              Modern Fusion Pedas
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              className={`nav-link text-white ${
                selectedCategory === "Seasonal Pedas" && "active"
              }`}
              onClick={() => setSelectedCategory("Seasonal Pedas")}
            >
              Seasonal Pedas
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              className={`nav-link text-white ${
                selectedCategory === "Healthy Pedas" && "active"
              }`}
              onClick={() => setSelectedCategory("Healthy Pedas")}
            >
              Healthy Pedas
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              className={`nav-link text-white ${
                selectedCategory === "Fruit Pedas" && "active"
              }`}
              onClick={() => setSelectedCategory("Fruit Pedas")}
            >
              Fruit Pedas
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              className={`nav-link text-white ${
                selectedCategory === "Exotic Pedas" && "active"
              }`}
              onClick={() => setSelectedCategory("Exotic Pedas")}
            >
              {" "}
              Exotic Pedas
            </a>{" "}
          </li>
        </ul>{" "}
        <hr />
      </div>
    </>
  );
};

export default SideBar;
