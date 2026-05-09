import { createFileRoute } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-layout";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | FloatX" },
      {
        name: "description",
        content: "Learn how FloatX collects, uses, and protects your personal information.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <MarketingHeader variant="solid" activePath="/privacy-policy" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a1250] via-[#5a2ccf] to-[#8b5cf6] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#00e59b]/30 blur-[120px]" />
          <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-white/20 blur-[140px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#9dffdc] backdrop-blur-md">
            <Shield className="h-4 w-4" />
            Last updated: February 22, 2026
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
            Privacy <span className="text-[#00e59b]">Policy</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            At FloatX, your privacy is our priority. This policy explains how we handle your data with transparency and care.
          </p>
        </div>
      </section>

      <main className="pt-16 pb-24 bg-white relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <div className="bg-gray-50/50 rounded-3xl p-8 mb-12 border border-gray-100 italic font-medium text-gray-700">
              This policy explains how FloatX collects, uses, shares, and protects personal information when you use our website and services.
            </div>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">01 Introduction</h2>
              </div>
              <p>
                FloatX ("we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your choices when using our website and services.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#00e59b]/10 flex items-center justify-center shrink-0">
                  <Eye className="h-5 w-5 text-[#00e59b]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">02 Information We Collect</h2>
              </div>
              <ul className="space-y-3 list-none p-0">
                {[
                  "Account details such as your name, email address, phone number, and company name.",
                  "Usage data such as pages visited, features used, and interaction logs.",
                  "Technical data such as device type, browser, IP address, and cookies.",
                  "Communications you send to us through forms, support, or chat channels."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00e59b] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <Lock className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">03 How We Use Your Information</h2>
              </div>
              <ul className="space-y-3 list-none p-0">
                {[
                  "To provide, maintain, and improve our platform and customer experience.",
                  "To authenticate users and keep accounts secure.",
                  "To process transactions and deliver customer support.",
                  "To send service notices, product updates, and important operational messages.",
                  "To comply with legal obligations and enforce our terms."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#8149f8] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12 p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">04 Permissions (Mobile App Only)</h2>
              <p className="mb-6">The following permissions are used only in the FloatX mobile application:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Camera", desc: "Used only when the user chooses to capture or upload images." },
                  { title: "Microphone", desc: "Used only when the user records and sends voice messages." },
                  { title: "Notifications", desc: "Used to send real-time updates such as new messages and alerts." },
                  { title: "Contacts", desc: "Used to access contact list for selecting recipients. We do not store or share contacts without consent." },
                  { title: "Internet", desc: "Required to send and receive messages and sync data with our servers." }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-[15px] font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-[13px] text-gray-500 m-0">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-gray-400">These permissions are not used on the web version of FloatX.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">05 Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to understand usage, remember preferences, and improve site performance. You can control cookies through your browser settings; disabling some cookies may affect site functionality.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">06 Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share information with trusted third-party service providers who help us operate the platform (for example hosting, analytics, and support tools), under appropriate contractual and security safeguards.
              </p>
              <p>
                We may also disclose information when required by law, regulation, legal process, or to protect the rights, safety, and security of FloatX, our users, or others.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">07 Data Retention</h2>
              <p>
                We retain personal information for as long as needed to provide our services, fulfill legal and accounting obligations, resolve disputes, and enforce agreements. When data is no longer required, we delete or anonymize it according to our retention practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">08 Security</h2>
              <p>
                We apply reasonable administrative, technical, and physical safeguards to protect personal data. No system is completely secure, so we cannot guarantee absolute security of information transmitted over the internet.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">09 Your Rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal data, and to object to certain processing activities.
              </p>
              <p>
                To make a request, contact us using the details below. We may need to verify your identity before processing certain requests.
              </p>
            </section>

            <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#8149f8]/5 to-transparent border border-[#8149f8]/10 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Questions about our policy?</h3>
              <p className="mb-8">Our privacy team is here to help clarify any doubts.</p>
              <a href="mailto:privacy@floatx.app" className="text-lg font-bold text-[#8149f8] hover:underline">
                privacy@floatx.app
              </a>
            </div>

          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
