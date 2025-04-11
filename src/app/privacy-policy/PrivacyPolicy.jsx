/**
 * @file PrivacyPolicy.jsx
 * @module PrivacyPolicy
 * @desc Displays the Privacy Policy for Alberta Tomorrow.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";
import PolicySection from "../../components/Polices/PolicySection";
import PolicyText from "../../components/Polices/PolicyText";
import PageHeader from "@/components/common/PageHeader";

export default function PrivacyPolicy() {

  return (
    <div className='page-width '>
      <div className='page'>
        <PageHeader title='Privacy Policy' subtitle="Effective date: June 9, 2020. Alberta Tomorrow is committed to maintaining the privacy of individuals and protecting personal information in its custody or control." />

        <PolicySection title="Terminology" initiallyOpen>
          <PolicyText>
            Personal information means information about an identifiable individual. This does not include information of an aggregate or anonymous nature where a specific individual or individuals cannot be identified, nor does it include business contact information used to contact an individual in their capacity as an employee or official of an organization.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Application" initiallyOpen>
          <PolicyText>
            This Policy is a summary of Alberta Tomorrow's privacy practices and policies governing this website ("Website") and parties to our License and Services Agreement (“Services Agreement”).
          </PolicyText>
        </PolicySection>

        <PolicySection title="Consent" initiallyOpen>
          <PolicyText>
            By accessing this Website, and/or entering into the Services Agreement, you confirm your consent to the collection, use and disclosure of your personal information as described in this Policy. If you do not agree with the contents of this Policy, or to our collection, use or disclosure of personal information as described in this Policy, then you may not access this Website and you may not enter into the Services Agreement, or access or use the Services or the Materials.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Privacy and this Website" initiallyOpen>
          <PolicyText>
            We do not collect any personal information from you when you simply visit our website without having entered into our Services Agreement, or any other contractual relationship with Alberta Tomorrow, or having voluntarily provided us with your personal information. The information we collect when you simply visit our Website is of an aggregate or anonymous nature.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Privacy and our Services Agreement" initiallyOpen>
          <PolicyText>
            If you choose to enter into our Services Agreement in order to access the Services and Materials (as defined in the Services Agreement), you will be asked for personal information to confirm your identity, which may include your name, address, phone number and email address, and also the school or learning institution at which you are a student, teacher, faculty or staff member, or your place of employment, and other information as stated to you at the time of collection of your personal information, or as described in this Policy. This information is collected, used, and disclosed to provide the Services and Materials to you, to ensure your compliance with the Services Agreement, and, where applicable, to process payment from you or on your behalf.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Cookies" initiallyOpen>
          <PolicyText>
            We may use cookies as described in this Policy. A cookie is a small file containing a string of information that our Website stores on a visitor's computer, and that the visitor's browser provides to the Website each time the visitor returns. We may use cookies to count visitors to the Website, to monitor, assess, and understand how visitors navigate the Website and which portions of the Website are used the most or the least, or appear to be the most or the least interesting.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Security" initiallyOpen>
          <PolicyText>
            While we make reasonable efforts to maintain the security of personal information in our custody or control, please be advised that the Internet and email are inherently insecure media, and we accept no liability for the security or privacy of personal information in transit over the Internet.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Unsolicited or Voluntary Personal Information" initiallyOpen>
          <PolicyText>
            If you choose to voluntarily submit personal information to us by email, online forms, or other means, we will consider that you have done so with your consent for purposes reasonably related to your providing the information. We may communicate further with you with information that may be useful, but we will include instructions on how to terminate receiving such further information.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Outsourcing and Data Hosting Outside of Canada" initiallyOpen>
          <PolicyText>
            We may use third party service providers to process or deal with data and information on our behalf, and that may include personal information. In order to protect the confidentiality and security of any personal information processed on our behalf by our service providers, we use contractual and similar measures with such service providers, including contractual non-disclosure provisions.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Other Websites" initiallyOpen>
          <PolicyText>
            Please note that our Website may contain links to other websites which are provided as a convenience for visitors to our website only. Any third-party websites will have their own privacy policies and practices, and we cannot be responsible for such third parties or their websites.
          </PolicyText>
        </PolicySection>

        <PolicySection title="CASL Compliance" initiallyOpen>
          <PolicyText>
            Canada has implemented stringent legislation (Generally referred to as Canadian Anti-Spam Legislation, or "CASL") prohibiting commercial electronic communications without adequate consent, and without an adequate unsubscribe mechanism. It is the policy of Alberta Tomorrow to not send CEMs without valid legal consent from the recipient, and it is our policy to always use the unsubscribe mechanisms prescribed by CASL.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Further Information"initiallyOpen>
          <PolicyText>
            For further information with respect to our privacy practices, or with respect to inquiries concerning personal information about you in our custody or control, or to update or correct your information, you may contact us at:
            <br />
            <strong>Alberta Tomorrow Executive Director:</strong> Jennifer Janzen
            <br />
            Email: <a href="mailto:info@albertatomorrow.ca" className="text-blue-600 underline">info@albertatomorrow.ca</a>
            <br />
            <strong>Alberta Tomorrow Foundation</strong>
            <br />
            40 Riverview Circle Cochrane, AB, Canada T4C 1K3
          </PolicyText>
        </PolicySection>

      </div>
    </div>
  )
}
