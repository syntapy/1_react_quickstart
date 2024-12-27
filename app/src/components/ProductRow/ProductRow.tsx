interface Props {
    name: string
    price: number
    stocked: boolean
}

export default function ProductRow(props: Props) {
    return (
        <li className="flex flex-row ">
            <span className="grow text-left">{props.name}</span>
            <span className="grow text-right">${props.price}</span>
        </li>
    )
}
