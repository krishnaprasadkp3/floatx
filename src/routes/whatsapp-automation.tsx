import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  PhoneCall,
  Play,
  Rocket,
  Send,
  Shield,
  UserRoundPlus,
  Workflow,
} from "lucide-react";

import { MarketingFooter, MarketingHeader } from "@/components/marketing-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/whatsapp-automation")({
  head: () => ({
    meta: [
      { title: "WhatsApp Automation | FloatX" },
      {
        name: "description",
        content:
          "Automate WhatsApp replies, lead capture, order updates, and team handoff with FloatX's WhatsApp Automation workflows.",
      },
    ],
  }),
  component: WhatsAppAutomationPage,
});

const automationBlocks = [
  {
    step: "1",
    title: "Instant WhatsApp reply automation",
    body: "Answer common customer questions instantly, trigger keyword flows, and keep your team free for high-intent buyers.",
    bullets: [
      "Auto answers for price, delivery, stock, location, and working hours",
      "Keyword-based flows for catalog, offer, track, and support intents",
      "Welcome messages and after-hours responses",
      "Human handoff when the conversation needs an agent",
    ],
    icon: MessageCircle,
  },
  {
    step: "2",
    title: "Lead capture straight from chat",
    body: "Turn incoming WhatsApp conversations into structured leads without making the customer repeat themselves.",
    bullets: [
      "Capture name, phone, city, and requirement in the same thread",
      "Auto-create CRM records from new inquiries",
      "Route leads to pipeline stages for follow-up",
      "Assign conversations to the right teammate automatically",
    ],
    icon: UserRoundPlus,
  },
  {
    step: "3",
    title: "Shared inbox and team workflow",
    body: "Manage WhatsApp at scale with one collaborative inbox for multiple agents, notes, and status tracking.",
    bullets: [
      "One shared workspace for sales, support, and operations",
      "Conversation assignment and internal notes",
      "Open, pending, and resolved status handling",
      "Escalate from automation to manual support cleanly",
    ],
    icon: Workflow,
  },
];

const useCases = [
  {
    title: "Ecommerce and D2C",
    examples: [
      "Customer asks “price?” and instantly receives product details plus a buy link",
      "Order tracking flow asks for order ID and returns delivery status",
      "COD and shipping questions are answered automatically before checkout",
    ],
  },
  {
    title: "Offline stores",
    examples: [
      "Send stock availability, shop directions, and opening hours in seconds",
      "Capture reservation requests and assign them to store staff",
      "Convert missed calls or inquiry campaigns into WhatsApp follow-up flows",
    ],
  },
  {
    title: "Service businesses",
    examples: [
      "Automate consultation booking, service menus, and package replies",
      "Collect lead requirements before the sales team steps in",
      "Send reminders, confirmations, and post-service follow-ups",
    ],
  },
];

const journeyCards = [
  {
    title: "Lead qualification",
    body: "Ask the right questions, enrich the lead profile, and drop it into CRM before a human touches the chat.",
    icon: UserRoundPlus,
  },
  {
    title: "Order and booking updates",
    body: "Share confirmations, payment prompts, reminders, and status updates from one repeatable flow.",
    icon: Send,
  },
  {
    title: "Sales team handoff",
    body: "Move high-intent conversations from bot to agent with full context intact so momentum is never lost.",
    icon: PhoneCall,
  },
];

const setupRequirements = [
  "A WhatsApp Business number that is ready for platform setup",
  "Access to the Meta business configuration for approvals and permissions",
  "Business goals for automation like lead capture, support, orders, or bookings",
  "A simple decision tree for when automation should hand over to a human",
];

