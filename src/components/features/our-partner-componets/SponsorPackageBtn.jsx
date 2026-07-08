import React from 'react'
import HexButton from '../../common/hexButton/HexButton'
import { FaFile } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function SponsorPackageBtn() {
  const t = useTranslations('Pages.Partners')

  return (
    <div className="flex justify-center">
      <HexButton
        color="accent"
        textColor="black"
        hoverColor="tertiary"
        link="/pdfs/AlbertaTomorrowSponsorshipPackage.pdf"
      >
        <span className="flex items-center justify-center gap-2">
          {t('sponsorshipPackageButton')} <FaFile />
        </span>
      </HexButton>
    </div>
  )
}
