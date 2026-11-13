import { Icon } from "@/components/atoms/Icon";
import type { Service } from "@/lib/content-types";

const rows = ["Research", "Positioning", "Messaging and offer", "Brand strategy", "Marketing plan", "Workshops", "Written playbook", "Handover support", "Results review"];

export function ComparisonTable({ services, showPrices }: { services: Service[]; showPrices: boolean }) {
  if (!services.length) return null;
  return <div className="comparison-wrap"><table className="comparison"><caption>What each engagement includes</caption><thead><tr><th scope="col">Scope</th>{services.map(service => <th key={service.slug} scope="col">{service.title}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row}><th scope="row">{row}</th>{services.map(service => <td key={service.slug}>{service.inclusions.includes(row) ? <><Icon name="check" /><span className="sr-only">Included</span></> : "Not included"}</td>)}</tr>)}<tr><th scope="row">Timeline</th>{services.map(service => <td key={service.slug}>{service.timeline}</td>)}</tr>{showPrices ? <tr><th scope="row">Fixed price</th>{services.map(service => <td key={service.slug}>{service.price}</td>)}</tr> : null}</tbody></table></div>;
}
