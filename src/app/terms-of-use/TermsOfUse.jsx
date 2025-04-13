/**
 * @file TermsOfUse.jsx
 * @module TermsOfUse
 * @desc Displays the Terms of Use for Alberta Tomorrow.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";
import PolicySection from "@/components/Polices/PolicySection";
import PolicySubSection from "@/components/Polices/PolicySubSection";
import PolicyText from "@/components/Polices/PolicyText";
import PageHeader from "@/components/common/PageHeader";

export default function TermsOfUse() {

  return (
    <div className='page-width '>
      <div className='page'>
        <PageHeader title='Terms of Use' subtitle="Alberta Tomorrow Website Terms of Use License and Services Agreement" />
        
        <PolicyText>
          <strong>APPLICATION:</strong> The provisions of this Agreement (the “Agreement”) apply to all access to or use of the Alberta Tomorrow Website and, where and as applicable, the Services (as defined below).
        </PolicyText>
        <PolicyText>
          <strong>Please read this Agreement carefully.</strong> This Agreement restricts and limits your rights. You agree to transact and contract electronically. By accepting this Agreement, and/or by accessing or using the Alberta Tomorrow website and/or the Services and/or the Materials, you enter into a binding legal agreement and contract with the Alberta Tomorrow Foundation (“Alberta Tomorrow”), and you accept all the terms and conditions of this Agreement, as set out below.
        </PolicyText>

        <div className="h-12"/>

        <PolicySection title="1. Governing Law and Enforcement">
          <PolicySubSection title="Governing Law, Jurisdiction, and Breach Remedies">
            <PolicyText>
              (a) This Agreement will be governed by and interpreted according to the laws of the province of Alberta, Canada, and the laws of Canada applicable therein. Regardless of your location of residence, domicile, or physical presence, you irrevocably attorn and submit to the exclusive jurisdiction of the courts of Alberta, sitting at Calgary, without regard to the conflicts of law rules or principles of such courts. You agree that you will not bring any action in any other jurisdiction, and you agree that you will not commence or maintain any action by way of class proceedings whatsoever.
            </PolicyText>
            <PolicyText>
              (d) In the event of any breach, or threatened or pending breach, of this Agreement by you, Alberta Tomorrow will be entitled to seek injunctive or other equitable relief in any court of competent jurisdiction without any requirement as to posting a bond, giving an undertaking as to damages, or providing proof of damages not being an adequate remedy.
            </PolicyText>
          </PolicySubSection>

          <PolicySubSection title="Modifications and Amendments">
            <PolicyText>
              (b) Although the general policy of Alberta Tomorrow is to provide reasonable notice of changes to this Agreement, or the nature, quality, operation, or specifications of the Services, including any Materials (as defined below) provided or made available by Alberta Tomorrow from time to time, Alberta Tomorrow assumes no obligation to do so. You agree that Alberta Tomorrow may modify the Services, or the Materials, and/or amend this Agreement at any time without notice to you, and you agree to regularly review this Agreement for any amendments. Your continued use of the Services or Materials following such changes constitutes your acceptance of any amendments to this Agreement or modification to the Services or Materials.
            </PolicyText>
          </PolicySubSection>

          <PolicySubSection title="Restrictions on Use">
            <PolicyText>
              (c) The Services and the Materials are not available and are not to be used where prohibited or limited by law. The Services and the Materials are not available to you and must not be accessed or used by you from any location or jurisdiction, or under any circumstances, where your access to the Services or the Materials renders Alberta Tomorrow subject to the laws of any jurisdiction which may or does limit the rights of Alberta Tomorrow, or increases the liability of Alberta Tomorrow, or limits or makes void all or any part of the terms, conditions, disclaimers, and limitations of this Agreement with respect to Alberta Tomorrow.
            </PolicyText>
          </PolicySubSection>
        </PolicySection>

        <PolicySection title="2. The Services">
          <PolicySubSection title="Definition of Services and Materials">
            <PolicyText>
              (a) The <strong>“Services”</strong> means access to the Alberta Tomorrow website and, to the extent permitted by Alberta Tomorrow (which requires your completing a click-through confirmation of your acceptance of this Agreement, or other mechanism confirming acceptance), your ability to use any software provided on a “software as a service” basis, including any mobile applications, and your ability to download, copy, print, and display educational and similar materials (the <strong>“Materials”</strong>).
            </PolicyText>
          </PolicySubSection>

          <PolicySubSection title="Ownership and Licensing">
            <PolicyText>
              (b) The Services and the Materials are owned by and are the exclusive property of Alberta Tomorrow. The Services and the Materials are licensed, not sold.
            </PolicyText>
          </PolicySubSection>

          <PolicySubSection title="Access and Termination">
            <PolicyText>
              (c) Alberta Tomorrow reserves the right to refuse access to the Services and the Materials to anyone for any reason at any time, and to reject or terminate the use of, or force forfeiture of any username for any reason.
            </PolicyText>
            <PolicyText>
              (f) Alberta Tomorrow has the right to modify or terminate this Agreement, including your account, your access to the Services, or any right, permission or license to use the Materials, for any reason, without notice, at any time, and without liability to you.
            </PolicyText>
          </PolicySubSection>

          <PolicySubSection title="Content Monitoring and User Content">
            <PolicyText>
              (d) Alberta Tomorrow has the right, but no obligation to, remove, edit, block, and/or monitor any data, documents, records, materials, information, text, files, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links and any other content or materials of any kind (collectively, “User Content”) or accounts containing User Content that Alberta Tomorrow determines in its sole discretion violate this Agreement.
            </PolicyText>
          </PolicySubSection>

          <PolicySubSection title="Additional Rights and Modifications">
            <PolicyText>
              (e) Alberta Tomorrow may grant you additional rights to the Services, the Materials, or any software, but that will require a separate written agreement with Alberta Tomorrow, in its sole discretion.
            </PolicyText>
            <PolicyText>
              (g) The United Nations International Convention on the Sale of Goods does not apply to this Agreement.
            </PolicyText>
          </PolicySubSection>
        </PolicySection>

        <PolicySection title="3. Your Rights">
          <PolicyText>
            (a) You do not own the Services or the Materials. Your rights under this Agreement are personal to you. You cannot transfer any rights you may have under this Agreement to any other person.
          </PolicyText>
          <PolicyText>
            (b) Alberta Tomorrow permits you to create an account which includes a revocable, non-exclusive, personal, and non-transferrable license to access and use the Services, and to download, copy, print and display the Materials, including minimal and reasonable modifications to the Materials, provided that your purposes for doing any of the foregoing must be limited to educational and related purposes, or for such other purposes as Alberta Tomorrow may direct or permit. You will not under any circumstances remove any proprietary markings, copyright or other intellectual property notices, or attributions of origin or authorship from the Services or the Materials. The rights granted to you under this Agreement are conditional on your continuing compliance with this Agreement.
          </PolicyText>
          <PolicyText>
            (c) You are exclusively responsible for all costs of accessing or using the Services and the Materials, including charges for data, connectivity, software, and hardware.
          </PolicyText>
        </PolicySection>

        <PolicySection title="4. Your Responsibilities">
          <PolicySubSection title="General Responsibilities and Warranties">
            <PolicyText>
              (a) By accepting this Agreement, or accessing or using the Services, you warrant and represent that you have full legal capacity and authority to do so, that you will not be in breach of any obligation or duty, whether legal, equitable, fiduciary or otherwise, and that your jurisdiction does not limit the rights of Alberta Tomorrow, or increase the liability of Alberta Tomorrow, or limit or make void all or any part of the terms, conditions, disclaimers and limitations of this Agreement with respect to Alberta Tomorrow.
            </PolicyText>

            <PolicyText>
              (b) You use the Services and the Materials voluntarily and entirely at your own risk.
            </PolicyText>

            <PolicyText>
              (c) You agree to conduct yourself in compliance with this Agreement and any other acceptable use policy or other directive of Alberta Tomorrow.
            </PolicyText>

            <PolicyText>
              (d) You are responsible for keeping your password secret and secure. You will be responsible for any activity that occurs through your account and you agree you will not disclose, sell, transfer, license or assign your account, username, password, or any account rights to anyone else.
            </PolicyText>

            <PolicyText>
              (e) You warrant and represent that all information you provide to Alberta Tomorrow will always be true, accurate, current, and complete and you agree to update your information as necessary to maintain its truth and accuracy.
            </PolicyText>

            <PolicyText>
              (f) You are exclusively responsible for your conduct and any User Content that you submit, post, or display on or via the Services.
            </PolicyText>
          </PolicySubSection>

          <PolicySubSection title="Prohibited Content and Unauthorized Activities">

            <PolicyText>
              (g) You will not use the Services or the Materials for any illegal or unauthorized purpose. You agree to comply with all laws and regulations applicable to the Services and the Materials, and to your use of the Services and the Materials, including but not limited to privacy laws, and intellectual property laws (including copyright and trademark laws).
            </PolicyText>

            <PolicyText>
              (h) You will not solicit, collect, or use the login credentials of other Alberta Tomorrow users.
            </PolicyText>

            <PolicyText>
              (i) You will not defame, stalk, bully, abuse, harass, threaten, impersonate or intimidate any other person or entity, you will not invade another person’s privacy, or collect or store personal data about other users except as permitted by applicable privacy laws and legislation, and you will not post private or confidential information via the Services.
            </PolicyText>

            <PolicyText>
              (j) You will not post violent, nude, partially nude, discriminatory, unlawful, infringing, hateful, pornographic, obscene, or sexually suggestive User Content via the Services.
            </PolicyText>

            <PolicyText>
              (k) You will not modify, translate, reverse engineer, decompile, disassemble, alter, copy, disseminate, distribute, publish or broadcast the Services or any Alberta Tomorrow software, or create compilations or derivative works based on the Services or such software, or assist or allow anyone to perform any one or more of those activities, or change, modify or alter another website so as to falsely imply that it is associated with the Services or Alberta Tomorrow.
            </PolicyText>

            <PolicyText>
              (l) You will not interfere with or disrupt the Services, or any servers or networks connected to the Services.
            </PolicyText>

            <PolicyText>
              (m) You will not upload, transfer, send, receive, or transmit any malicious, destructive, or disruptive computer code or malware, including but not limited to worms, viruses, spyware, phishing or bulk commercial emails, or any material of a similar nature.
            </PolicyText>

            <PolicyText>
              (n) You will not inject content or code or otherwise alter or interfere with the Services or the way any Alberta Tomorrow webpage is rendered or displayed in a user's browser or device.
            </PolicyText>

            <PolicyText>
              (o) You will not create an account with the Services through unauthorized means, including but not limited to, by using an automated device, script, bot, spider, crawler, or scraper.
            </PolicyText>

            <PolicyText>
              (p) You will not attempt to restrict another user from using or enjoying the Services and you will not encourage or facilitate violations of this Agreement or any other agreement, policy, or relationship of Alberta Tomorrow.
            </PolicyText>
          </PolicySubSection>
        </PolicySection>

        <PolicySection title="5. Violation of this Agreement by You">
          <PolicyText>
            (a) Any breach or violation of this Agreement, including the spirit of this Agreement, may, in Alberta Tomorrow's sole discretion, result in immediate suspension or termination without notice to you, or liability to you, of your Alberta Tomorrow account and/or access to the Services. In addition, you will be fully liable to, and indemnify Alberta Tomorrow for, any damages occasioned to Alberta Tomorrow by your breach or violation of this Agreement.
          </PolicyText>
        </PolicySection>

        <PolicySection title="6. Proprietary Rights">
          <PolicyText>
            (a) While this Agreement grants you a revocable, non-exclusive, personal, and non-transferrable license as provided in this Agreement, the Services, the Alberta Tomorrow Website, and all Materials made available through the Services or otherwise by Alberta Tomorrow, including all intellectual property rights (including copyright and moral rights) therein, are the exclusive property of Alberta Tomorrow, or its service providers, suppliers or licensors, all rights reserved. The Alberta Tomorrow name and logo are trademarks of Alberta Tomorrow, all rights reserved.
          </PolicyText>
          <PolicyText>
            (b) It is Alberta Tomorrow's policy not to accept or consider content, information, ideas, submissions, suggestions, or other materials (collectively, <strong>“Suggestions”</strong>) other than those we have specifically requested. This is to avoid any misunderstandings if your Suggestions are the same or similar to those Alberta Tomorrow has independently developed, is developing, or may develop in the future. Accordingly, Alberta Tomorrow does not accept unsolicited Suggestions, and takes no responsibility for any Suggestions provided to Alberta Tomorrow. If, despite Alberta Tomorrow’s policy, you choose to send Suggestions to Alberta Tomorrow, your doing so confirms that you agree that Alberta Tomorrow is free to use any Suggestions or other materials without any compensation or attribution to you, and for any purposes whatsoever, including, without limitation, developing and marketing products and services, without any liability or payment of any kind to you.
          </PolicyText>
        </PolicySection>

        <PolicySection title="7. Disclaimers and Limitations">
          <PolicyText>
            <strong>EXCEPT AS EXPRESSLY STATED OTHERWISE IN THIS AGREEMENT:</strong>
          </PolicyText>
          <PolicyText>
            (a) YOU ACKNOWLEDGE, WARRANT AND REPRESENT THAT YOU HAVE INDEPENDENTLY DETERMINED THAT THE SERVICES AND THE MATERIALS MEET YOUR REQUIREMENTS AND THAT YOU HAVE NOT, AND DO NOT, RELY ON ANY REPRESENTATION MADE BY ALBERTA TOMORROW AS TO THE SUITABILITY OF THE SERVICES OR THE MATERIALS FOR ANY PARTICULAR PURPOSE.
          </PolicyText>

          <PolicyText>
            (b) YOU ACKNOWLEDGE AND AGREE THAT EMAIL, ELECTRONIC COMMUNICATIONS, THE INTERNET, AND THE WORLD WIDE WEB ARE NOT FULLY DEPENDABLE MEDIA OR MEANS OF COMMUNICATION, AND YOU USE THE FOREGOING SOLELY AT YOUR OWN RISK. ALBERTA TOMORROW SHALL HAVE NO LIABILITY TO YOU FOR LOSS OF, DAMAGE TO, OR ALTERATION OF DATA OR INFORMATION, INCLUDING BUT NOT LIMITED TO USER CONTENT, IN TRANSIT OVER THE INTERNET, THE WORLD WIDE WEB, VIA ELECTRONIC MEANS, THE SERVICES OR VIA EMAIL.
          </PolicyText>

          <PolicyText>
            (c) YOU ARE EXCLUSIVELY RESPONSIBLE FOR OBTAINING AND DEALING WITH YOUR OWN INTERNET SERVICES PROVIDER, AND FOR YOUR OWN CONNECTIONS TO THE SERVICES, THE INTERNET, AND THE WORLD WIDE WEB. ALBERTA TOMORROW WILL HAVE NO LIABILITY TO YOU FOR FAILURE OF ANY INTERNET SERVICES PROVIDER OR OTHER THIRD PARTY OF ANY KIND TO PROVIDE SERVICES, INCLUDING ANY FAILURE BY ALBERTA TOMORROW’S INTERNET SERVICES PROVIDER OR OTHER SERVICE PROVIDERS TO ALBERTA TOMORROW
          </PolicyText>

          <PolicyText>
            (d) THE SERVICES, INCLUDING, WITHOUT LIMITATION, ANY ALBERTA TOMORROW SOFTWARE, AND THE MATERIALS, ARE ALL PROVIDED OR MADE AVAILABLE STRICTLY ON AN "AS IS", “WHERE IS”, "AS AVAILABLE" AND "WITH ALL FAULTS ACCEPTED" BASIS.
          </PolicyText>

          <PolicyText>
            (e) THERE ARE AND WILL BE NO REPRESENTATIONS, WARRANTIES, TERMS, CONDITIONS. GUARANTEES, OR COVENANTS, EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, GIVEN BY ALBERTA TOMORROW, OR AFFECTING ANYTHING TO BE PROVIDED, LICENSED, MADE AVAILABLE OR DELIVERED BY ALBERTA TOMORROW UNDER THIS AGREEMENT, INCLUDING WITHOUT LIMITATION THE SERVICES (INCLUDING ANY SOFTWARE, GOODS, SERVICES OR CONTENT OF ANY KIND), AND THE MATERIALS. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, YOU HEREBY WAIVE AND ALBERTA TOMORROW HEREBY DISCLAIMS ANY WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED, OF TITLE, RIGHT TO GRANT A LICENSE, MERCHANTABLE QUALITY, COMPLIANCE WITH DESCRIPTION, NON-INFRINGEMENT OF THIRD PARTY RIGHTS, QUIET ENJOYMENT, FREEDOM FROM MALICIOUS COMPUTER CODE, MALWARE, VIRUSES OR OTHER DELETERIOUS CONTENT OR CODE, OR FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTY OR CONDITION ARISING BY STATUTE OR OTHERWISE IN LAW OR FROM A COURSE OF DEALING OR USAGE OF TRADE.
          </PolicyText>

          <PolicyText>
            (f) ALBERTA TOMORROW DOES NOT WARRANT AND GIVES NO CONDITION THAT THE OPERATION, APPLICATION OR AVAILABILITY OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR FREE, OR THAT THE MATERIALS OR ANY CONTENT PROVIDED BY ALBERTA TOMORROW, OR AVAILABLE THROUGH THE SERVICES, WILL BE AVAILABLE, COMPLETE, UNALTERED, ACCURATE, TIMELY, UP TO DATE, TRUTHFUL, OR RELIABLE.
          </PolicyText>

          <PolicyText>
            (g) ALBERTA TOMORROW’S AFFILIATES, PARENTS, SUBSIDIARIES, RELATED ENTITIES, OR ANY OF ITS OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS (COLLECTIVELY, THE “ALBERTA TOMORROW PARTIES”) WILL NOT, UNDER ANY CIRCUMSTANCES, HAVE ANY LIABILITY WHATSOEVER TO YOU OR ANYONE CLAIMING THROUGH YOU.
          </PolicyText>

          <PolicyText>
            (h) YOU AGREE THAT, EVEN IF ALBERTA TOMOROW HAS BEEN ADVISED BY YOU OF THE POSSIBILITY OF SUCH DAMAGES, IN NO EVENT WILL ALBERTA TOMORROW BE LIABLE FOR ANY DAMAGES IN THE NATURE OF PUNITIVE, EXEMPLARY, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES, INCLUDING WITHOUT LIMITATION, ECONOMIC LOSS, LOST BUSINESS REVENUE, LOST PROFITS, FAILURE TO REALIZE EXPECTED SAVINGS, LOSS OF DATA, LOSS OF BUSINESS OPPORTUNITY, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES OR ANY CLAIM AGAINST YOU BY ANY THIRD PARTY.
          </PolicyText>

          <PolicyText>
            (i) WITHOUT DEROGATING FROM ANY OTHER LIMITATION OF LIABILITY CONTAINED IN THIS AGREEMENT, YOU AGREE THAT THE AGGREGATE OF ALL LIABILITY ON THE PART OF ALBERTA TOMORROW FOR BREACH OF ANY WARRANTY, REPRESENTATION, TERM OR CONDITION CONTAINED IN THIS AGREEMENT OR ANY OTHER BREACH GIVING RISE TO LIABILITY, INCLUDING A BREACH OF A CONDITION OR FUNDAMENTAL TERM OR FUNDAMENTAL BREACH OR BREACHES OR IN ANY OTHER WAY ARISING OUT OF OR RELATED TO THIS AGREEMENT OR ANY AGREEMENT CONTEMPLATED BY THIS AGREEMENT, FOR ANY AND ALL CAUSES OF ACTION WHATSOEVER AND, REGARDLESS OF THE FORM OF ACTION (INCLUDING BREACH OF CONTRACT, STRICT LIABILITY OR TORT, INCLUDING NEGLIGENCE, BREACH OF ANY DUTY, OR ANY OTHER LEGAL OR EQUITABLE THEORY), SHALL BE LIMITED TO YOUR ACTUAL DIRECT PROVABLE DAMAGES IN AN AMOUNT NOT TO EXCEED TEN DOLLARS ($10.00) IN CANADIAN CURRENCY.
          </PolicyText>

          <PolicyText>
            (j) EACH PARTY AGREES AND ACKNOWLEDGES THAT THE FOREGOING DISCLAIMERS AND LIMITATIONS ARE VALID AND REASONABLE, ARE REFLECTED IN THE PRICING FOR THE SERVICES, ARE KNOWN TO YOU AND ARE ACCEPTED BY YOU.
          </PolicyText>

          <PolicyText>
            (k) THE DISCLAIMERS LIMITATIONS HEREIN PROVIDED SHALL ENURE TO THE BENEFIT OF THE PARTIES AND THEIR SERVANTS, AGENTS, EMPLOYEES, SUB-CONTRACTORS AND THEIR RESPECTIVE OFFICERS, AGENTS AND EMPLOYEES. THESE LIMITATIONS APPLY NOTWITHSTANDING THE FAILURE OF THE ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
          </PolicyText>


        </PolicySection>

        <PolicySection title="8. Indemnification">
          <PolicyText>
            (a) YOU (AND ALSO ANY THIRD PARTY FOR WHOM YOU OPERATE AN ACCOUNT OR ACTIVITY ON THE SERVICES, WHETHER WITH THE CONSENT OF ALBERTA TOMORROW OR NOT) AGREE TO DEFEND, INDEMNIFY AND FOREVER HOLD HARMLESS THE ALBERTA TOMORROW PARTIES HARMLESS FROM AND AGAINST ANY CLAIMS, LIABILITIES, DAMAGES, LOSSES, AND EXPENSES, INCLUDING WITHOUT LIMITATION, LEGAL FEES, COSTS AND DISBURSEMENTS ON A SOLICITOR AND CLIENT BASIS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH ANY OF THE FOLLOWING (INCLUDING AS A RESULT OF YOUR DIRECT ACTIVITIES ON THE SERVICES OR THOSE CONDUCTED ON YOUR BEHALF):
          </PolicyText>
          <PolicyText>
            <ul className="pl-2">
              <li><strong>(I)</strong> YOUR CONTENT OR YOUR ACCESS TO OR USE OF THE SERVICES OR THE MATERIALS;</li>
              <li><strong>(II)</strong> YOUR BREACH OR ALLEGED BREACH OF THIS AGREEMENT;</li>
              <li><strong>(III)</strong> YOUR VIOLATION OF ANY THIRD-PARTY RIGHT, INCLUDING WITHOUT LIMITATION, ANY INTELLECTUAL PROPERTY RIGHT, PUBLICITY, CONFIDENTIALITY, PROPERTY OR PRIVACY RIGHT;</li>
              <li><strong>(IV)</strong> YOUR VIOLATION OF ANY LAWS, RULES, REGULATIONS, CODES, STATUTES, ORDINANCES OR ORDERS OF ANY GOVERNMENTAL AND QUASI-GOVERNMENTAL AUTHORITIES, INCLUDING, WITHOUT LIMITATION, ALL REGULATORY, ADMINISTRATIVE AND LEGISLATIVE AUTHORITIES;</li>
              <li><strong>(V)</strong> ANY MISREPRESENTATION MADE BY YOU. YOU WILL COOPERATE AS FULLY REQUIRED BY ALBERTA TOMORROW IN THE DEFENSE OF ANY SUCH CLAIM. ALBERTA TOMORROW RESERVES THE RIGHT TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF ANY MATTER SUBJECT TO INDEMNIFICATION BY YOU, AND YOU WILL NOT IN ANY EVENT SETTLE ANY CLAIM WITHOUT THE PRIOR WRITTEN CONSENT OF ALBERTA TOMORROW.</li>
            </ul>
          </PolicyText>
        </PolicySection>


        <PolicySection title="9. Your User Content">
          <PolicyText>
            (a) Alberta Tomorrow accepts no obligation to store, retain, make available or back-up User Content or any portion thereof, and Alberta Tomorrow will have no liability whatsoever to you for any loss, deletion, alteration, modification or change to User Content for any reason whatsoever. Storage, retention, and back-up of User Content is exclusively your obligation. You warrant and represent that in all cases you retain adequate copies, including back-up copies, of your User Content that that you can replace or recover all your User Content from any loss of, or damage to your User Content from the Services.
          </PolicyText>
        </PolicySection>

        <PolicySection title="10. Additional Services, Licenses or Statements of Work">
          <PolicyText>
            (a) Alberta Tomorrow may, in its exclusive discretion, agree to provide further or additional products, services or licenses (<strong>“Additional Offerings”</strong>). Any such Additional Offerings will only be made available, if at all, in a separate written statement of work or schedule, appendix, exhibit, attachment or similar document (collectively, each a “Statement of Work”) with Alberta Tomorrow, provided that, in all cases, any such agreement or Statement of Work will always be subject to this Agreement. In the event of any conflict between this Agreement and any such other agreement or Statement of Work, the terms and conditions of this Agreement will prevail and take priority to the full extent of any such conflict.          
          </PolicyText>
        </PolicySection>

        <PolicySection title="11. General Provisions">
          <PolicySubSection title="Transfer and Assignment">
            <PolicyText>
              (a) You may not transfer or assign this Agreement. Alberta Tomorrow may assign or transfer this Agreement, including its rights, benefits, and obligations hereunder, without your consent.
            </PolicyText>
            <PolicyText>
              (b) This Agreement will enure to the benefit of and will be binding on and enforceable by you and Alberta Tomorrow and our respective successors and permitted assigns.
            </PolicyText>
          </PolicySubSection>
    
          <PolicySubSection title="Agency, Partnership, and Joint Ventures">
            <PolicyText>
              (c) This Agreement does not create or imply any agency, partnership, joint venture, or other joint relationship between you and Alberta Tomorrow, and does not authorize you to bind or obligate Alberta Tomorrow.
            </PolicyText>
          </PolicySubSection>
    
          <PolicySubSection title="Force Majeure">
            <PolicyText>
              (d) Any delay or failure of Alberta Tomorrow to perform its obligations under this Agreement or under any Statement of Work shall be excused if the delay or failure is caused by an event or occurrence beyond the reasonable control of Alberta Tomorrow and without its fault or negligence, such as, by way of example and not by way of limitation, acts of God, action by any governmental authority, fires, flood, wind storms, explosions, epidemics, pandemics, riots, natural disasters, wars, terrorist acts, sabotage, labour problems (including lock-outs, strikes and slowdowns), or court order or injunction.
            </PolicyText>
          </PolicySubSection>
    
          <PolicySubSection title="Survival, Severability, and Waivers">
            <PolicyText>
              (e) If any part of this Agreement is void, prohibited, or unenforceable, the rest of this Agreement will continue in force and effect and will be construed as if such part had never been part of this Agreement.
            </PolicyText>
            <PolicyText>
              (f) The failure of Alberta Tomorrow to exercise any right under this Agreement, or to insist upon strict or full performance of the obligations under this Agreement will not constitute a waiver of Alberta Tomorrow’s rights under this Agreement, or a relinquishment of any provision of this Agreement.
            </PolicyText>
            <PolicyText>
              (g) Any provision of this Agreement that, expressly or by its nature, extends beyond the termination of this Agreement will survive any termination of this Agreement. Without limitation, sections 1, 7, 8, and 9 shall survive any termination or expiry of this Agreement, howsoever caused, and shall continue in full force and effect.
            </PolicyText>
          </PolicySubSection>
    
          <PolicySubSection title="Entire Agreement">
            <PolicyText>
              (h) This Agreement, including any Statement of Work or other referenced schedule, attachment, addendum, exhibit, purchase order or similar documentation, forms the entire agreement between you and Alberta Tomorrow, and supersedes all prior written and oral communications and agreements.
            </PolicyText>
          </PolicySubSection>
    
          <PolicySubSection title="Further Assurances">
            <PolicyText>
              (i) If requested to do so, you will promptly and duly execute and deliver to Alberta Tomorrow such further documents and assurances and take such further action as Alberta Tomorrow may from time to time reasonably request in order to more effectively carry out the intent and purpose of this Agreement and to establish and protect the rights and remedies created or intended to be created hereby.
            </PolicyText>
          </PolicySubSection>
        </PolicySection>
      </div>
    </div>
  )
}
