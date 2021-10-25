import { project } from "@types"

interface month {
  month: {
    id: number
    name: string
    days: number
    projects: project[]
  }
}
const Month: React.FC<month> = ({ month }) => {
  return <div>{month.name}</div>
}
export default Month
