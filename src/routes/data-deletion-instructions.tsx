import { createFileRoute } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-layout";
import { Trash2, ShieldCheck, Mail, Database, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/data-deletion-instructions")({
  head: () => ({
    meta: [
      { title: "Data Deletion Instructions | FloatX" },
      {
        name: "description",
        content: "Find out how to request the deletion of your personal data from FloatX.",
      },
    ],
  }),
  component: DataDeletionInstructionsPage,
});

function DataDeletionInstructionsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <MarketingHeader variant="solid" activePath="/data-deletion-instructions" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a1250] via-[#5a2ccf] to-[#8b5cf6] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#00e59b]/30 blur-[120px]" />
          <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-white/20 blur-[140px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#9dffdc] backdrop-blur-md">
            <Trash2 className="h-4 w-4" />
            Control your data
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
            Data Deletion <span className="text-[#00e59b]">Instructions</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Step-by-step guide on how to request the permanent removal of your personal information.
          </p>
        </div>
      </section>

      <main className="pt-16 pb-24 bg-white relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <div className="bg-gray-50/50 rounded-3xl p-8 mb-12 border border-gray-100 italic font-medium text-gray-700">
              We respect your right to be forgotten. Follow the instructions below to initiate a data deletion request.
            </div>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <Database className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">01 Introduction</h2>
              </div>
              <p>
                As part of our commitment to your privacy and in compliance with global data protection regulations (such as GDPR), FloatX provides you with the ability to request the permanent deletion of your account and all associated personal data from our systems.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#00e59b]/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-[#00e59b]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">02 How to Request Deletion</h2>
              </div>
              <p className="mb-6">To initiate a data deletion request, please follow these steps:</p>
              <div className="space-y-4">
                {[
                  "Send an email from your registered FloatX account email address to privacy@floatx.app.",
                  "Use the subject line: 'Data Deletion Request - [Your Name/Company]'.",
                  "Include your registered phone number or account ID for verification purposes.",
                  "Once we receive your request, our team will verify your identity before proceeding."
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#8149f8] shadow-sm shrink-0 mt-0.5">{i+1}</div>
                    <p className="text-[15px] m-0">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">03 What Happens Next?</h2>
              </div>
              <ul className="space-y-3 list-none p-0">
                {[
                  "Acknowledgement: You will receive an email acknowledging your request within 48 hours.",
                  "Processing: We will purge your data from our active databases within 30 days.",
                  "Backups: Data in encrypted backups may persist for up to 90 days before being overwritten.",
                  "Confirmation: You will receive a final confirmation once the deletion is complete."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00e59b] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">04 Important Notes</h2>
              <div className="p-8 rounded-[2rem] bg-amber-50/50 border border-amber-100 text-amber-900">
                <p className="font-bold mb-2">Please be aware:</p>
                <ul className="m-0 space-y-2 text-sm">
                  <li>Data deletion is permanent and cannot be reversed.</li>
                  <li>You will lose access to all FloatX services, history, and active catalogs.</li>
                  <li>Certain transactional data may be retained for legal, tax, or accounting purposes as required by law.</li>
                </ul>
              </div>
            </section>

            <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#8149f8]/5 to-transparent border border-[#8149f8]/10 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Questions?</h3>
              <p className="mb-8">If you're unsure about the process, our support team can help.</p>
              <a href="mailto:support@floatx.app" className="text-lg font-bold text-[#8149f8] hover:underline">
                support@floatx.app
              </a>
            </div>

          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
