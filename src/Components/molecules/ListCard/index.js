import './index.css'
import {
  CardContainer,
  CheckImage,
  TextContainer,
  ArrowIconContainer,
  ArrowIcon
} from './styles'
import { SmallText } from 'Components/atoms'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="Checkbox-icon"
        onClick={() => onCheckItem(item)}
      />
      <TextContainer>
        <SmallText fontSize={16} mb={2} align="left">
          {item?.name}
        </SmallText>
        <SmallText fontSize={14} fontWeight={400} align="left">
          {item?.quantity} unidades
        </SmallText>
      </TextContainer>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowIconContainer>
    </CardContainer>
  )
}
