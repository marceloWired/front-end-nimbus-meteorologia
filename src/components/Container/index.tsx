import { ContainerDiv } from './styles'
import { DistrictInput } from '../DistrictInput'
import { Title } from '../Title'
import { CardsSection } from '../CardsSection'
import { Subtitle } from '../Subtitle'
import { WeatherProvider } from '../../hooks/useWeather'

export const Container = () => {
  return (
    <ContainerDiv>
      <Title title='Previsão de Chuva Horária'/>
      <WeatherProvider>
        <DistrictInput />
        <CardsSection />
      </WeatherProvider>
      <Subtitle />
    </ContainerDiv>
  )
}