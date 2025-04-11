/**
 * @file page.jsx
 * @module app/videos
 * @desc Videos page for Alberta Tomorrow. Displays a list of videos related to the project.
 *
 * @author Chace Nielson
 * @created Mar 31st, 2025
 * @updated Mar 31st, 2025
 */

import React from 'react'
import { getPageTitle } from '@/utils/metadataUtils'
import VideoDisplay from '@/app/resources/videos/components/VideoDisplay'
import Link from 'next/link'
import Modal from '@/components/common/Modal'

// Page-specific metadata
export const metadata = {
  title: getPageTitle("Videos"),
}

// Board of Directors Page Component
export default function VideosPage() {
  return (
    <>

    <Modal>
      COntent
    </Modal>

    {/* content that can open the modal here using somethig to set params */}

    <div className='container mx-auto p-4 flex gap-10 h-screen items-start'>
      <Link
        href={`/resources/videos/1`}
        scroll={false}
        className="cursor-pointer p-2 border hover:bg-gray-600 rounded-md h-fit"
      >
        Video 
      </Link>
      <Link
        href={`/resources/videos/4`}
        scroll={false}
        className="cursor-pointer p-2 border hover:bg-gray-600 rounded-md h-fit"
      >
        Video 4
      </Link>
      <Link
        href={`/resources/videos/10`}
        scroll={false}
        className="cursor-pointer p-2 border hover:bg-gray-600 rounded-md h-fit"
      >
        Video 10
      </Link>
      <Link
        href={`/resources/videos/20`}
        scroll={false}
        className="cursor-pointer p-2 border hover:bg-gray-600 rounded-md h-fit"
      >
        Video 20
      </Link>
      <Link
        href={`/resources/videos/-12`}
        scroll={false}
        className="cursor-pointer p-2 border hover:bg-gray-600 rounded-md h-fit"
      >
        Video -12
      </Link>
      
    </div>
    </>
  )

  return(<VideoDisplay/>)
}
