import { Fragment } from 'react'
import { ProductData } from "../../data/index"
import ProductCategoryRow from "../ProductCategoryRow/index"
import ProductRow from "../ProductRow/index"

import type { StyleProps } from "../../style.ts"
import style from "../../style.ts"

type Props = {
  data: ProductData
} & StyleProps

export default function ProductTable(props: Props) {
  const categoriesUsed: any = {};
  return (
    <table className={"w-full md:w-1/2 table-fixed " + props.className}>
      <caption className={"mt-1 mb-1 text-lg md:text-center text-left font-bold"}>Products and their prices</caption>
      <thead>
        <tr>
          <th className="text-left">Name</th>
          <th className="text-center w-[65px]">Price</th>
        </tr>
      </thead>
      <tbody data-testid="table-body">
        {props.data.items.map(
          (item, index) => {
            if (categoriesUsed.hasOwnProperty(item.category) === false) {
              categoriesUsed[item.category]=null;
              return (
                <Fragment key={index}>
                  <ProductCategoryRow className="border-b border-solid border-licorice-500 p-[50px]" name={item.category} />
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
