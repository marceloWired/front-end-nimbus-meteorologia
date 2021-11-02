export function dateParser(isoDate: string, hour: string): string {
  const [ date ] = isoDate.split('T')
  const [ year, month, day ] = date.split('-')
  const [ hourOClock ] = hour.split(':')

  const dateFormatted = `${day}/${month} - ${hourOClock}h`

  return dateFormatted
}