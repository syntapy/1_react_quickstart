interface Props {
    name: string
    price: number
    stocked: boolean
}

export default function ProductRow(props: Props) {
    return (
        <tr className="flex flex-row ">
            <td className="grow text-left">{props.name}</td>
            <td className="grow text-right">${props.price}</td>
        </tr>
    )
}
