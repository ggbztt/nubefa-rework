import styles from './HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer} animate-fade-in-up`}>
        <h1 className={styles.title}>Software ERP La Telegestión de MYPEs</h1>
        <p className={styles.subtitle}>
          Gestiona compras, ventas, inventarios y emite facturas electrónicas ilimitadas en un solo lugar. Más de 700 empresas ya confían en nosotros.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/register" className="btn-primary">¡Pruébalo por 30 días!</Link>
          <span className={styles.ctaNote}>Sin tarjeta de crédito requerida.</span>
        </div>
      </div>
    </section>
  );
}
