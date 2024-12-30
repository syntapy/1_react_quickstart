interface Prop {
    name: string
}

export default function ProductCategoryRow(props: Props) {
    return (
        <tr align="center">
            <th colSpan="2">
                {props.name}
            </th>
        </tr>
    )
}
