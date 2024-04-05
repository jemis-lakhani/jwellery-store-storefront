import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { RegionInfo } from "types/global"

export default function ProductPrice({
  product,
  variant,
  region,
}: {
  product: PricedProduct
  variant?: PricedVariant
  region: RegionInfo
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col text-ui-fg-base gap-1">
      <span
        className={clx("text-xl", {
          "text-background font-semibold": selectedPrice.price_type === "sale",
        })}
      >
        {selectedPrice.calculated_price}
        {selectedPrice.price_type === "sale" && (
          <span className="line-through ml-2 text-base font-normal text-gray-400">
            {selectedPrice.original_price}
          </span>
        )}
      </span>
      {selectedPrice.price_type === "sale" && (
        <span className="text-[#8EB88E] text-sm">
          Flat {selectedPrice.percentage_diff}% off on MRP
        </span>
      )}
    </div>
  )
}