const faqs = [
  {
    question: "What can FloatX automate on WhatsApp?",
    answer:
      "FloatX can automate common replies, keyword journeys, lead capture, order and booking updates, and team routing inside a shared WhatsApp workflow.",
  },
  {
    question: "Can conversations become CRM leads automatically?",
    answer:
      "Yes. WhatsApp inquiries can be turned into structured leads with captured fields such as name, phone, city, and requirement so your team can follow up inside CRM.",
  },
  {
    question: "Can a human take over when automation is not enough?",
    answer:
      "Yes. The flows are designed for smart handoff, so agents can jump in with context, notes, and full conversation history when needed.",
  },
  {
    question: "Is this only for ecommerce?",
    answer:
      "No. The workflows fit retail, service businesses, clinics, education, hospitality, delivery operations, and any team that handles repetitive WhatsApp inquiries.",
  },
];

function WhatsAppAutomationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingHeader variant="solid" activePath="/whatsapp-automation" />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#160a2d] via-[#44208b] to-[#8149f8] pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-8 h-64 w-64 rounded-full bg-[#00e59b]/25 blur-[110px]" />
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-white/15 blur-[130px]" />
            <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#00d2ff]/15 blur-[120px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#aafce4] backdrop-blur-md">
                <MessageCircle className="h-4 w-4" />
                Official WhatsApp workflow automation for modern teams
              </div>
              <h1 className="mt-6 max-w-3xl text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Automate WhatsApp conversations without losing the human touch
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                Capture leads, answer common questions, route chats to your team, and keep buyers moving with a WhatsApp system built for real business workflows.
              </p>
              <div className="mt-10 flex flex-row items-center gap-3 sm:gap-4">
                <Link to="/pricing">
                  <Button className="h-10 sm:h-13 rounded-2xl bg-white px-5 sm:px-7 text-[13px] sm:text-[15px] font-bold text-[#160a2d] hover:bg-white/90">
                    See plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="h-10 sm:h-13 rounded-2xl border-white/15 bg-white/5 px-5 sm:px-7 text-[13px] sm:text-[15px] font-bold text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" />
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 shadow-[0_40px_120px_rgba(10,5,20,0.35)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.6rem] bg-[#08131f]">
                  <div className="flex items-center justify-between border-b border-white/5 bg-[#101d2b] px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00e59b] text-[#07131f]">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">FloatX WhatsApp Flow</p>
                        <p className="text-xs text-white/45">Live automation preview</p>
                      </div>
                    </div>
                    <div className="rounded-full border border-[#00e59b]/20 bg-[#00e59b]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#aafce4]">
                      Active
                    </div>
                  </div>

                  <div className="space-y-4 bg-[radial-gradient(circle_at_top,_rgba(129,73,248,0.18),_transparent_40%)] px-5 py-6">
                    <div className="max-w-[82%] rounded-2xl rounded-tl-md bg-white/8 p-4 text-sm text-white/78">
                      Hi, I need pricing and delivery details for your premium package.
                    </div>
                    <div className="ml-auto max-w-[86%] rounded-2xl rounded-tr-md bg-[#00e59b] p-4 text-sm font-medium text-[#09211a]">
                      Thanks for messaging FloatX. I can share pricing, delivery options, and connect you to sales if needed.
                    </div>
                    <div className="grid gap-3 rounded-3xl border border-white/8 bg-white/[0.04] p-4">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/45">
                        <span>Automation actions</span>
                        <span>3 steps</span>
                      </div>
                      <div className="grid gap-3 md:grid-cols-3">
                        {["Capture city", "Send catalog", "Assign sales rep"].map((item) => (
                          <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-3 py-4 text-center text-sm font-semibold text-white/85">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="ml-auto max-w-[86%] rounded-2xl rounded-tr-md bg-white p-4 text-sm text-[#150d29] shadow-lg">
                      Lead created, catalog sent, and sales follow-up scheduled in one flow.
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-3xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/50">Reply speed</p>
                <p className="mt-1 text-2xl font-extrabold text-white">&lt; 5 sec</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                <Rocket className="h-4 w-4" />
                What you can automate with FloatX
              </div>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                WhatsApp automation that behaves like a sales and support system
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                The goal is not just fast replies. It is better conversion, cleaner operations, and smoother handoff across your team.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {automationBlocks.map((block) => (
                <div
                  key={block.title}
                  className="group rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_24px_70px_rgba(29,20,54,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_90px_rgba(91,55,197,0.12)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8149f8] to-[#9d66ff] text-white shadow-lg shadow-purple-200">
                      <block.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary/60">
                      Step {block.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">{block.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-gray-600">{block.body}</p>
                  <div className="mt-6 space-y-3">
                    {block.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00c987]" />
                        <p className="text-sm leading-6 text-gray-700">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fcfbff] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Keep customer journeys moving from question to conversion
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
                  FloatX helps you automate the repetitive part of the conversation while preserving the option to bring in a human when the moment matters.
                </p>
                <div className="mt-8 grid gap-4">
                  {journeyCards.map((card) => (
                    <div key={card.title} className="rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_20px_50px_rgba(29,20,54,0.05)]">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <card.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-extrabold text-gray-900">{card.title}</h3>
                          <p className="mt-2 text-[15px] leading-7 text-gray-600">{card.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.2rem] bg-[#0f0a1d] p-6 shadow-[0_34px_100px_rgba(20,10,44,0.25)]">
                <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(129,73,248,0.18),rgba(255,255,255,0.02))] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Flow snapshot</p>
                      <h3 className="mt-2 text-2xl font-extrabold">Sample automation journey</h3>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/75">Live logic</div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      "Incoming message: “Need price and delivery info”",
                      "Bot shares pricing and asks for city",
                      "CRM lead is created with requirement and channel",
                      "Catalog and payment link are delivered",
                      "Sales rep gets notified for warm lead follow-up",
                    ].map((step, index) => (
                      <div key={step} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00e59b] font-extrabold text-[#07131f]">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-6 text-white/82">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#00e59b]/10 px-4 py-2 text-sm font-bold text-[#00885f]">
                  <Send className="h-4 w-4" />
                  Examples so teams get it instantly
                </div>
                <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Where WhatsApp automation pays off first
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="rounded-[2rem] border border-gray-100 bg-[#fbfbff] p-8 shadow-[0_20px_60px_rgba(29,20,54,0.05)]">
                  <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">{useCase.title}</h3>
                  <div className="mt-6 space-y-4">
                    {useCase.examples.map((example) => (
                      <div key={example} className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#00e59b] shadow-[0_0_12px_rgba(0,229,155,0.7)]" />
                        <p className="text-[15px] leading-7 text-gray-700">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0816] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9dffdc]">Setup requirements</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                What teams usually need before going live
              </h2>
              <div className="mt-8 space-y-4">
                {setupRequirements.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00e59b]" />
                    <p className="text-[15px] leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9dffdc]">FAQ</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Common questions before launching WhatsApp automation
              </h2>
              <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className={`rounded-[1.6rem] border transition-all duration-300 ${
                      openIndex === index ? "border-[#8149f8] bg-white/[0.06]" : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="text-lg font-bold text-white">{faq.question}</span>
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                          openIndex === index ? "rotate-180 bg-[#8149f8] text-white" : "bg-white/8 text-white/65"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>
                    <div className={`overflow-hidden px-6 transition-all duration-300 ${openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"}`}>
                      <p className="text-[15px] leading-7 text-white/72">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_30px_90px_rgba(29,20,54,0.08)] sm:p-14">
              <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#00e59b]/10 blur-[120px]" />
              <div className="absolute right-0 top-0 h-[340px] w-[340px] rounded-full bg-[#8149f8]/10 blur-[120px]" />

              <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00b87a]">Ready to transform</p>
                  <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    Ready to automate WhatsApp like a real growth system?
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-gray-600">
                    Turn repetitive chats into structured workflows, capture more leads, and give your team a faster way to follow up.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link to="/pricing">
                    <Button className="h-14 rounded-xl bg-gradient-to-r from-[#00e59b] to-[#00d2ff] px-8 text-[15px] font-bold text-white hover:opacity-95">
                      See plans
                    </Button>
                  </Link>
                  <Button variant="outline" className="h-14 rounded-xl border-gray-200 bg-white px-8 text-[15px] font-bold text-gray-700 hover:bg-gray-50">
                    Book a Demo
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
