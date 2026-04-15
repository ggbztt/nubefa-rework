import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brand}>
          <h3>Nubefa ERP</h3>
          <p>La telegestión de MYPEs más completa y robusta.</p>
        </div>
        <div className={styles.linksBlock}>
          <h4>Contacto</h4>
          <p>📞 993400767 | 3256468</p>
          <p>✉️ ventas@nubefa.com</p>
          <p>📍 Av. Betancourt 1097, Los Olivos</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Nubefa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
