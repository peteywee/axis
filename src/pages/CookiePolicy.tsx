import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
      <p className="mt-4">
        This Cookie Policy explains how Top Shelf Service LLC uses cookies and similar technologies in the Axis application.
      </p>
      <h2 className="text-2xl font-semibold mt-6">1. What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device when you use our Service.</p>
      <h2 className="text-2xl font-semibold mt-6">2. Types of Cookies We Use</h2>
      <ul className="list-disc ml-6">
        <li>Essential cookies for authentication and security</li>
        <li>Preference cookies to remember your settings</li>
        <li>Analytics cookies to improve our Service</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6">3. Managing Cookies</h2>
      <p>You can control cookies through your browser settings, but disabling them may affect your experience.</p>
      <h2 className="text-2xl font-semibold mt-6">4. Contact</h2>
      <p>For more information, contact us at <a href="mailto:cravenwspatrick@gmail.com" className="text-blue-500 underline">cravenwspatrick@gmail.com</a></p>
    </div>
  );
}