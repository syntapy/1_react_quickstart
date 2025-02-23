import type { StyleProps } from "../../style.ts"

type Props = {
  name: string
  price: number
  stocked: boolean
} & StyleProps

export default function ProductRow(props: Props) {
  return (
    <tr className={props.className}>
      <td className="text-left">{props.name}</td>
      <td className="text-center">${props.price}</td>
    </tr>
  )
}
