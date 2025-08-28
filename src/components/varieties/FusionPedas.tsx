interface FusionPedasProps {
  onGetPostsClick?: (tab: string) => void; // optional prop
}

const FusionPedas = ({onGetPostsClick}:FusionPedasProps) => {
  return (
    <>   <h2>Modern Fusion Pedas</h2>
      <p>Yahan Modern Fusion Pedas ki varieties list karenge.</p>
      <button onClick={() => onGetPostsClick && onGetPostsClick("FusionPedas")}>
        Show Fusion Pedas
      </button>
    </>

  )
}

export default FusionPedas