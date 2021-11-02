import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export const Partner = () => {
  return (
    <div className="container pb-48 sm:pb-4">
      <h2 className="h2 py-16 sm:pt-6 font-semibold text-center">
        Partner & Supporter
      </h2>
      <div
        className="grid grid-cols-5 max-md:grid-cols-3 gap-x-16 max-sm:gap-x-4 w-10/12 md:grid-cols-5 md:max-w-6xl md:w-11/12 md:gap-x-16 gap-y-8 mx-auto hoverFilter justify-center">
        <StaticImage
          alt=""
          src={"../images/partner_binance.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_web30.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_okex.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_hashkey.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_maker.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_gitcoin.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_gun.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_arweave.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_chainide.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_dgc.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_aiamfda.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_filecoin.png"}
          placeholder="none"
        />
        <StaticImage
          alt=""
          src={"../images/partner_protocol.png"}
          placeholder="none"
        />
      </div>
    </div>
  )
}