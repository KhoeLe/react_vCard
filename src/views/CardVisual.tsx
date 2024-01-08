import { useParams } from 'react-router-dom';

function CardVisual() {
  const { id } = useParams();
  return (
    <div>CardVisual
      <p>ID: {id}</p>
    </div>
  )
}

export default CardVisual