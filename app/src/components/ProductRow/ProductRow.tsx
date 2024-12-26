interface Props {
    name: string
    price: number
    stocked: boolean
}

export default function ProductRow(props: Props) {
    return (
        <li className="flex flex-row ">
            <span className="grow">{props.name}</span>
            <span className="grow">${props.price}</span>
        </li>
    )
}
