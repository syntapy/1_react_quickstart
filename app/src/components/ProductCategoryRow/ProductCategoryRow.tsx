import type { StyleProps } from "../../style.ts"

type Props =  {
  name: string
  dataTitleName: string
} & StyleProps

export default function ProductCategoryRow(props: Props) {
  return (
    <tr className={props.className}>
      <th className="pb-[1px] pt-2" dataTitle={props.dataTitleName} colSpan={2}>
        {props.name}
      </th>
    </tr>
  )
}
