import type { Metadata } from "next"
import Link from "next/link"

import { LegalList, LegalPage, LegalSection } from "@/components/legal"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service | CallPilot AI",
  description: "The terms that apply when a business uses CallPilot AI's phone receptionist service.",
  alternates: { canonical: "/terms" },
}

const mail = <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="October 12, 2026"
      intro={
        <>
          <p>
            These terms are the agreement between {site.name} (&quot;CallPilot&quot;, &quot;we&quot;) and the
            business that signs up for our service (&quot;you&quot;). By creating an account or using CallPilot, you
            agree to them.
          </p>
          <p>
            If you are signing up for a business, you confirm that you are allowed to accept these terms on its
            behalf.
          </p>
        </>
      }
    >
      <LegalSection title="1. The service">
        <p>
          CallPilot provides an AI phone receptionist that answers calls for your business, takes messages, captures
          leads, books appointments where you turn that on, and sends follow-up texts, together with an app where
          you see and manage the results.
        </p>
        <p>We may add, change or remove features. If a change materially reduces the service, we will tell you.</p>
      </LegalSection>

      <LegalSection title="2. Your account">
        <LegalList>
          <li>Give accurate information when you sign up, and keep it current.</li>
          <li>Keep your sign-in details secure. You are responsible for what is done through your account.</li>
          <li>
            You decide who on your team has access and in which role, and you are responsible for their use of
            CallPilot.
          </li>
          <li>Tell us promptly if you think someone has used your account without permission.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="3. Free trial, plans and payment">
        <p>
          <strong>Trial.</strong> New businesses start with a 14-day free trial with no credit card required. When
          it ends, you need a paid plan to keep your receptionist answering calls.
        </p>
        <p>
          <strong>Plans.</strong> Paid plans are billed monthly in Canadian dollars. Each plan includes a number of
          call minutes; minutes beyond that are charged at the overage rate for your plan. Current prices and
          allowances are shown in the app before you subscribe.
        </p>
        <p>
          <strong>Taxes.</strong> Prices do not include GST/HST or other applicable taxes, which are added to your
          invoice.
        </p>
        <p>
          <strong>Payment.</strong> Invoices are payable when issued, by card or by Interac e-Transfer where we
          offer it. If an invoice stays unpaid after we have reminded you, we may pause your receptionist until it
          is paid.
        </p>
        <p>
          <strong>Price changes.</strong> We will give you at least 30 days&apos; notice before a price change
          applies to you.
        </p>
        <p>
          <strong>Refunds.</strong> Fees already paid are not refundable, except where the law requires it or we
          agree otherwise in writing.
        </p>
      </LegalSection>

      <LegalSection title="4. Cancelling">
        <p>
          You can cancel at any time. Your service continues to the end of the billing period you have paid for,
          and you will not be charged for the next one. We may suspend or end your account if you seriously or
          repeatedly break these terms, or if we are required to by law.
        </p>
        <p>
          After your account closes, we delete your data as described in our <Link href="/privacy">Privacy Policy</Link>.
          Ask us before you close it if you would like a copy of your leads and call history.
        </p>
      </LegalSection>

      <LegalSection title="5. Your responsibilities">
        <p>You are responsible for how your receptionist is used with your callers. In particular, you agree to:</p>
        <LegalList>
          <li>
            Tell your callers, where the law requires it, that their call may be answered by an AI assistant and
            recorded. Your receptionist can be set up to say this at the start of each call.
          </li>
          <li>
            Follow the laws that apply to your calls and texts, including privacy law and Canada&apos;s
            anti-spam legislation, and only text people who have given you their number for that purpose.
          </li>
          <li>Make sure the information you give your receptionist about your business is accurate.</li>
          <li>Have the right to use any phone number, calendar or other account you connect to CallPilot.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="6. Acceptable use">
        <p>You may not use CallPilot to:</p>
        <LegalList>
          <li>Break the law, or deceive, harass or defraud anyone.</li>
          <li>Send unsolicited marketing calls or texts.</li>
          <li>Impersonate another person or business.</li>
          <li>Interfere with the service, try to access another business&apos;s data, or get around usage limits.</li>
          <li>Resell the service without our written agreement.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="7. What an AI receptionist can and cannot do">
        <p>
          Your receptionist is an automated system. It can mishear a caller, misunderstand a request, or give an
          answer that is incomplete or wrong. Review the leads, messages and bookings it produces, and do not rely
          on it as the only way urgent matters reach you.
        </p>
        <p>
          <strong>CallPilot is not an emergency service.</strong> It cannot call 911 or dispatch help, and it must
          not be used as the only point of contact for situations that put life, health or property at risk.
        </p>
        <p>
          The receptionist does not give professional advice. Anything it tells a caller about prices, availability
          or your services comes from the information you provided.
        </p>
      </LegalSection>

      <LegalSection title="8. Your data">
        <p>
          You own the information you and your callers put into CallPilot. You give us permission to process it to
          provide the service to you. How we handle it is described in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <p>
          Where we handle your callers&apos; personal information, we do so on your behalf and on your instructions.
        </p>
      </LegalSection>

      <LegalSection title="9. Third-party services">
        <p>
          CallPilot relies on other companies for phone lines, speech, AI models, payments and hosting, and can
          connect to services such as Google Calendar and Slack when you choose. Those services have their own
          terms, and we are not responsible for interruptions or changes on their side, though we will work to
          restore service when they occur.
        </p>
      </LegalSection>

      <LegalSection title="10. Our software and brand">
        <p>
          CallPilot, including its software, design and name, belongs to us. These terms give you the right to use
          the service while your account is active; they do not transfer ownership of any of it. If you send us
          suggestions, we may use them without owing you anything.
        </p>
      </LegalSection>

      <LegalSection title="11. Availability and warranties">
        <p>
          We work to keep CallPilot running at all hours, but we do not promise it will never be interrupted or
          free of errors. The service is provided &quot;as is&quot;. To the extent the law allows, we make no other
          warranties, including that the service will capture every call or lead or will suit a particular purpose.
        </p>
      </LegalSection>

      <LegalSection title="12. Limit of liability">
        <p>
          To the extent the law allows, CallPilot is not liable for lost profits, lost business, missed calls or
          leads, or any indirect or consequential loss arising from the service.
        </p>
        <p>
          Our total liability to you for all claims in any 12-month period is limited to the amount you paid us for
          the service in that period.
        </p>
        <p>Nothing in these terms limits liability that cannot be limited by law.</p>
      </LegalSection>

      <LegalSection title="13. Claims by others">
        <p>
          If someone brings a claim against us because of how you used CallPilot in breach of these terms or the
          law, for example a caller who was recorded without required notice, you agree to cover our reasonable
          costs in dealing with it.
        </p>
      </LegalSection>

      <LegalSection title="14. Changes to these terms">
        <p>
          We may update these terms. We will change the date at the top of this page and, for significant changes,
          tell you by email or in the app at least 30 days before they take effect. Continuing to use CallPilot
          after that means you accept the new terms.
        </p>
      </LegalSection>

      <LegalSection title="15. Governing law">
        <p>
          These terms are governed by the laws of Alberta and the federal laws of Canada that apply there. The
          courts of Alberta have jurisdiction over any dispute.
        </p>
      </LegalSection>

      <LegalSection title="16. Contact us">
        <p>
          Questions about these terms: {mail}, or call <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
        </p>
        <p>
          {site.name}, {site.region}.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
