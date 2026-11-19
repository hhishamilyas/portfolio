'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from '../_components/landing.module.css';

export default function EnquiryDraft({ email }: { email?: string }) {
  const [feedback, setFeedback] = useState('');

  async function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get('topic'));
    const message = String(data.get('message')).trim();
    if (!message) {
      setFeedback('Please enter a message.');
      return;
    }
    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      setFeedback('Your draft will open in your email app.');
      return;
    }
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${message}`);
      setFeedback('Enquiry copied.');
    } catch {
      setFeedback('Couldn’t copy automatically. Select and copy your message from the draft field.');
    }
  }

  return (
    <form className={styles.form} onSubmit={prepareEnquiry}>
      <p>{email ? 'Open the draft in your email app to review and send it.' : 'Copy your draft to share through a channel you already use. This page does not send it.'}</p>
      <label>Topic<select name="topic"><option>Marketing leadership role</option><option>Consulting project</option><option>Creative collaboration</option><option>Other enquiry</option></select></label>
      <label>Message<textarea name="message" rows={6} required /></label>
      <button type="submit">{email ? 'Open email draft' : 'Copy enquiry'}</button>
      {feedback && <p role="status">{feedback}</p>}
    </form>
  );
}
