import { Section } from './styles'
import { InfoCard } from '../InfoCard'
import { useWeather } from '../../hooks/useWeather'
import { dateParser} from '../../utils/dateParser'

export const CardsSection = () => {
  const { weatherData } = useWeather() 

  return (
    <Section>

      {weatherData.map((weather, index) => {
        const dateFormatted = dateParser(weather.date, weather.hour);
        const subtitleClass = weather.subtitle.split(' ').join('');

        return <InfoCard key={weather.id} date={dateFormatted} legend={weather.subtitle} class={subtitleClass}/>
      })}
    </Section>
  )
}