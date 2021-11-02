import { TitleText } from './styles'

interface PropsTitle {
  title: string
}

export const Title = (props: PropsTitle) => {
  return (
    <TitleText>
      {props.title}
    </TitleText>
  )
}