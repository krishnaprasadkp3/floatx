import { createFileRoute } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-layout";
import { Scale, FileCheck, ShieldAlert, Gavel, Globe } from "lucide-react";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | FloatX" },
      {
        name: "description",
        content: "Read the Terms and Conditions for using the FloatX platform and services.",
      },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <MarketingHeader variant="solid" activePath="/terms-of-service" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a1250] via-[#5a2ccf] to-[#8b5cf6] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#00e59b]/30 blur-[120px]" />
          <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-white/20 blur-[140px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#9dffdc] backdrop-blur-md">
            <Scale className="h-4 w-4" />
            Last updated: February 22, 2026
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
            Terms of <span className="text-[#00e59b]">Service</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Please read these terms carefully before using the FloatX platform. They outline your rights and obligations.
          </p>
        </div>
      </section>

      <main className="pt-16 pb-24 bg-white relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <div className="bg-gray-50/50 rounded-3xl p-8 mb-12 border border-gray-100 italic font-medium text-gray-700">
              This document is an electronic record in terms of the Information Technology Act, 2000 and rules made thereunder. By accessing the platform, you agree to these terms.
            </div>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <FileCheck className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">01 Eligibility</h2>
              </div>
              <p>
                To use our platform, you must be at least 18 years of age and legally capable of entering into contracts. You must provide accurate registration information and keep your account details secure.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#00e59b]/10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="h-5 w-5 text-[#00e59b]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">02 Nature of Service</h2>
              </div>
              <p>
                FloatX provides subscription-based SaaS services including CRM, automation, communication tools, analytics, and AI-powered business solutions. Our platform helps businesses manage and automate customer interactions across multiple channels.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <Gavel className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">03 User Obligations</h2>
              </div>
              <p>
                You agree to use the platform lawfully and refrain from any activity that misuses, reverse-engineers, or exploits the system. Maintaining the confidentiality of your account credentials is your primary responsibility.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">04 Payments</h2>
              <p>
                Users agree to pay the applicable subscription fees for the chosen plan. Fees are generally non-refundable except as specifically outlined in our Cancellation and Refund Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">05 Intellectual Property</h2>
              <p>
                All platform content, including software, trademarks, logos, and designs, are the exclusive property of FloatX. You may not reproduce or distribute any part of the platform without our explicit consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">06 Governing Law</h2>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <Globe className="h-6 w-6 text-gray-400 shrink-0 mt-1" />
                <p className="m-0">
                  These Terms are governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Kerala, India.
                </p>
              </div>
            </section>

            <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#8149f8]/5 to-transparent border border-[#8149f8]/10 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact for Legal Queries</h3>
              <p className="mb-8">For questions regarding these Terms & Conditions, reach out to our legal team.</p>
              <a href="mailto:legal@floatx.app" className="text-lg font-bold text-[#8149f8] hover:underline">
                legal@floatx.app
              </a>
            </div>

          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
