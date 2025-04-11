'use client'

import { use } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function VideoModal({ params }) {
  const router = useRouter()
  const { id } = use(params) // ✅ Unwrap the promise

  const closeModal = () => {
    router.back()
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = '')
  }, [])

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex justify-center items-center z-[70]">
      <div className="bg-white p-6 rounded w-[90vw] max-w-xl">
        <button onClick={closeModal} className="float-right text-lg font-bold">
          &times;
        </button>
        <h2 className="text-xl font-semibold">Video Modal: {id}</h2>
      </div>
    </div>
  )
}
