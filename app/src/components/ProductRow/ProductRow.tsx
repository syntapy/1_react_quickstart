interface Props {
    item: string
    price: number
    stocked: boolean
}

export default function ProductRow(props: Props) {
    return (
        <div>
            <span>{props.item}</span>
            <span>${props.price}</span>
        </div>
    )
}
