import Image from "next/image";
import Link from "next/link";
import { formatINR, products, type Product } from "@/config/products";
import { hasAnyContact } from "@/config/site";
import { ChatIcon } from "@/components/Icons";

function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product${product.available ? "" : " product--sold"}`}>
      <div className="product__media">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
          />
        ) : null}
        <span
          className={`product__badge${product.available ? "" : " product__badge--sold"}`}
        >
          {product.available ? "Available" : "Sold"}
        </span>
      </div>

      <div className="product__body">
        <h3 className="product__name">{product.name}</h3>
        {product.variant ? (
          <p className="product__variant">{product.variant}</p>
        ) : null}
        {product.notes ? <p className="product__notes">{product.notes}</p> : null}

        <div className="product__foot">
          <span className="product__price">{formatINR(product.price)}</span>
          {product.grade ? <span className="product__grade">{product.grade}</span> : null}
        </div>
      </div>
    </article>
  );
}

/**
 * Products / pricing grid.
 *
 * Deliberately renders an honest empty state instead of sample phones when
 * `products` is empty, so nothing unverified is ever published.
 */
export function ProductGrid() {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h3 className="empty-state__title">Live listings are being updated</h3>
        <p className="empty-state__text">
          Our current second-hand stock changes frequently, so we publish each
          phone only after its condition has been checked. Get in touch and we
          will share the models, grades and prices we have available today.
        </p>
        <div className="btn-row">
          <Link href="/#contact" className="btn btn--primary">
            <ChatIcon />
            Ask for today&apos;s stock
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid--products">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

/** Compact note shown above the grid on the pricing page. */
export function CatalogueNote() {
  if (!hasAnyContact) return null;

  return (
    <p className="section__lede">
      Every phone listed here is a real, individual second-hand unit. The
      condition of each unit is confirmed with you before payment, and stock is
      not reserved until the order is confirmed.
    </p>
  );
}
