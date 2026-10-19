import {
  WHATSAPP_ENQUIRY,
  addressLines,
  hasAnyContact,
  hasEmail,
  hasPhone,
  hasWhatsApp,
  phoneHref,
  site,
  whatsappHref,
} from "@/config/site";
import { ClockIcon, MailIcon, MessageIcon, PhoneIcon, PinIcon } from "@/components/Icons";

/**
 * Contact details.
 *
 * Channels with an empty value in `src/config/site.ts` are omitted entirely,
 * so the site never publishes a made-up phone number or address.
 */
export function ContactDetails() {
  const lines = addressLines();
  const hours = site.contact.hours.trim();

  if (!hasAnyContact && !hours) {
    return (
      <p className="contact__placeholder">
        Our contact details will be published here shortly. Please check back
        soon, or reach us through any of the channels listed on this page once
        they are added.
      </p>
    );
  }

  return (
    <ul className="contact__list">
      {hasPhone && (
        <li className="contact__item">
          <span className="contact__icon">
            <PhoneIcon />
          </span>
          <span>
            <span className="contact__label">Phone</span>
            <span className="contact__value">
              <a href={phoneHref(site.contact.phone)}>{site.contact.phone}</a>
            </span>
          </span>
        </li>
      )}

      {hasWhatsApp && (
        <li className="contact__item">
          <span className="contact__icon">
            <MessageIcon />
          </span>
          <span>
            <span className="contact__label">WhatsApp</span>
            <span className="contact__value">
              <a
                href={whatsappHref(site.contact.whatsapp, WHATSAPP_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.contact.whatsapp}
              </a>
            </span>
          </span>
        </li>
      )}

      {hasEmail && (
        <li className="contact__item">
          <span className="contact__icon">
            <MailIcon />
          </span>
          <span>
            <span className="contact__label">Email</span>
            <span className="contact__value">
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </span>
          </span>
        </li>
      )}

      {lines.length > 0 && (
        <li className="contact__item">
          <span className="contact__icon">
            <PinIcon />
          </span>
          <span>
            <span className="contact__label">Store address</span>
            <span className="contact__value">
              {lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </span>
        </li>
      )}

      {hours && (
        <li className="contact__item">
          <span className="contact__icon">
            <ClockIcon />
          </span>
          <span>
            <span className="contact__label">Business hours</span>
            <span className="contact__value">{hours}</span>
          </span>
        </li>
      )}
    </ul>
  );
}
