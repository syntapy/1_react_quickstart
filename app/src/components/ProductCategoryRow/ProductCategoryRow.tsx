interface Prop {
    name: string
}

export default function ProductCategoryRow(props: Props) {
    return (
        <tr className="flex flex-row justify-center">
            <th colspan="2">
                {props.name}
            </th>
        </tr>
    )
}
