import { SubtitleSection } from './styles'

export const Subtitle = () => {
  return (
    <SubtitleSection>
      <p>Legenda</p>
      <div />
      <div>
        <span className='SemChuva'>Sem Chuva</span> - {`<`} 0.2 mm
      </div>
      <div>
        <span className='ChuvaFraca'>Chuva Fraca</span> - 0.2 a 5.0 mm 
      </div>
      <div>
        <span className='ChuvaModerada'>Chuva Moderada</span> - 5.1 a 25.0 mm
      </div>
      <div>
        <span className='ChuvaForte'>Chuva Forte </span> - {`>`} 25.0 mm
      </div>
    </SubtitleSection>
  )
}