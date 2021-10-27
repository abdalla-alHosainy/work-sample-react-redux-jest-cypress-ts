import styled from "@emotion/styled"
interface component {
  percentage: number | string
  color: string
  startDate: number | string
  endDate: number | string
}
const Bar: React.FC<component> = ({ percentage, color, startDate, endDate }) => {
  return (
    <Holder data-testid="bar">
      <Percentage data-testid="bar-percentage">{percentage}</Percentage>
    </Holder>
  )
}
const Holder = styled.div``
const Percentage = styled.span``
export default Bar
