import React from 'react';

export default function TermsOfService() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
      <p className="mt-4">
        These Terms of Service ("Terms") govern your access to and use of the Axis application ("Service")
        provided by Top Shelf Service LLC.
      </p>
      <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
      <p>By creating an account or using our Service, you agree to these Terms.</p>
      <h2 className="text-2xl font-semibold mt-6">2. User Responsibilities</h2>
      <p>You agree to use the Service in compliance with all applicable laws and not engage in harmful activities.</p>
      <h2 className="text-2xl font-semibold mt-6">3. Limitation of Liability</h2>
      <p>Top Shelf Service LLC is not liable for any damages arising from your use of the Service, to the maximum extent permitted by law.</p>
      <h2 className="text-2xl font-semibold mt-6">4. Contact</h2>
      <p>For questions, email <a href="mailto:cravenwspatrick@gmail.com" className="text-blue-500 underline">cravenwspatrick@gmail.com</a></p>
    </div>
  );
}