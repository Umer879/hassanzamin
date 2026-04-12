import React from 'react'
import Banner from '@/common/Banner/Banner'
import PrivacyContent from '@/components/privacy/Privacy'
const PrivacyPage = () => {
  return (
    <>
    <Banner title={"Privacy Policy"} current={"privacy-policy"} />
      <PrivacyContent />
    </>
  )
}

export default PrivacyPage
