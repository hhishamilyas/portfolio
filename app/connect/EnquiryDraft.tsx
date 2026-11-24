'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from '../_components/landing.module.css';

export default function EnquiryDraft({ email }: { email?: string }) {
  const [feedback, setFeedback] = useState('');

  async function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name')).trim();
    const replyEmail = String(data.get('replyEmail')).trim();
    const subject = String(data.get('topic'));
    const message = String(data.get('message')).trim();
    if (!name || !replyEmail || !message) {
      setFeedback('Please enter your name, email, and message.');
      return;
    }
    const draft = `From: ${name} <${replyEmail}>\n\n${message}`;
    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`;
      setFeedback('Your draft will open in your email app.');
      return;
    }
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${draft}`);
      setFeedback('Enquiry copied.');
    } catch {
      setFeedback('Couldn’t copy automatically. Select and copy your message from the draft field.');
    }
  }

  return (
    <form aria-label="Contact form" className={styles.form} onSubmit={prepareEnquiry}>
      <p>{email ? 'Open the draft in your email app to review and send it.' : 'Copy your draft to share through a channel you already use. This page does not send it.'}</p>
      <div className={styles.formFields}>
        <label>Name<input name="name" autoComplete="name" maxLength={100} required /></label>
        <label>Email<input name="replyEmail" type="email" autoComplete="email" maxLength={254} required /></label>
      </div>
      <label>Topic<select name="topic"><option>Marketing leadership role</option><option>Consulting project</option><option>Creative collaboration</option><option>Other enquiry</option></select></label>
      <label>Message<textarea name="message" rows={6} maxLength={1200} required /></label>
      <button type="submit" className="motion-button">{email ? 'Open email draft' : 'Copy enquiry'}</button>
      {feedback && <p role="status">{feedback}</p>}
    </form>
  );
}
