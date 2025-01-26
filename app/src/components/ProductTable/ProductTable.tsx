import { Fragment } from 'react'
import ProductCategoryRow from "../ProductCategoryRow/index"
import ProductRow from "../ProductRow/index"
import { ProductData } from "../../data/index"

type Props = {
  data: ProductData
}

export default function ProductTable(props: Props) {
  const categoriesUsed: any = {};
  return (
    <table>
      <caption>Products and their prices</caption>
      <thead className="flex flex-row">
        <tr>
          <th className="grow text-left">Name</th>
          <th className="grow text-right">Price</th>
        </tr>
      </thead>
      <tbody data-testid="table-body" className="border-collapse flex flex-col">
        {props.data.items.map(
          (item, index) => {
            if (categoriesUsed.hasOwnProperty(item.category) === false) {
              categoriesUsed[item.category]=null;
              return (
                <Fragment key={index}>
                  <ProductCategoryRow name={item.category} />
                  <ProductRow name={item.name} price={item.price} stocked={item.stocked} />
                </Fragment>
              )
            } else 
              return (
                <Fragment key={index}>
                  <ProductRow key={`item-${index}`} name={item.name} price={item.price} stocked={item.stocked} />
                </Fragment>
              )
          }
        )}
      </tbody>
    </table>
  )
}
