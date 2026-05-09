import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Globe,
  Shield,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import { MarketingFooter, MarketingHeader } from "@/components/marketing-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | FloatX" },
      {
        name: "description",
        content:
          "Explore FloatX pricing plans for chat commerce, CRM, storefronts, automation, and team collaboration.",
      },
    ],
  }),
  component: PricingPage,
});

type BillingCycle = "monthly" | "yearly";

type Plan = {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  periodLabel: string;
  cta: string;
  highlighted?: boolean;
  limits: string[];
  unavailable?: string[];
};

const plans: Plan[] = [
  {
    name: "Free",
    description: "For early-stage teams testing a storefront, CRM, and lightweight customer workflows.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    periodLabel: "month",
    cta: "Choose Free Plan",
    limits: [
      "Website Builder",
      "Catalogue Website",
      "CRM",
      "Basic Analytics",
      "Instagram Connect",
      "Connect Google Calendar",
      "Catalogue Items: 30 products",
      "Contacts: 300",
      "Invoices: 40",
      "Orders: 50",
      "Proposals: 20",
    ],
    unavailable: [
      "Website Templates",
      "Publish Website via GitHub",
      "Payment Gateway Integration",
      "Standard Hosting",
      "Connect Domain",
      "Connect WhatsApp",
      "Team Members",
    ],
  },
  {
    name: "Starter",
    description: "For businesses launching their full storefront and starting to automate sales conversations.",
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    periodLabel: "month",
    cta: "Choose Starter Plan",
    limits: [
      "Website Builder",
      "Catalogue Website",
      "Website Templates",
      "Publish Website via GitHub",
      "Payment Gateway Integration",
      "Standard Hosting",
      "Connect Domain",
      "Connect WhatsApp",
      "CRM",
      "Basic Analytics",
      "Instagram Connect",
      "Connect Google Calendar",
      "Catalogue Items: 100",
      "Contacts: 5,000",
      "Invoices: 1,000",
      "Orders: 1,000",
      "Proposals: 1,000",
      "Team Members: 4 users",
    ],
  },
  {
    name: "Premium",
    description: "For scaling teams that need broader capacity, team access, and fewer operating limits.",
    monthlyPrice: 3999,
    yearlyPrice: 39990,
    periodLabel: "month",
    cta: "Choose Premium Plan",
    highlighted: true,
    limits: [
      "Website Builder",
      "Catalogue Website",
      "Website Templates",
      "Publish Website via GitHub",
      "Payment Gateway Integration",
      "Standard Hosting",
      "Connect Domain",
      "Connect WhatsApp",
      "CRM",
      "Basic Analytics",
      "Instagram Connect",
      "Connect Google Calendar",
      "Catalogue Items: 300",
      "Contacts: 10,000",
      "Invoices: Unlimited",
      "Orders: Unlimited",
      "Proposals: Unlimited",
      "Team Members: 6 users",
    ],
  },
];

const comparisonRows = [
  { feature: "Website builder", free: "Included", starter: "Included", premium: "Included" },
  { feature: "Catalogue site", free: "Included", starter: "Included", premium: "Included" },
  { feature: "Templates", free: "Not included", starter: "Included", premium: "Included" },
  { feature: "WhatsApp connection", free: "Not included", starter: "Included", premium: "Included" },
  { feature: "Products", free: "30", starter: "100", premium: "300" },
  { feature: "Contacts", free: "300", starter: "5,000", premium: "10,000" },
  { feature: "Invoices", free: "40", starter: "1,000", premium: "Unlimited" },
  { feature: "Orders", free: "50", starter: "1,000", premium: "Unlimited" },
  { feature: "Proposals", free: "20", starter: "1,000", premium: "Unlimited" },
  { feature: "Team seats", free: "Not included", starter: "4", premium: "6" },
];

