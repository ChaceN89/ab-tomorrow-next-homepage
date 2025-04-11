import React from 'react'
import HexButton from '../../../components/common/hexButton/HexButton'
import { FaFile } from 'react-icons/fa'

export default function SponsorPackageBtn() {
  return (
    <div className="flex justify-center">
      <HexButton
        color="accent"
        textColor="black"
        hoverColor="tertiary"
        link="/pdfs/AlbertaTomorrowSponsorshipPackage.pdf"
      >
        <span className="flex items-center justify-center gap-2">
          Download the Sponsorship Package <FaFile />
        </span>
      </HexButton>
    </div>
  )
}
