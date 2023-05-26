import React from 'react';
import "../Css/policy.css"
import Navbar from '../Components/Navbar';

function PoliciesPage() {
  return (
    <div>
      <Navbar />

      <h1 className="page-title">Privacy Policy and Terms of Use</h1>
      <p className='page-text'>At Tabina, we value the privacy of our users and take our responsibility for protecting it seriously. This Privacy Policy outlines how we collect, use, disclose, and process personal information in connection with our cooking recipe website (the "Website") and any mobile applications (the "Apps") that link to this Privacy Policy. We are dedicated to providing our users with the best possible experience and strive to maintain the trust of our community of users. This policy describes how we collect, use, and disclose information in connection with our Services, which include recipes, cooking tips, and related content, products, and features offered on or through the Website and Apps.</p>

      <h2 className="policy-title">Introduction</h2>
      <p className="policy-text">Welcome to Tabina, a cooking recipe website. This Privacy Policy and Terms of Use applies to all users of our website. By using our website, you agree to the terms of this policy.</p>

      <h2 className="policy-title">Information We Collect</h2>
      <p className="policy-text">We collect information from our users in a variety of ways. When you create an account, submit a recipe, or engage with our Website or Apps in any other way, we may collect personal information such as your name, email address, and other details. We also collect information about your use of our Website and Apps, including the pages you visit, the recipes you view, and the actions you take. We may use third-party analytics tools to help us analyze and understand how our Website and Apps are being used.</p>

      <h2 className="policy-title">How We Use Your Information</h2>
      <p className="policy-text">We use your personal information to provide you with a personalized experience on our Website and Apps. We may use your information to suggest recipes based on your preferences, send you emails about new recipes or features, and analyze how our Website and Apps are being used. We may also use your information to improve our products and services, develop new features, and comply with legal obligations. We will never sell your personal information to third-party companies.</p>

      <h2 className="policy-title">Security</h2>
      <p className="policy-text">We take the security of your information seriously and have implemented appropriate measures to protect it. We use industry-standard security measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee its absolute security. We continually monitor our systems and processes to identify and address potential security threats.</p>

      <h2 className="policy-title">Cookies</h2>
      <p className="policy-text">We use cookies and similar tracking technologies to collect information about your use of our Website and Apps. Cookies are small text files that are stored on your device. We use cookies to personalize your experience on our Website and Apps and to analyze how our Website and Apps are being used. You can disable cookies in your browser settings, but this may affect your ability to use our Website and Apps. We may also use cookies to serve targeted advertising on our Website and Apps or on third-party websites.</p>

      <h2 className="policy-title">Third-Party Links</h2>
      <p className="policy-text">Our Website and Apps may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these websites or services. We encourage you to read the privacy policies of these websites or services before providing any personal information.</p>

      <h2 className="policy-title">Changes to This Policy</h2>
      <p className="policy-text">We may update this policy from time to time to reflect changes in our practices or applicable laws. If we make any material changes to this policy, we will notify you by email or by posting a notice on our Website and Apps. Your continued use of our Website and Apps after any changes to this policy will constitute your acceptance of the changes.</p>

      <h2 className="policy-title">Contact Us</h2>
      <p className="policy-text" style={{display: 'inline-block'}}>If you have any questions or concerns about this policy, please contact us at <strong>support@tabina.com</strong>. We are committed to addressing your concerns and resolving any issues you may have.</p>
    </div>
  );
}

export default PoliciesPage;