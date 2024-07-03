import HeaderDesktop from "../components/HeaderDesktop";
import InfoCollection from "../components/InfoCollection";
import FooterDesktop from "../components/FooterDesktop";
import "./CancellationPolicy.css";

const CancellationPolicy = () => {
  return (
    <div className="cancellation-policy">
      <HeaderDesktop />
      <section className="content">
        <h1 className="cancellation-policy1">Cancellation Policy</h1>
        <div className="please-refer-to2">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </section>
      <section className="frame-parent">
        <InfoCollection
          informationWeCollect="Cancellation Period"
          personalInformation="1.1 Time Period"
          weMayCollectPersonalInfor="You may cancel your booking or subscription within [10] days of purchase or before the start of the service, whichever comes first, to receive a full refund."
          usageInformation="1.2 Beyond time period"
          weAutomaticallyCollectInf="Cancellations made after the specified period may be subject to partial or no refund, as outlined below."
        />
        <div className="refund-eligibility-parent">
          <h1 className="refund-eligibility">
            <ol className="refund-eligibility1">
              <li>Refund Eligibility</li>
            </ol>
          </h1>
          <div className="refunds-will-be-issued-based-o-parent">
            <div className="refunds-will-be">
              2.1 Refunds will be issued based on the cancellation period and
              terms outlined in our policy.
            </div>
            <div className="if-cancellation-is">
              2.2 If cancellation is initiated within the specified period, you
              will be eligible for a full refund of the purchase amount.
            </div>
            <div className="cancellations-made-after">
              2.3 Cancellations made after the specified period may be eligible
              for a partial refund or no refund, depending on the circumstances
              and the terms associated with the service or product.
            </div>
          </div>
        </div>
        <div className="cancellation-process-parent">
          <h1 className="cancellation-process">
            <ol className="cancellation-process1">
              <li>Cancellation Process</li>
            </ol>
          </h1>
          <div className="to-cancel-your">
            To cancel your booking or subscription, please contact our customer
            support team via [email/phone/chat] with your order details and
            reason for cancellation. Our team will guide you through the
            cancellation process and provide assistance as needed. Please ensure
            to cancel your booking or subscription before the start date of the
            service to avoid any cancellation fees or penalties.
          </div>
        </div>
        <div className="refund-processing-time-parent">
          <h1 className="refund-processing-time-container">
            <ol className="refund-processing-time">
              <li> Refund Processing Time</li>
            </ol>
          </h1>
          <div className="refunds-for-eligible">
            Refunds for eligible cancellations will be processed within [Y]
            business days from the date of cancellation confirmation. The time
            taken for the refund to reflect in your account may vary depending
            on your payment method and financial institution.
          </div>
        </div>
        <div className="exceptions-and-special-circums-group">
          <h1 className="exceptions-and-special-container1">
            <ol className="exceptions-and-special-circums1">
              <li>Exceptions and Special Circumstances</li>
            </ol>
          </h1>
          <div className="certain-services-or">
            Certain services or products may have specific cancellation terms
            and conditions that supersede the general policy. In cases of force
            majeure, such as natural disasters, government regulations, or other
            unforeseen circumstances beyond our control, refund eligibility and
            cancellation terms may be adjusted accordingly.
          </div>
        </div>
        <div className="changes-to-bookings-parent">
          <h1 className="changes-to-bookings-container">
            <ol className="changes-to-bookings">
              <li>Changes to Bookings</li>
            </ol>
          </h1>
          <div className="you-have-the1">
            Changes to bookings or subscriptions may be permitted depending on
            availability and the terms associated with the service or product.
            Please contact our customer support team for assistance with any
            changes to your booking or subscription.
          </div>
        </div>
        <div className="policy-updates-parent">
          <h1 className="policy-updates">
            <ol className="policy-updates1">
              <li> Policy Updates</li>
            </ol>
          </h1>
          <div className="this-cancellation-and">
            This cancellation and refund policy is subject to change without
            prior notice.We encourage you to review the policy periodically to
            stay informed about any updates or modifications.
          </div>
        </div>
        <div className="contact-us-group">
          <h1 className="contact-us4">
            <ol className="contact-us5">
              <li>Contact Us</li>
            </ol>
          </h1>
          <div className="if-you-have2">
            If you have any questions or require further clarification regarding
            our cancellation and refund policy, please don't hesitate to contact
            our customer support team.
          </div>
        </div>
      </section>
      <FooterDesktop
        group="pending_I560:7395;4:21124"
        social3="/social-31@2x.png"
      />
    </div>
  );
};

export default CancellationPolicy;
