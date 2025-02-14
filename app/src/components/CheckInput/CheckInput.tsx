type Props = {
  id_name: string
}

export default function CheckInput(props: Props) {
  return (
    <>
      <input
        id={props.id_name}
        type="checkbox"
        name={props.id_name}
        className={"appearance-none relative w-5 h-5 border border-2"
          + " border-licorice-500 checked:border-sgbus-green-500"
          + " before:absolute before:hidden checked:before:block"
          + " before:text-12"
          + " before:left-1/2 before:top-1/2"
          + " before:-translate-x-1/2 before:-translate-y-1/2"
          + " before:content-['✓'] cursor-pointer"
          + " before:text-sgbus-green-500 before:text-bold"
          + " transition duration-200"
          + " align-top bg-no-repeat bg-center bg-contain"
        }
      />
      <label htmlFor={props.id_name} >
        Only show products in stock
      </label>
    </>
  )
}
