import type { Metadata } from 'next';
import Landing from '../_components/Landing';
import styles from '../_components/landing.module.css';
import EnquiryDraft from './EnquiryDraft';

export const metadata: Metadata = {
  title: 'Let’s Connect | Hisham Ilyas',
  description: 'Prepare an enquiry about a marketing leadership role, consulting project, or creative collaboration.',
};

export default function ConnectPage() {
  return (
    <Landing label="LET’S CONNECT" title="Tell me what you have in mind." intro="Share a little about the role or project, what you’re trying to achieve, and your timing.">
      <div className={styles.body}>
        <EnquiryDraft email={process.env.NEXT_PUBLIC_CONTACT_EMAIL} />
      </div>
    </Landing>
  );
}
