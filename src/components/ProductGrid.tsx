import Image from "next/image";
import {
  formatINR,
  productsByCategory,
  type Product,
} from "@/config/products";
import { hasWhatsApp, site, whatsappHref } from "@/config/site";
import { CATEGORY_ICONS, MessageIcon, TagIcon } from "@/components/Icons";

function ProductCard({ product }: { product: Product }) {
  const showMrp = product.mrp !== undefined && product.mrp > product.price;
  const off = showMrp ? Math.round(((product.mrp! - product.price) / product.mrp!) * 100) : 0;
  const PlaceholderIcon = CATEGORY_ICONS[product.category] ?? TagIcon;

  return (
    <article className={`product${product.available ? "" : " product--sold"}`}>
      <div className={`product__media${product.image ? "" : " product__media--icon"}`}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
          />
        ) : (
          <PlaceholderIcon size={64} weight="light" />
        )}
        <span
          className={`product__badge${product.available ? "" : " product__badge--sold"}`}
        >
          {product.available ? "In stock" : "Out of stock"}
        </span>
      </div>

      <div className="product__body">
        <h3 className="product__name">{product.name}</h3>
        {product.details ? (
          <p className="product__variant">{product.details}</p>
        ) : null}
        {product.description ? (
          <p className="product__notes">{product.description}</p>
        ) : null}

        <div className="product__foot">
          <span className="product__price">{formatINR(product.price)}</span>
          {showMrp ? (
            <span className="product__mrp-row">
              <s className="product__mrp">MRP {formatINR(product.mrp!)}</s>
              <span className="product__off">{off}% off</span>
            </span>
          ) : null}
        </div>

        {product.available && hasWhatsApp ? (
          <a
            href={whatsappHref(
              site.contact.whatsapp,
              `Hi ${site.name}, I want to order: ${product.name} (${formatINR(product.price)}).`,
            )}
            className="btn btn--primary btn--small btn--block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageIcon size={18} />
            Order on WhatsApp
          </a>
        ) : null}
      </div>
    </article>
  );
}

/**
 * Products / pricing grid, grouped by category.
 *
 * Deliberately renders an honest empty state instead of sample products when
 * `products` is empty, so nothing unverified is ever published.
 */
export function ProductGrid() {
  const groups = productsByCategory();

  if (groups.length === 0) {
    return (
      <div className="empty-state">
        <div>
          <h3 className="empty-state__title">Our online price list is being updated</h3>
          <p className="empty-state__text">
            Send us your phone model on WhatsApp and we will share matching
            accessories with today&apos;s prices.
          </p>
          {hasWhatsApp ? (
            <div className="btn-row">
              <a
                href={whatsappHref(
                  site.contact.whatsapp,
                  `Hi ${site.name}, please share accessories and prices for my phone model: `,
                )}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageIcon size={18} />
                Chat on WhatsApp
              </a>
            </div>
          ) : null}
        </div>
        <div className="empty-state__icons" aria-hidden="true">
          {site.categories.map((category) => {
            const Icon = CATEGORY_ICONS[category.title];
            return Icon ? (
              <span key={category.title}>
                <Icon size={28} />
              </span>
            ) : null;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="catalogue">
      {groups.map((group) => (
        <section key={group.category} className="catalogue__group">
          <h3 className="catalogue__title">{group.category}</h3>
          <div className="grid grid--products">
            {group.items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/** Compact note shown above the grid on the pricing page. */
export function CatalogueNote() {
  return (
    <p className="section__lede">
      All prices are in Indian Rupees (₹) and include applicable taxes. Every
      accessory is brand-new in its original packaging. Delivery charges, if any,
      are shown to you before payment.
    </p>
  );
}
