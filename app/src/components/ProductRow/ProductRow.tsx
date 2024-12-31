interface Props {
    name: string
    price: number
    stocked: boolean
}

export default function ProductRow(props: Props) {
    return (
        <tr className="flex flex-row justify-between">
            <td>{props.name}</td>
            <td>${props.price}</td>
        </tr>
    )
}
