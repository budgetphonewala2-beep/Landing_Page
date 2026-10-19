import Image from "next/image";
import { phonesInStock, type Phone } from "@/config/phones";
import { hasWhatsApp, site, whatsappHref } from "@/config/site";
import { MessageIcon } from "@/components/Icons";

function PhoneCard({ phone }: { phone: Phone }) {
  return (
    <article className="product">
      <div className="product__media">
        <Image
          src={phone.image}
          alt={`${phone.name}, ${phone.details}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
        />
        <span className="product__badge product__badge--preowned">Pre-owned</span>
      </div>

      <div className="product__body">
        <h3 className="product__name">{phone.name}</h3>
        <p className="product__variant">{phone.details}</p>

        <div className="product__foot">
          <span className="product__ask">Price on request</span>
        </div>

        {hasWhatsApp ? (
          <a
            href={whatsappHref(
              site.contact.whatsapp,
              `Hi ${site.name}, please share the price and condition of the ${phone.name} (${phone.details}).`,
            )}
            className="btn btn--primary btn--small btn--block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageIcon size={18} />
            Ask price on WhatsApp
          </a>
        ) : null}
      </div>
    </article>
  );
}

/** Pre-owned phones currently in the shop. Renders nothing when none are listed. */
export function PhoneGrid() {
  if (phonesInStock.length === 0) return null;

  return (
    <div className="grid grid--products">
      {phonesInStock.map((phone) => (
        <PhoneCard key={phone.slug} phone={phone} />
      ))}
    </div>
  );
}
