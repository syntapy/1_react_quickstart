interface Prop {
    name: string
}

export default function ProductCategoryRow(props: Props) {
    return (
        <li>{props.name}</li>
    )
}
