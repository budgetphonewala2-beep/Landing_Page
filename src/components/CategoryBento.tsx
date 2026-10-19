import { CATEGORY_ICONS, TagIcon } from "@/components/Icons";
import { site } from "@/config/site";

/**
 * The six product categories as a bento grid. Cell shapes are set in
 * globals.css (.bento__cell--1 … --6); the grid has exactly one cell per
 * category in site.categories.
 */
export function CategoryBento() {
  return (
    <div className="bento">
      {site.categories.map((category, index) => {
        const Icon = CATEGORY_ICONS[category.title] ?? TagIcon;
        return (
          <article key={category.title} className={`bento__cell bento__cell--${index + 1} reveal`}>
            {index === 0 ? <Icon className="bento__ghost" size={200} weight="thin" /> : null}
            <span className="bento__icon">
              <Icon size={26} />
            </span>
            <h3 className="bento__title">{category.title}</h3>
            <p className="bento__text">{category.body}</p>
          </article>
        );
      })}
    </div>
  );
}
