import React from 'react'
import Banner from '@/common/Banner/Banner'
import TermsContent from '@/components/terms/TermsContent'
const TermsPage = () => {
  return (
    <>
    <Banner title={"Terms & Condition"} current={"terms-&-condition"} />
     <TermsContent /> 
    </>
  )
}

export default TermsPage
