interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
const Categories = ({selectedCategory,setSelectedCategory }: CategoriesProps) => {

  return (
    <>
    <div className="d-flex flex-column flex-shrink-0  text-bg-dark sidebar sticky  h-screen overflow-y-auto bg-gray-900 text-white p-4" style={{ width: "280px" }} > <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"> <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true"><use xlinkHref="#bootstrap"></use></svg> <span className="fs-4">Categories</span> </a> <hr /> <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item"> 
      <a className={`nav-link text-white ${selectedCategory==='Classic Pedas' && 'active'}`} onClick={() => setSelectedCategory('Classic Pedas')} >
Classic Pedas
</a> </li> <li> <a  className={`nav-link text-white ${selectedCategory==="Nutty & Dry Fruit Pedas" && "active"}`} onClick={() => setSelectedCategory('Nutty & Dry Fruit Pedas')} >
Nutty & Dry Fruit Pedas
</a> </li> <li> <a className={`nav-link text-white ${selectedCategory==="Modern Fusion Pedas" && "active"}`} onClick={() => setSelectedCategory('Modern Fusion Pedas')} >
Modern Fusion Pedas
</a> </li> <li> <a className={`nav-link text-white ${selectedCategory==="Seasonal Pedas" && "active"}`} onClick={() => setSelectedCategory('Seasonal Pedas')} >
Festival Special Pedas
</a> </li> <li> <a  className={`nav-link text-white ${selectedCategory==="Healthy Pedas" && "active"}`} onClick={() => setSelectedCategory('Healthy Pedas')} >
Health-Conscious Pedas
</a> </li>
<li> <a  className={`nav-link text-white ${selectedCategory==="Fruit Pedas" && "active"}`} onClick={() => setSelectedCategory('Fruit Pedas')} >
Fruit-Based Pedas
</a> </li>
<li> <a className={`nav-link text-white ${selectedCategory==="Exotic Pedas" && "active"}`} onClick={() => setSelectedCategory('Exotic Pedas')} > Exotic & Gourmet Pedas
</a> </li>
 </ul> <hr />

<div className="dropdown"> <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/> <strong>mdo</strong> </a> <ul className="dropdown-menu dropdown-menu-dark text-small shadow"> <li><a className="dropdown-item" href="#">New project...</a></li> <li><a className="dropdown-item" href="#">Settings</a></li> <li><a className="dropdown-item" href="#">Profile</a></li> <li><hr className="dropdown-divider"/></li> <li><a className="dropdown-item" href="#">Sign out</a></li> </ul> </div> </div>
    </>
  )
}

export default Categories