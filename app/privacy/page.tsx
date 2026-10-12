import type { Metadata } from "next"

import { LegalList, LegalPage, LegalSection } from "@/components/legal"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy | CallPilot AI",
  description: "What information CallPilot AI collects, how it is used, who processes it, and the choices you have.",
  alternates: { canonical: "/privacy" },
}

const mail = <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 12, 2026"
      intro={
        <>
          <p>
            {site.name} provides AI phone receptionists to small businesses. This policy explains what personal
            information we handle, why, who helps us process it, and the choices you have.
          </p>
          <p>
            It covers this website, the CallPilot app at app.callpilotai.ca, and the phone and text services we run
            for the businesses that use CallPilot. We are based in {site.region}.
          </p>
        </>
      }
    >
      <LegalSection title="1. Who this policy is about">
        <p>We handle information about three groups of people:</p>
        <LegalList>
          <li>
            <strong>Customers</strong>: the business owners and their team members who have a CallPilot account.
          </li>
          <li>
            <strong>Callers</strong>: people who phone or text a business that uses CallPilot.
          </li>
          <li>
            <strong>Visitors</strong>: people who browse this website or call our demo line.
          </li>
        </LegalList>
        <p>
          For callers, the business you phoned decides what its receptionist asks and what happens with the answers.
          We process that information on the business&apos;s behalf. If you called a business and have a question
          about your information, you can contact that business or contact us and we will pass your request on.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>
          <strong>Account information.</strong> Your name, email address and password when you create an account
          (passwords are stored hashed, never in readable form), your role in your business, and security records
          such as sign-in times, IP address and browser type.
        </p>
        <p>
          <strong>Business information.</strong> Your business name, address, phone numbers, service area, hours,
          services, and the instructions and reference material you give your receptionist.
        </p>
        <p>
          <strong>Call information.</strong> For each call your receptionist handles: the caller&apos;s phone number,
          the date, time and length of the call, an audio recording, a written transcript, an AI-generated summary,
          and details the caller gave, such as their name, address, email and what they need.
        </p>
        <p>
          <strong>Leads, appointments and messages.</strong> The lead and appointment records created from calls or
          entered by your team, and text messages sent to or received from callers on your behalf.
        </p>
        <p>
          <strong>Billing information.</strong> Your plan, invoices, usage and billing email. Card payments are
          handled by Stripe; we never see or store full card numbers.
        </p>
        <p>
          <strong>Website information.</strong> If analytics is enabled on this website, standard usage data such
          as pages viewed, approximate location, device and browser type, collected with cookies through Google
          Analytics.
        </p>
      </LegalSection>

      <LegalSection title="3. Information from Google and Slack">
        <p>CallPilot connects to these services only when you choose to, and asks for the least access it needs.</p>
        <p>
          <strong>Sign in with Google.</strong> If you use &quot;Continue with Google&quot;, we receive your name,
          email address and profile picture from Google. We use them only to create and sign you in to your
          CallPilot account. We do not receive your Google password.
        </p>
        <p>
          <strong>Google Calendar.</strong> If a business connects its Google Calendar, CallPilot can see when that
          calendar is busy and can add, move and remove the appointments its receptionist books. We use this only
          to offer callers times that are actually free and to record their bookings. We do not read the details of
          your other calendar events beyond the times they occupy.
        </p>
        <p>
          <strong>Slack.</strong> If a business connects Slack, CallPilot creates a private channel in that
          workspace and posts new leads to it, including the caller&apos;s name, phone number, address and request.
          We do not read messages in your workspace.
        </p>
        <p>
          You can disconnect Google Calendar or Slack at any time in the app under Settings, Integrations. When you
          do, we stop using the connection and delete the stored access credentials.
        </p>
        <p>
          <strong>Google user data.</strong> CallPilot&apos;s use and transfer of information received from Google
          APIs adheres to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. We do not sell Google user data, use it for advertising, or use
          it to train AI models, and no person at CallPilot reads it except where needed for security, to comply
          with the law, or with your permission to resolve a support request.
        </p>
      </LegalSection>

      <LegalSection title="4. How we use information">
        <LegalList>
          <li>To answer calls for your business, capture leads, book appointments and send follow-up texts.</li>
          <li>To show you your calls, leads, appointments and usage in the app, and to notify you about them.</li>
          <li>To create and secure accounts, including verifying email addresses and preventing misuse.</li>
          <li>To bill for the service and keep the financial records the law requires.</li>
          <li>To fix problems, monitor reliability, and improve how the receptionist handles calls.</li>
          <li>To answer your questions and send service announcements.</li>
        </LegalList>
        <p>
          We do not sell personal information, and we do not use your callers&apos; information to advertise to
          them.
        </p>
      </LegalSection>

      <LegalSection title="5. Call recording and AI">
        <p>
          Calls handled by CallPilot are answered by an AI voice assistant, and they are recorded and transcribed so
          the business can see what was said and act on it.
        </p>
        <p>
          Each business that uses CallPilot is responsible for telling its callers that calls may be answered by an
          AI assistant and recorded, where the law requires it. Its receptionist can be set up to say so at the
          start of every call.
        </p>
        <p>
          The receptionist&apos;s speech and understanding are provided by third-party AI services listed below.
          They process call audio and text to provide the service to us.
        </p>
      </LegalSection>

      <LegalSection title="6. Who we share information with">
        <p>We share information only with the companies that help us run CallPilot, and only what each needs:</p>
        <LegalList>
          <li>
            <strong>Retell AI</strong> and <strong>OpenAI</strong>: the voice assistant, call recordings,
            transcripts and call summaries.
          </li>
          <li>
            <strong>Twilio</strong>: phone numbers and text messages.
          </li>
          <li>
            <strong>Stripe</strong>: card payments.
          </li>
          <li>
            <strong>Neon</strong>, <strong>Render</strong> and <strong>Vercel</strong>: database and hosting.
          </li>
          <li>
            <strong>Google</strong> and <strong>Slack</strong>: only for the connections described above, when you
            turn them on.
          </li>
          <li>Our email delivery provider, for account and notification emails.</li>
        </LegalList>
        <p>
          We may also disclose information when the law requires it, to protect someone&apos;s safety or our legal
          rights, or as part of a sale or merger of the business, in which case this policy continues to apply to
          it.
        </p>
      </LegalSection>

      <LegalSection title="7. Where information is stored">
        <p>
          Our service providers store and process information on servers outside Canada, mainly in the United
          States. While it is there, it is subject to the laws of that country, and courts and authorities there may
          be able to access it.
        </p>
      </LegalSection>

      <LegalSection title="8. How long we keep it">
        <p>
          We keep account, call and lead information for as long as the business&apos;s account is active, so the
          business has its history. When an account is closed, we delete or anonymise its information within a
          reasonable period, except records we must keep for tax, accounting or legal reasons.
        </p>
        <p>A business can ask us to delete specific calls, recordings or leads at any time.</p>
      </LegalSection>

      <LegalSection title="9. How we protect it">
        <p>
          Information is encrypted in transit. Access credentials for connected services are encrypted before they
          are stored. Each business&apos;s data is kept separate from every other business&apos;s, access within a
          business is limited by role, and significant actions are logged. No system is perfectly secure; if a
          breach creates a real risk of significant harm, we will notify the people affected and the regulators as
          the law requires.
        </p>
      </LegalSection>

      <LegalSection title="10. Your choices and rights">
        <p>
          Under Canadian privacy law, including PIPEDA and Alberta&apos;s Personal Information Protection Act, you
          can ask to see the personal information we hold about you, ask us to correct it, and withdraw your consent
          to our using it, subject to legal and contractual limits.
        </p>
        <LegalList>
          <li>
            <strong>Customers</strong> can view and change most of their information in the app, and can ask us to
            close their account and delete its data.
          </li>
          <li>
            <strong>Callers</strong> can ask the business they called, or us, for access to or deletion of their
            call records. We may need to confirm the request with that business.
          </li>
          <li>
            <strong>Text messages:</strong> reply STOP to any text to stop receiving them.
          </li>
          <li>
            <strong>Google access:</strong> you can also remove CallPilot&apos;s access from your Google Account
            under Security, Third-party access.
          </li>
        </LegalList>
        <p>
          To make a request, email {mail}. We respond within 30 days. If you are not satisfied with our answer, you
          can contact the Office of the Information and Privacy Commissioner of Alberta or the Office of the Privacy
          Commissioner of Canada.
        </p>
      </LegalSection>

      <LegalSection title="11. Children">
        <p>
          CallPilot is a service for businesses. It is not directed at children, and we do not knowingly create
          accounts for anyone under 18.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to this policy">
        <p>
          When we change this policy we will update the date at the top of this page. If a change significantly
          affects how we use your information, we will tell account holders by email or in the app before it takes
          effect.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact us">
        <p>
          Questions or requests about privacy: {mail}, or call <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
        </p>
        <p>
          {site.name}, {site.region}.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
