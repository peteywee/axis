import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
      <p className="mt-4">
        Top Shelf Service LLC ("we", "our", "us") values your privacy. This Privacy Policy outlines how we collect,
        use, store, and protect your information in compliance with GDPR, CCPA, and applicable laws.
      </p>
      <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
      <p>We collect personal information you provide during account creation, onboarding, and app usage. This may include your name, email, preferences, and usage data.</p>
      <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p>We use your information to provide services, personalize your experience, and improve the application.</p>
      <h2 className="text-2xl font-semibold mt-6">3. Your Rights</h2>
      <ul className="list-disc ml-6">
        <li>Right to access your data</li>
        <li>Right to request deletion of your data</li>
        <li>Right to withdraw consent at any time</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6">4. Contact Us</h2>
      <p>If you have any questions, contact us at <a href="mailto:cravenwspatrick@gmail.com" className="text-blue-500 underline">cravenwspatrick@gmail.com</a></p>
    </div>
  );
}