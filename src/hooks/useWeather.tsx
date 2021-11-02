import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { weatherApi } from '../services/weatherApi'

interface Weather {
  id: number
  city: string
  district: string
  milimeters: string
  subtitle: string
  date: string
  hour: string
}

interface WeatherProviderProps {
  children: ReactNode
}

interface WeatherContextData {
  weatherData: Weather[]
  setWeatherData: (weather: Weather[]) => void
}

const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
)

export function WeatherProvider({ children}: WeatherProviderProps) {
  const [ weatherData, setWeatherData ] = useState<Weather[]>([])

  useEffect(() => {
    weatherApi.get('/weather?city=RJ&district=Copacabana')
      .then(async response => {
        const apiResponseData = response.data

        setWeatherData(apiResponseData)
      })
  }, [])

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData}}>
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  const context = useContext(WeatherContext)

  return context
}
