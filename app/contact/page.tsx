import type { Metadata } from 'next';
import Link from 'next/link';
import Landing from '../_components/Landing';
import styles from '../_components/landing.module.css';

export const metadata: Metadata = {
  title: 'Contact | Hisham Ilyas',
  description: 'Contact Hisham Ilyas about marketing leadership, consulting, and creative collaborations.',
};

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const cv = process.env.NEXT_PUBLIC_CV_URL;

  return (
    <Landing label="CONTACT" title="Contact Hisham Ilyas" intro="I’m interested in marketing leadership roles in Qatar and across the GCC, as well as consulting and creative collaborations.">
      <div className={styles.body}>
        <div className={styles.actions}>
          {email && <a className="text-link" href={`mailto:${email}`}>Email Hisham</a>}
          {linkedin && <a className="text-link" href={linkedin}>LinkedIn</a>}
          {cv && <a className="text-link" href={cv} download>Download CV</a>}
          <Link className={styles.action} href="/connect">Draft an enquiry</Link>
        </div>
      </div>
    </Landing>
  );
}
