export function converterData(data: string) {
  const [ano, mes, dia] = data.split('-')
  return `${dia}${mes}${ano}`
}
