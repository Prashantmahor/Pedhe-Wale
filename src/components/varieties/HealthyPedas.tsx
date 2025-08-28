interface HealthyPedasProps {
  onGetPostsClick?: (tab: string) => void; // optional prop
}

const HealthyPedas = ({onGetPostsClick}:HealthyPedasProps) => {
  return (
    <>   <h2>Healthy Pedas</h2>
      <p>Yahan Healthy Pedas ki varieties list karenge.</p>
      <button onClick={() => onGetPostsClick && onGetPostsClick("HealthyPedas")}>
        Show Healthy Pedas
      </button>
    </>
  )
}

export default HealthyPedas