interface ExoticPedasProps {
  onGetPostsClick?: (tab: string) => void; // optional prop
}
const ExoticPedas = ({onGetPostsClick}:ExoticPedasProps) => {
  return (
    <>     
    <h2>Exotic & Gourmet Pedas</h2>
      <p>Yahan Exotic Pedas ki varieties list karenge.</p>
      {/* Example: agar kisi button click se parent ko notify karna ho */}
      <button onClick={() => onGetPostsClick && onGetPostsClick("ExoticGourmetPedas")}>
        Show Exotic Pedas
      </button>
      </>

  )
}

export default ExoticPedas