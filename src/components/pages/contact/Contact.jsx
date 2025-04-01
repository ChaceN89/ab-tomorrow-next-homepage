import React from 'react';

import PageHeader from '@/components/common/PageHeader';
import SupportUs from '@/components/footer/SupportUs';
import SocialMediaIcons from '@/components/footer/SocialMediaIcons';
import ContactInfo from './ContactInfo';

export default function Contact() {

  return (

    <div className='page-width relative'>
      <div className='page'>
        <PageHeader
          title="Connect With Us"
          subtitle="Have a question or want to get involved? Reach out to us!"
        />
        <div className='grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          <ContactInfo address/>
          <SupportUs/>
          <SocialMediaIcons title="Follow Us"/>
        </div>
      </div>
    </div>
  )
}
