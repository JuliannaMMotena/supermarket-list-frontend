import { Subtitle } from 'Components/atoms'
import { ListCard } from 'Components/molecules'
import { ListRenderContainer } from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <Subtitle>
        Sua lista está vazia. Clique no botão "Adicionar" para incluir novos
        ítens.
      </Subtitle>
    )
  }

  return (
    <ListRenderContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </ListRenderContainer>
  )
}
