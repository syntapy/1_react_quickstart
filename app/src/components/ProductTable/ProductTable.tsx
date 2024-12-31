import ProductCategoryRow from "../ProductCategoryRow/index"
import ProductRow from "../ProductRow/index"

import dataJSON from "../../data/data.json"

export default function ProductTable() {
    const categoriesUsed={};
    return (
        <div>
            <div className="flex flex-row">
                <span className="grow text-left">Name</span><span className="grow text-right">Price</span>
            </div>
            <table className="border-collapse flex flex-col">{
                dataJSON.items.map(
                    item => {
                        if (categoriesUsed.hasOwnProperty(item.category) === false) {
                            categoriesUsed[item.category]=null;
                            return (
                                <>
                                    <ProductCategoryRow name={item.category} />
                                    <ProductRow name={item.name} price={item.price} stocked={item.stocked} />
                                </>
                            )
                        } else 
                            return (
                                <ProductRow name={item.name} price={item.price} stocked={item.stocked} />
                            )
                    }
                )
            }
            </table>
        </div>
    )
}
