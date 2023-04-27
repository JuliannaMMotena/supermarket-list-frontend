import { ListCard } from "../ListCard";
import "./index.css";

export const ListRender = ({ list, onEdit }) => {
  if (list?.length === 0) {
    return (
      <h3>
        Sua lista está vazia. Clique no botão "Adicionar" para incluir novos
        ítens.
      </h3>
    );
  }

  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard onClick={onEdit} item={item} key={item?._id} />
      ))}
    </div>
  );
};
