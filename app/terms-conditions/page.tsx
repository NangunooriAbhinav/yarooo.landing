import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { ThemeProvider } from "@/components/theme-provider";

export default function TermsConditionsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-[#1f2937]">
        <Navbar hideNavLinks={true} />
        <div className="container mx-auto max-w-4xl px-4 pt-32 pb-20">
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-[40px]">
              Terms and Conditions
            </h1>
            
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Welcome to our Affiliate Marketing Platform (the &quot;Platform&quot;). By accessing or using our mobile application or website, 
              you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). Please read them carefully.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                By registering, accessing, or using the Platform, you agree to comply with and be legally bound by these Terms and our Privacy Policy. 
                If you do not agree, do not use the Platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Eligibility</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                To use this app:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  You must be at least 18 years old.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  You must provide accurate, current, and complete information during registration.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  You must not be banned or restricted from using financial or affiliate services under applicable laws.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. User Responsibilities</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                As a user, you agree:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Not to misuse the platform or its features.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  To only share affiliate links ethically, without spamming or deception.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  To ensure that your use of the platform complies with applicable laws.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. Cashback and Earnings</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Cashback is rewarded on qualifying purchases made via your shared affiliate links.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  All earnings are subject to confirmation by affiliate partners.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Cashback may take up to 60 days to reflect, depending on merchant policies.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. Payouts</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Minimum withdrawal threshold: ₹100 (confirmed cashback).
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  KYC details may be required before initiating payouts.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Payouts are processed via UPI, bank transfers, or digital wallets.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  The platform reserves the right to deduct taxes (e.g., TDS) as per Indian laws.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. Account Suspension & Termination</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                We reserve the right to suspend or terminate accounts if:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Fraudulent activity is detected.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  There is misuse of the app or manipulation of links.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Terms are violated or any illegal activity is associated with the account.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">7. Intellectual Property</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                All content, branding, UI/UX elements, logos, and features belong to CoffeeCodes (Noobsverse Private Limited). 
                Unauthorized use, copying, or redistribution is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">8. Privacy</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Your privacy is important to us. Please refer to our Privacy Policy for information about how we collect, use, 
                and share your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">9. Limitation of Liability</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                The Platform is provided &quot;as is&quot;. We are not liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Third-party network failures.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Delay in cashback confirmation from merchants.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Losses due to misuse of affiliate links or payment delays.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">10. Changes to Terms</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                We reserve the right to change these Terms at any time. Users will be notified of significant updates via email 
                or app notification. Continued use of the Platform after changes implies agreement to the revised Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject 
                to the exclusive jurisdiction of the courts of Pune, Maharashtra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">12. Contact Us</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                If you have any questions or concerns regarding these Terms, feel free to reach out:
              </p>
              <div className="text-gray-600 dark:text-gray-300 mb-4">
                <p>📧 Email: team@noobsverse.com</p>
                <p>📱 Phone: +91 7569236628</p>
                <p>🌐 Website: coffeecodes.in</p>
              </div>
            </section>
          </div>
        </div>
        <FooterSection />
      </div>
    </ThemeProvider>
  );
}