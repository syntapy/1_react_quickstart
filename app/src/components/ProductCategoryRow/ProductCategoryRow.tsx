interface Prop {
    category: string
}

export default function ProductCategoryRow(props: Props) {
    return (
        <div>{props.category}</div>
    )
}
