import { SelectSection } from './styles'
import { useState } from 'react'

export const DistrictInput = () => {
  const [ districts, setDistrict ] = useState(['Copacabana/RJ'])

  return (
    <SelectSection>
      <label>Bairro:</label>
        <select>
          <option disabled> </option>
          {
            districts.map((district, index) => {
              return <option key={index}>{district}</option>
            })
          }
        </select>
    </SelectSection>
  )
}