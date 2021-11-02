import { Card } from './styles'

interface PropsInfoCard {
  date: string
  legend: string
  class: string
}

export const InfoCard = (props: PropsInfoCard) => {
  return (
    <Card>
      <p>{props.date}</p>
      <p className={props.class}>{props.legend}</p>
    </Card>
  )
}