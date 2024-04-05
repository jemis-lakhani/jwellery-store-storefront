import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-neutral-50">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="basis-0 h-full small:hidden flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex flex-1 small:flex-none items-center justify-center small:justify-start h-full">
            <LocalizedClientLink
              href="/"
              className="text-gray-800 text-2xl font-semibold hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              EVARA
            </LocalizedClientLink>
          </div>

          <div className="hidden small:flex items-center justify-center gap-10 flex-1">
            <LocalizedClientLink
              className="hover:text-black font-medium tracking-normal uppercase text-sm leading-none text-gray-600 main-header"
              href="/account"
              data-testid="nav-account-link"
            >
              New
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-black font-medium tracking-normal uppercase text-sm leading-none text-gray-600 main-header"
              href="/account"
              data-testid="nav-account-link"
            >
              Rings
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-black font-medium tracking-normal uppercase text-sm leading-none text-gray-600 main-header"
              href="/account"
              data-testid="nav-account-link"
            >
              Earrings
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-black font-medium tracking-normal uppercase text-sm leading-none text-gray-600 main-header"
              href="/account"
              data-testid="nav-account-link"
            >
              Bracelet
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-black font-medium tracking-normal uppercase text-sm leading-none text-gray-600 main-header"
              href="/account"
              data-testid="nav-account-link"
            >
              Necklace
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full justify-end">
            {/* <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div> */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
