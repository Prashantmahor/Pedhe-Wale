interface ClassicPedasProps {
  onGetPostsClick?: (tab: string) => void; // optional prop
}

const ClassicPedas = ({onGetPostsClick}:ClassicPedasProps) => {
  return (
    <>   <h2>Classic Pedas</h2>
      <p>Yahan Classic Pedas ki varieties list karenge.</p>
      <button onClick={() => onGetPostsClick && onGetPostsClick("ClassicPedas")}>
        Show Classic Pedas
      </button>
    </>
  )
}

export default ClassicPedas