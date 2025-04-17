import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { ThemeProvider } from "@/components/theme-provider";

export default function FinancialTermsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-[#1f2937]">
        <Navbar hideNavLinks={true} />
        <div className="container mx-auto max-w-4xl px-4 pt-32 pb-20">
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-[40px]">
              Financial Terms and Conditions
            </h1>
            
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Revenue Model</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                The Affiliate Marketing Platform operates on an affiliate-based revenue model. 
                The platform earns commissions from partner networks (e.g., Cuelinks) for qualifying 
                sales generated through affiliate links shared by users.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">1.1 Cashback Sharing</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  A portion of the earned affiliate commission is shared with users as cashback rewards.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  The cashback percentage may vary based on merchant rates, promotional offers, or platform-level changes.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. User Earnings</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Users can generate affiliate links, share them, and earn cashback on successful purchases through these links.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">2.1 Eligibility</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Cashback is only applicable to verified purchases made through valid affiliate links.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Users must comply with platform terms and conditions to remain eligible for earnings.
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">2.2 Tracking and Confirmation</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Affiliate conversions are tracked via integrated APIs (e.g., Cuelinks).
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Payouts are initiated only after the affiliate network confirms the transaction and clears the commission (typically within 30–60 days of purchase).
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Payouts to Users</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">3.1 Withdrawal Threshold</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Users must accumulate a minimum of ₹100 in confirmed cashback to initiate a withdrawal.
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">3.2 Payment Methods</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Payouts are made via supported digital wallets or direct bank transfers.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Users are required to submit necessary KYC information for processing withdrawals.
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">3.3 Processing Time</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Once a withdrawal request is initiated and validated, payments are processed within 5–7 working days.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. Platform Commission</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  The platform retains a percentage of the earned affiliate commission as operational fees.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  This commission is not visible to end users and is deducted before cashback calculation.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. Refunds and Reversals</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  If a purchase is returned, canceled, or marked invalid by the affiliate network, the associated cashback will be revoked.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Reversed earnings will be reflected in the user&apos;s cashback dashboard.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. Taxes and Compliance</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  All cashback payouts are subject to applicable taxes under Indian law.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  CoffeeCodes reserves the right to deduct Tax Deducted at Source (TDS) where applicable.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">7. Fraud Prevention</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Any fraudulent activity, including spamming links, self-referrals, or artificial transactions, will result in account suspension and forfeiture of earnings.
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  The platform uses automated and manual checks to detect fraudulent behavior.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">8. Policy Updates</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  CoffeeCodes may update these financial terms periodically. Users will be notified of any changes via the app and must agree to continue usage.
                </li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 font-medium">Prepared By:</p>
              <p className="text-gray-600 dark:text-gray-300">CoffeeCodes Team</p>
              <p className="text-gray-600 dark:text-gray-300">Noobsverse Private Limited</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                📧 team@noobsverse.com | 📱 +91 7569236628 | 🌐 coffeecodes.in
              </p>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    </ThemeProvider>
  );
}