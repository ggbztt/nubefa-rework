import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>Nubefa</div>
        <nav className={styles.nav}>
          <Link href="#features">Características</Link>
          <Link href="#pricing">Planes y Precios</Link>
        </nav>
        <div className={styles.actions}>
          <Link href="/login" className="btn-outline">Iniciar Sesión</Link>
          <Link href="/register" className="btn-primary">Pruébalo Gratis</Link>
        </div>
      </div>
    </header>
  );
}
