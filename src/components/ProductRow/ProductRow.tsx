import type { StyleProps } from "../../style.ts"

type Props = {
  name: string
  price: number
  stocked: boolean
  dataTitleName: string
  dataTitlePrice: string
} & StyleProps

export default function ProductRow(props: Props) {
  return (
    <tr className={props.className}>
      <td className="text-left" dataTitle={props.dataTitleName}>{props.name}</td>
      <td className="text-center" dataTitle={props.dataTitlePrice}>${props.price}</td>
    </tr>
  )
}
