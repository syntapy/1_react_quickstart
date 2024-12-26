interface Props {
    item: string
    price: number
    stocked: boolean
}

export default function ProductRow(props: Props) {
    return (
        <li className="flex flex-row ">
            <span className="grow">{props.item}</span>
            <span className="grow">${props.price}</span>
        </li>
    )
}
