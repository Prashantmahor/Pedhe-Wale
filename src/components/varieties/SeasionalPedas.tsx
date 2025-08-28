interface SeasionalPedasProps {
  onGetPostsClick?: (tab: string) => void; // optional prop
}

const SeasionalPedas = ({onGetPostsClick}:SeasionalPedasProps) => {
  return (
    <>   <h2>Seasional Pedas</h2>
      <p>Yahan Seasional Pedas ki varieties list karenge.</p>
      <button onClick={() => onGetPostsClick && onGetPostsClick("SeasionalPedas")}>
        Show Seasional Pedas
      </button>
    </>
  )
}

export default SeasionalPedas