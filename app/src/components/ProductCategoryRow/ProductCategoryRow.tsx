interface Prop {
    category: string
}

export default function ProductCategoryRow(props: Props) {
    return (
        <li>{props.category}</li>
    )
}
