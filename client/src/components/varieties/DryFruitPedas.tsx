interface DryFruitPedasProps {
  onGetPostsClick?: (tab: string) => void; // optional prop
}
const DryFruitPedas = ({onGetPostsClick}:DryFruitPedasProps) => {
  return (
    <>   <h2>Dry Fruit Pedas</h2>
      <p>Yahan Dry Fruit Pedas ki varieties list karenge.</p>
      <button onClick={() => onGetPostsClick && onGetPostsClick("DryFruitPedas")}>
        Show Dry Fruit Pedas
      </button>
    </>
  )
}

export default DryFruitPedas