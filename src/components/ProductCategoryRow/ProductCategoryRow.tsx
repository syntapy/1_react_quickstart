import type { StyleProps } from "../../style.ts"

type Props =  {
  name: string
} & StyleProps

export default function ProductCategoryRow(props: Props) {
  return (
    <tr className={props.className}>
      <th className="pb-[1px] pt-[5px] md:pb-[2px] md:pt-[7px]" colSpan={2}>
        {props.name}
      </th>
    </tr>
  )
}
