import React from 'react'
import Banner from '@/common/Banner/Banner'
import ContactInfo from '@/components/Contact/ContactCards'
import ContactSection from '@/components/Contact/ContactForm'
const ContactUsPage = () => {
  return (
    <>
              <Banner title={"Let's Work Together"}current={"Contact-Us"} />
        <ContactSection />
      <ContactInfo />
    </>
  )
}

export default ContactUsPage
