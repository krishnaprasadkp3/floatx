import { createFileRoute } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-layout";
import { RefreshCcw, Calendar, CreditCard, UserX, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy | FloatX" },
      {
        name: "description",
        content: "Understand how to cancel your FloatX subscription and our refund guidelines.",
      },
    ],
  }),
  component: CancellationPolicyPage,
});

function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <MarketingHeader variant="solid" activePath="/cancellation-policy" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a1250] via-[#5a2ccf] to-[#8b5cf6] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#00e59b]/30 blur-[120px]" />
          <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-white/20 blur-[140px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#9dffdc] backdrop-blur-md">
            <RefreshCcw className="h-4 w-4" />
            Last updated: February 22, 2026
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
            Cancellation <span className="text-[#00e59b]">Policy</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Transparent guidelines on subscription renewals, cancellations, and account management.
          </p>
        </div>
      </section>

      <main className="pt-16 pb-24 bg-white relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <div className="bg-gray-50/50 rounded-3xl p-8 mb-12 border border-gray-100 italic font-medium text-gray-700">
              This policy explains cancellation timing, renewals, refunds, and account closure for FloatX subscriptions.
            </div>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <Calendar className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">01 Subscription Cancellation</h2>
              </div>
              <p>
                You can cancel your subscription at any time directly through your account settings dashboard or by reaching out to our support team. Cancellation prevents future automatic renewals after the current billing cycle concludes.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#00e59b]/10 flex items-center justify-center shrink-0">
                  <RefreshCcw className="h-5 w-5 text-[#00e59b]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">02 Effective Date</h2>
              </div>
              <p>
                Unless otherwise required by local law, your cancellation will take effect at the end of your currently active paid term. You will retain full access to all paid features until that term expires.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <CreditCard className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">03 Refunds</h2>
              </div>
              <p>
                Subscription fees are generally non-refundable. Exceptions may be made where required by applicable law or in specific cases outlined in a separate enterprise agreement.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#00e59b]/10 flex items-center justify-center shrink-0">
                  <UserX className="h-5 w-5 text-[#00e59b]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">04 Account Deletion</h2>
              </div>
              <p>
                To permanently delete your account and associated data, please contact our support team. Deletion requests are processed in accordance with our data retention policies and the Privacy Policy.
              </p>
            </section>

            <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#8149f8]/5 to-transparent border border-[#8149f8]/10 text-center">
              <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 border border-gray-100">
                <HelpCircle className="h-7 w-7 text-[#8149f8]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Billing Questions?</h3>
              <p className="mb-8">Our finance and support teams are available to assist with any billing-related inquiries.</p>
              <a href="mailto:billing@floatx.app" className="text-lg font-bold text-[#8149f8] hover:underline">
                billing@floatx.app
              </a>
            </div>

          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
