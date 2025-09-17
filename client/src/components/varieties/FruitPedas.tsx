interface DryFruitPedasProps {
  onGetPostsClick?: (tab: string) => void; // optional prop
}

const FruitPedas = ({onGetPostsClick}:DryFruitPedasProps) => {
  return (
    <>   <h2>Fruit-Based Pedas</h2>
      <p>Yahan Fruit-Based Pedas ki varieties list karenge.</p>
      <button onClick={() => onGetPostsClick && onGetPostsClick("FruitPedas")}>
        Show Fruit Pedas
      </button>
    </>
  )
}

export default FruitPedas