const valuePoints = [
  {
    icon: Sparkles,
    title: "Built for chat commerce",
    body: "The pricing ladder mirrors FloatX's core motion: storefront, CRM, messaging, and business operations in one stack.",
  },
  {
    icon: Zap,
    title: "Scale without switching tools",
    body: "You keep the same platform foundations while unlocking more products, conversations, documents, and teammates.",
  },
  {
    icon: Shield,
    title: "Clear on subscription costs",
    body: "Third-party platform fees stay separate, so your FloatX subscription remains easy to forecast.",
  },
];

function formatPrice(plan: Plan, billing: BillingCycle) {
  if (billing === "yearly" && plan.yearlyPrice) {
    return {
      price: `₹${plan.yearlyPrice.toLocaleString("en-IN")}`,
      suffix: "/ Year",
      note: `Billed annually`,
    };
  }

  return {
    price: `₹${plan.monthlyPrice.toLocaleString("en-IN")}`,
    suffix: `/${plan.periodLabel}`,
    note: "Billed monthly",
  };
}

function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingHeader variant="solid" activePath="/pricing" />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2a1250] via-[#5a2ccf] to-[#8b5cf6] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#00e59b]/30 blur-[120px]" />
            <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-white/20 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#9dffdc] backdrop-blur-md">
                <Globe className="h-4 w-4" />
                Pricing built for modern chat-led businesses
              </div>
              <h1 className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Simple plans for every stage of your FloatX growth
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                Start with a solid foundation, launch faster, and scale customer conversations, storefronts, and internal operations from one platform.
              </p>

              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1.5 backdrop-blur-md">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    billing === "monthly" ? "bg-white text-[#23103f]" : "text-white/75 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    billing === "yearly" ? "bg-white text-[#23103f]" : "text-white/75 hover:text-white"
                  }`}
                >
                  Yearly
                </button>
                <span className="rounded-full bg-[#00e59b] px-3 py-1 text-xs font-bold uppercase tracking-tight text-[#062b20]">
                  Get 2 months free
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-10 pb-24 sm:-mt-16 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => {
                const display = formatPrice(plan, billing);

                return (
                  <div
                    key={plan.name}
                    className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 shadow-[0_30px_80px_rgba(29,20,54,0.08)] transition-all duration-300 hover:-translate-y-2 ${
                      plan.highlighted
                        ? "border-[#8149f8] bg-[#120a23] text-white shadow-[0_40px_100px_rgba(91,55,197,0.25)]"
                        : "border-white bg-white"
                    }`}
                  >
                    {plan.highlighted ? (
                      <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-[#00e59b] to-[#00d2ff] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#08131f]">
                        Most Popular
                      </div>
                    ) : null}

                    <div className="mb-8">
                      <h2 className={`text-3xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                        {plan.name}
                      </h2>
                      <p className={`mt-3 text-[15px] leading-7 ${plan.highlighted ? "text-white/70" : "text-gray-600"}`}>
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-end gap-2">
                        <span className={`text-5xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                          {display.price}
                        </span>
                        <span className={`pb-1 text-sm font-semibold ${plan.highlighted ? "text-white/65" : "text-gray-500"}`}>
                          {display.suffix}
                        </span>
                      </div>
                      <p className={`mt-3 text-sm ${plan.highlighted ? "text-white/60" : "text-gray-500"}`}>{display.note}</p>
                      <p className={`mt-1 text-sm ${plan.highlighted ? "text-white/60" : "text-gray-500"}`}>Taxes not included</p>
                    </div>

                    <Link to="/signup" className="mb-8">
                      <Button
                        className={`h-12 w-full rounded-xl text-[15px] font-bold transition-all ${
                          plan.highlighted
                            ? "bg-white text-[#160c2b] hover:bg-white/90"
                            : "bg-gradient-to-r from-[#8149f8] to-[#9d66ff] text-white hover:opacity-95"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>

                    <div className="space-y-4">
                      {plan.limits.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${plan.highlighted ? "bg-white/10" : "bg-primary/10"}`}>
                            <Check className={`h-3.5 w-3.5 ${plan.highlighted ? "text-[#9dffdc]" : "text-primary"}`} />
                          </div>
                          <span className={`text-sm leading-6 ${plan.highlighted ? "text-white/85" : "text-gray-700"}`}>{item}</span>
                        </div>
                      ))}
                      {plan.unavailable?.map((item) => (
                        <div key={item} className="flex items-start gap-3 opacity-80">
                          <div className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${plan.highlighted ? "bg-white/8" : "bg-gray-100"}`}>
                            <X className={`h-3.5 w-3.5 ${plan.highlighted ? "text-white/45" : "text-gray-400"}`} />
                          </div>
                          <span className={`text-sm leading-6 ${plan.highlighted ? "text-white/50" : "text-gray-400"}`}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-[2rem] border border-dashed border-[#8149f8]/20 bg-white px-8 py-7 shadow-[0_20px_50px_rgba(29,20,54,0.06)]">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">Customized Plan</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-7 text-gray-600">
                    Need higher limits, a tailored setup, or a more specific rollout? We can shape a custom package around your workflow.
                  </p>
                </div>
                <Button className="h-12 rounded-xl bg-[#120a23] px-6 text-sm font-bold text-white hover:bg-[#1d1238]">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fcfbff] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                <Sparkles className="h-4 w-4" />
                Why these plans work
              </div>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Designed to match how FloatX actually gets used
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {valuePoints.map((point) => (
                <div key={point.title} className="rounded-[1.75rem] border border-white bg-white p-8 shadow-[0_20px_50px_rgba(29,20,54,0.05)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8149f8] to-[#9d66ff] text-white shadow-lg shadow-purple-200">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-gray-900">{point.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-gray-600">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Compare plans at a glance</h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-gray-600">
                The core structure stays familiar while your limits expand as the business matures.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_rgba(29,20,54,0.05)]">
                <div className="grid grid-cols-4 bg-[#120a23] px-6 py-5 text-sm font-bold uppercase tracking-[0.16em] text-white/85">
                  <div>Capability</div>
                  <div className="text-center">Free</div>
                  <div className="text-center">Starter</div>
                  <div className="text-center">Premium</div>
                </div>
                {comparisonRows.map((row, index) => (
                  <div key={row.feature} className={`grid grid-cols-4 px-6 py-5 text-sm ${index % 2 === 0 ? "bg-white" : "bg-[#faf8ff]"}`}>
                    <div className="font-semibold text-gray-900">{row.feature}</div>
                    <div className="text-center text-gray-600">{row.free}</div>
                  <div className="text-center text-gray-600">{row.starter}</div>
                  <div className="text-center font-semibold text-primary">{row.premium}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0816] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Notes on billing and external fees</h2>
              <div className="mt-8 space-y-5 text-[15px] leading-7 text-white/72">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#00e59b]" />
                  <p>Yearly pricing reflects 2 months free compared with the same plan paid month by month.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#00e59b]" />
                  <p>External service costs like Meta or WhatsApp conversation fees and payment gateway charges are billed separately.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#00e59b]" />
                  <p>You can start on a smaller plan and move up later without changing your core FloatX setup.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#8149f8] to-[#9d66ff] p-[1px] shadow-[0_30px_80px_rgba(91,55,197,0.3)]">
              <div className="flex h-full flex-col justify-between rounded-[calc(2rem-1px)] bg-[#130c24] p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9dffdc]">Next step</p>
                  <h3 className="mt-4 text-3xl font-extrabold tracking-tight">Launch with the right plan today</h3>
                  <p className="mt-4 text-[15px] leading-7 text-white/70">
                    Pick a plan, onboard your catalog, and start turning messages into organized customer workflows.
                  </p>
                </div>
                <div className="mt-8 space-y-3">
                  <Link to="/signup">
                    <Button className="h-12 w-full rounded-xl bg-white text-sm font-bold text-[#150c29] hover:bg-white/90">
                      Start with FloatX
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="h-12 w-full rounded-xl border-white/15 bg-white/5 text-sm font-bold text-white hover:bg-white/10">
                    Talk to sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
