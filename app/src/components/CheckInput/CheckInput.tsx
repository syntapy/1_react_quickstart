type Props = {
  id_name: string
}

export default function CheckInput(props: Props) {
  return (
    <>
      <input id={props.id_name} type="checkbox" name={props.id_name} />
      <label htmlFor={props.id_name}>Only show products in stock</label>
    </>
  )
}
