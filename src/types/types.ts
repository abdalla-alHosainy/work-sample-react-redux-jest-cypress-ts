export type task = {
  id: string
  title: string
  startDate: string | number
  endDate: string | number
  percentage: string | number
}
export type project = { id: string; title: string; color: string; tasks: task[] }
