import styles from './Pricing.module.css';
import Link from 'next/link';

const plans = [
  { name: "Gratis", price: "0", limit: "1 Local / 1 Usuario", highlighted: false },
  { name: "Local", price: "39", limit: "1 Local / 2 Usuarios", highlighted: false },
  { name: "Duo Local", price: "69", limit: "2 Locales / 4 Usuarios", highlighted: true },
  { name: "Tri Local", price: "99", limit: "3 Locales / 6 Usuarios", highlighted: false }
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Planes que se ajustan a tu negocio</h2>
        <p className={styles.sectionSubtitle}>Todos los planes incluyen Facturación Electrónica ilimitada y acceso a todos los módulos</p>
        
        <div className={styles.cards}>
          {plans.map((plan, i) => (
            <div key={i} className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''} premium-transition`}>
              {plan.highlighted && <div className={styles.recommendedBadge}>MÁS POPULAR</div>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                 <span className={styles.currency}>S/.</span>
                 <span className={styles.price}>{plan.price}</span>
                 <span className={styles.period}>/mes</span>
              </div>
              <p className={styles.limits}>{plan.limit}</p>
              <ul className={styles.featuresList}>
                 <li>✔ Facturas Ilimitadas</li>
                 <li>✔ Control de Inventarios</li>
                 <li>✔ POS y Caja</li>
                 <li>✔ Módulo de Reportes</li>
              </ul>
              <Link href="/register" className={plan.highlighted ? "btn-primary" : "btn-outline"} style={{width: '100%'}}>
                 Elegir Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
