export interface Marcacao {
  id?: string,
  tipo: string,
  animalId: string,
  tutorId: string,
  dataHora: string,
  realizada?: boolean,
  cancelada?: boolean
}
