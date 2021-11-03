export type task = {
  id: string
  title: string
  startDate: string | number
  endDate: string | number
  percentage: string | number
  willDelete: boolean
}
export type project = {
  id: string
  title: string
  color: string
  tasks: task[]
  willDelete: boolean
}
export type month = { id: number; name: string; days: number; projects: project[] }
