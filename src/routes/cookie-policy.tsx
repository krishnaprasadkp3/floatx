import { createFileRoute } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-layout";
import { Cookie, Info, Settings, ShieldCheck, Fingerprint } from "lucide-react";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | FloatX" },
      {
        name: "description",
        content: "Learn how FloatX uses cookies and similar technologies to improve your experience.",
      },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <MarketingHeader variant="solid" activePath="/cookie-policy" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a1250] via-[#5a2ccf] to-[#8b5cf6] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#00e59b]/30 blur-[120px]" />
          <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-white/20 blur-[140px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#9dffdc] backdrop-blur-md">
            <Cookie className="h-4 w-4" />
            Last updated: February 22, 2026
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
            Cookie <span className="text-[#00e59b]">Policy</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            We use cookies to personalize content, analyze traffic, and provide a better platform experience.
          </p>
        </div>
      </section>

      <main className="pt-16 pb-24 bg-white relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <div className="bg-gray-50/50 rounded-3xl p-8 mb-12 border border-gray-100 italic font-medium text-gray-700">
              This policy provides detailed information about how and when we use cookies on our platform.
            </div>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <Info className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">01 What are Cookies?</h2>
              </div>
              <p>
                Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies and similar technologies for storing your preferences and settings, enabling you to sign-in, providing interest-based advertising, and analyzing how our services perform.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#00e59b]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-[#00e59b]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">02 Types of Cookies We Use</h2>
              </div>
              <ul className="space-y-4 list-none p-0">
                <li className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-sm m-0">Required for the platform to function properly, such as maintaining your session and security.</p>
                </li>
                <li className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-sm m-0">Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                </li>
                <li className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Preference Cookies</h4>
                  <p className="text-sm m-0">Enable the website to remember information that changes the way the site behaves or looks, like your preferred language.</p>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#8149f8]/10 flex items-center justify-center shrink-0">
                  <Settings className="h-5 w-5 text-[#8149f8]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">03 Controlling Cookies</h2>
              </div>
              <p>
                Most web browsers automatically accept cookies but provide controls that allow you to block or delete them. You can also adjust your cookie preferences through our on-site settings. Please note that disabling certain cookies may impact the functionality of our services.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#00e59b]/10 flex items-center justify-center shrink-0">
                  <Fingerprint className="h-5 w-5 text-[#00e59b]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">04 Third-Party Cookies</h2>
              </div>
              <p>
                In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
              </p>
            </section>

            <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#8149f8]/5 to-transparent border border-[#8149f8]/10 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Want more details?</h3>
              <p className="mb-8">Our privacy team can provide a full list of cookies used upon request.</p>
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
