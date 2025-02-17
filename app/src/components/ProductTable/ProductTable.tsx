import { Fragment } from 'react'
import { ProductData } from "../../data/index"
import ProductCategoryRow from "../ProductCategoryRow/index"
import ProductRow from "../ProductRow/index"

import style from "../../style.ts"

type Props = {
  data: ProductData
} & style.Props

export default function ProductTable(props: Props) {
  const categoriesUsed: any = {};
  return (
    <table className={"w-full " + props.className}>
      <caption>Products and their prices</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody data-testid="table-body">
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
