import React from 'react'
import QuestionDropdown from '@/components/common/QuestionDropdown'
import { faqData } from '@/data/faqData'
import PageHeader from '@/components/common/PageHeader'

export default function FAQs() {

  return (
    <div className='page-width'>
      <div className='page'>
        <PageHeader title='Frequently Asked Questions' subtitle="Find answers to common questions about Alberta Tomorrow." />
        {faqData.map((faq, index) => (
        <QuestionDropdown key={index} question={faq.question} answer={faq.answer} />
      ))}
      </div>
    </div>
  )

}
