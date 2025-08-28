interface CategoriesProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
const Categories = ({selectedTab,setSelectedTab }: CategoriesProps) => {
  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }} > <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"> <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true"><use xlinkHref="#bootstrap"></use></svg> <span className="fs-4">Categories</span> </a> <hr /> <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item"> 
      <a href="#" className={`nav-link text-white ${selectedTab==='ClassicPedas' && 'active'}`} onClick={() => setSelectedTab('ClassicPedas')} >
Classic Pedas
</a> </li> <li> <a href="#" className={`nav-link text-white ${selectedTab==="DryFruitPedas" && "active"}`} onClick={() => setSelectedTab('DryFruitPedas')} >
Nutty & Dry Fruit Pedas
</a> </li> <li> <a href="#" className={`nav-link text-white ${selectedTab==="FusionPedas" && "active"}`} onClick={() => setSelectedTab('FusionPedas')} >
Modern Fusion Pedas
</a> </li> <li> <a href="#" className={`nav-link text-white ${selectedTab==="SeasionalPedas" && "active"}`} onClick={() => setSelectedTab('SeasionalPedas')} >
Festival Special Pedas
</a> </li> <li> <a href="#" className={`nav-link text-white ${selectedTab==="HealthyPedas" && "active"}`} onClick={() => setSelectedTab('HealthyPedas')} >
Health-Conscious Pedas
</a> </li>
<li> <a href="#" className={`nav-link text-white ${selectedTab==="FruitPedas" && "active"}`} onClick={() => setSelectedTab('FruitPedas')} >
Fruit-Based Pedas
</a> </li>
<li> <a href="#" className={`nav-link text-white ${selectedTab==="ExoticPedas" && "active"}`} onClick={() => setSelectedTab('ExoticPedas')} > Exotic & Gourmet Pedas
</a> </li>
 </ul> <hr />

<div className="dropdown"> <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/> <strong>mdo</strong> </a> <ul className="dropdown-menu dropdown-menu-dark text-small shadow"> <li><a className="dropdown-item" href="#">New project...</a></li> <li><a className="dropdown-item" href="#">Settings</a></li> <li><a className="dropdown-item" href="#">Profile</a></li> <li><hr className="dropdown-divider"/></li> <li><a className="dropdown-item" href="#">Sign out</a></li> </ul> </div> </div>
    </>
  )
}

export default Categories