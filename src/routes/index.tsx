import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageCircle,
  Users,
  CheckSquare,
  UserPlus,
  Instagram,
  Bot,
  FileText,
  ShoppingCart,
  CreditCard,
  Globe,
  TrendingUp,
  Star,
  CheckCircle2,
  Menu,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Sparkles,
  ArrowUp,
  LogIn,
  UserCheck,
  BookOpen,
  LayoutDashboard,
  MessageSquare,
  Zap,
  Shield,
  BarChart,
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  Mic,
  CheckCheck,
  Phone,
  Video,
  GraduationCap,
  Building2,
  Store,
  Megaphone,
  Receipt,
  Briefcase,
  Clock,
  Activity,
  Mail,
  Smartphone,
  Check,
  X,
  List,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MarketingFooter, MarketingHeader } from "@/components/marketing-layout";
import { MobileMenu } from "@/components/MobileMenu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FloatX | AI-Powered Chat Commerce Platform for Business" },
      {
        name: "description",
        content:
          "FloatX helps businesses connect with customers through WhatsApp, Instagram, and website chat with unified messaging and automation.",
      },
      { property: "og:title", content: "FloatX | AI-Powered Chat Commerce" },
      {
        property: "og:description",
        content:
          "Unified communication and automation platform that helps businesses manage, automate, and scale customer conversations.",
      },
    ],
  }),
  component: LandingPage,
});

const FEATURES = [
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "Automate responses, send alerts, and engage with customers seamlessly on WhatsApp." },
  { icon: Instagram, title: "Instagram Automation", desc: "Convert DM inquiries into sales with automated responses and integrated catalogs." },
  { icon: UserPlus, title: "Lead Management (CRM)", desc: "Track customers, manage leads, and build lasting relationships with our intelligent CRM." },
  { icon: Users, title: "Team Management", desc: "Assign conversations and collaborate with your team from a single centralized inbox." },
  { icon: Bot, title: "Chatbot Builder", desc: "Automate customer support and qualify leads 24/7 with powerful AI chatbots." },
  { icon: ShoppingCart, title: "Order Management", desc: "Handle reservations, delivery orders, and track fulfillment across all channels." },
  { icon: CreditCard, title: "POS System", desc: "Process transactions, manage billing, and keep track of your in-store sales." },
  { icon: CheckSquare, title: "Task Management", desc: "Keep your team productive by managing internal tasks and tracking progress." },
  { icon: FileText, title: "Proposal Builder", desc: "Create, send, and track professional business proposals to close deals faster." },
  { icon: Globe, title: "Website Builder", desc: "Launch your business online in minutes with our AI-powered website creation tools." },
  { icon: TrendingUp, title: "Digital Marketing Tools", desc: "Grow your audience with integrated marketing campaigns and analytics." },
];

const PRICING_PLANS = [
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
    whatsappMessage: "Hi FloatX, I'm interested in the Free Plan. Please help me get started."
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
    whatsappMessage: "Hi FloatX, I want to subscribe to the Starter Plan. Please provide more details."
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
    whatsappMessage: "Hi FloatX, I'm interested in the Premium Plan for my business. Can we discuss the setup?"
  },
];

function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "center", skipSnaps: false });

  return (
    <section id="pricing" className="bg-white py-12 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-20">
          <div className="inline-flex items-center rounded-full bg-[#00e59b]/10 px-4 py-1.5 text-sm font-bold text-[#00a36d] mb-4 sm:mb-8">
            Pricing
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-4 sm:mb-8 leading-tight">
            FloatX Pricing Plans
          </h2>
          <p className="text-[15px] sm:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-10">
            Choose the plan that fits your business. Transparent pricing, no hidden fees. Upgrade anytime.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1.5 backdrop-blur-md">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 sm:px-6 py-2 text-sm font-bold transition-all ${
                billing === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-5 sm:px-6 py-2 text-sm font-bold transition-all ${
                billing === "yearly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
            <span className="rounded-full bg-[#00e59b] px-3 py-1 text-[10px] font-extrabold uppercase tracking-tight text-[#062b20]">
              Get 2 months free
            </span>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid gap-8 grid-cols-3 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billing === "monthly" ? `₹${plan.monthlyPrice}` : `₹${plan.yearlyPrice}`;
            const suffix = billing === "monthly" ? "/ month" : "/ Year";

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlighted
                    ? "border-[#00e59b] bg-gray-900 text-white shadow-[0_40px_100px_rgba(0,229,155,0.15)]"
                    : "border-gray-100 bg-white hover:shadow-xl"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-[#00e59b] to-[#00d2ff] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#08131f]">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-2xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.name} Plan
                  </h3>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className={`text-5xl font-extrabold tracking-tight ${plan.highlighted ? "text-[#00e59b]" : "text-gray-900"}`}>
                      {price}
                    </span>
                    <span className={`text-sm font-semibold ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                      {suffix}
                    </span>
                  </div>
                  <p className={`mt-2 text-xs font-medium ${plan.highlighted ? "text-gray-500" : "text-gray-400"}`}>
                    {billing === "monthly" ? "tax not included" : "tax not included"}
                  </p>
                </div>

                <div className="mb-8 flex-1 space-y-4">
                  {plan.limits.map((limit) => (
                    <div key={limit} className="flex items-start gap-3">
                      <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlighted ? "bg-[#00e59b]/20" : "bg-emerald-50"}`}>
                        <Check className={`h-3 w-3 ${plan.highlighted ? "text-[#00e59b]" : "text-emerald-600"}`} />
                      </div>
                      <span className={`text-[14px] leading-relaxed ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>{limit}</span>
                    </div>
                  ))}
                  {plan.unavailable?.map((item) => (
                    <div key={item} className="flex items-start gap-3 opacity-50">
                      <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlighted ? "bg-white/10" : "bg-gray-100"}`}>
                        <X className={`h-3 w-3 ${plan.highlighted ? "text-white/40" : "text-gray-400"}`} />
                      </div>
                      <span className={`text-[14px] leading-relaxed ${plan.highlighted ? "text-gray-500" : "text-gray-400"}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/919495526096?text=${encodeURIComponent(plan.whatsappMessage!)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8"
                >
                  <Button
                    className={`h-14 w-full rounded-2xl text-[15px] font-bold transition-all ${
                      plan.highlighted
                        ? "bg-[#00e59b] text-[#062b20] hover:bg-[#00c987]"
                        : "bg-gray-900 text-white hover:bg-black"
                    }`}
                  >
                    Choose {plan.name} Plan
                  </Button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Carousel */}
        <div className="lg:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {PRICING_PLANS.map((plan) => {
              const price = billing === "monthly" ? `₹${plan.monthlyPrice}` : `₹${plan.yearlyPrice}`;
              const suffix = billing === "monthly" ? "/ month" : "/ Year";

              return (
                <div key={plan.name} className="flex-[0_0_85%] min-w-0 px-2 h-full py-4">
                  <div
                    className={`relative flex flex-col overflow-hidden rounded-[2rem] border p-6 h-full ${
                      plan.highlighted
                        ? "border-[#00e59b] bg-gray-900 text-white shadow-xl"
                        : "border-gray-100 bg-white"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-[#00e59b] to-[#00d2ff] px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.1em] text-[#08131f]">
                        Popular
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className={`text-xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                        {plan.name} Plan
                      </h3>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className={`text-4xl font-extrabold tracking-tight ${plan.highlighted ? "text-[#00e59b]" : "text-gray-900"}`}>
                          {price}
                        </span>
                        <span className={`text-[12px] font-semibold ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                          {suffix}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6 flex-1 space-y-3">
                      {plan.limits.map((limit) => (
                        <div key={limit} className="flex items-start gap-2">
                          <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${plan.highlighted ? "bg-[#00e59b]/20" : "bg-emerald-50"}`}>
                            <Check className={`h-2.5 w-2.5 ${plan.highlighted ? "text-[#00e59b]" : "text-emerald-600"}`} />
                          </div>
                          <span className={`text-[13px] leading-snug ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>{limit}</span>
                        </div>
                      ))}
                      {plan.unavailable?.map((item) => (
                        <div key={item} className="flex items-start gap-2 opacity-50">
                          <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${plan.highlighted ? "bg-white/10" : "bg-gray-100"}`}>
                            <X className={`h-2.5 w-2.5 ${plan.highlighted ? "text-white/40" : "text-gray-400"}`} />
                          </div>
                          <span className={`text-[13px] leading-snug ${plan.highlighted ? "text-gray-500" : "text-gray-400"}`}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <a 
                      href={`https://wa.me/919495526096?text=${encodeURIComponent(plan.whatsappMessage!)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <Button
                        className={`h-12 w-full rounded-xl text-[14px] font-bold transition-all border-none ${
                          plan.highlighted
                            ? "bg-[#00e59b] text-[#062b20] hover:bg-[#00c987]"
                            : "bg-gray-900 text-white"
                        }`}
                      >
                        Choose Plan
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const HEADER_FEATURES = [
  // Col 1
  { name: "WhatsApp Automation", icon: MessageCircle },
  { name: "Lead Management (CRM)", icon: UserCheck },
  { name: "Proposal Builder", icon: FileText },
  { name: "Catalogues", icon: BookOpen },
  { name: "Ai Product image generator", icon: Sparkles },
  { name: "Online Classroom", icon: GraduationCap },
  // Col 2
  { name: "Team Management", icon: Users },
  { name: "Instagram Automation", icon: Instagram },
  { name: "Order Management", icon: ShoppingCart },
  { name: "Business Profile", icon: Building2 },
  { name: "POS System", icon: Store },
  { name: "Digital Marketing Tools", icon: Megaphone },
  // Col 3
  { name: "Task Management", icon: CheckSquare },
  { name: "Chatbot Builder", icon: Bot },
  { name: "invoice manager", icon: Receipt },
  { name: "Virtual meet", icon: Video },
  { name: "Website Builder", icon: Globe },
];

const HEADER_INTEGRATIONS = [
  { name: "Whatsapp", icon: MessageCircle },
  { name: "Website", icon: Globe },
  { name: "Instagram", icon: Instagram },
  { name: "Business Profile", icon: Building2 },
];



function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <MarketingHeader variant="overlay" activePath="/" />
      <Hero />
      <IndustriesSection />
      <OneInboxSection />
      <Features />
      <TestimonialsSection />
      <ShowcaseSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <AdPopup />
    </div>
  );
}




const EcommerceMockup = () => (
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-full group/card transition-all duration-500">
    {/* Browser Bar */}
    <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/80"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/80"></div>
      </div>
      <div className="mx-auto h-4 w-48 bg-white rounded-md border border-gray-100 flex items-center px-2">
        <div className="h-1.5 w-full bg-gray-50 rounded-full"></div>
      </div>
    </div>
    
    <div className="p-4 flex gap-4 h-full">
      <div className="w-1/2 rounded-xl bg-gray-50 overflow-hidden relative">
        <img src="images/product/7929.jpg" className="w-full h-full object-cover" alt="Product" />
      </div>
      
      <div className="w-1/2 flex flex-col justify-center gap-3">
        <div className="space-y-1">
          <div className="h-3 w-20 bg-gray-100 rounded-full"></div>
          <h4 className="text-[15px] font-bold text-gray-900 tracking-tight">Sport Edition</h4>
        </div>
        <span className="text-[14px] font-bold text-[#8149f8]">$89.00</span>
        <div className="flex gap-1">
          {[1,2,3,4].map(i => <div key={i} className="h-2 w-2 rounded-full bg-gray-100"></div>)}
        </div>
        <button className="h-9 w-full bg-black text-white rounded-lg text-[11px] font-bold uppercase tracking-wider">
          Shop Now
        </button>
      </div>
    </div>
  </div>
);

const WhatsAppMockup = () => (
  <div className="bg-[#111b21] rounded-[2rem] shadow-2xl overflow-hidden border border-white/5 flex h-full text-white">
    {/* Sidebar */}
    <div className="w-[32%] border-r border-white/5 flex flex-col">
      <div className="p-4 bg-[#202c33] flex items-center justify-between">
        <div className="h-7 w-7 rounded-full bg-gray-400"></div>
        <div className="flex items-center gap-3 text-gray-400">
          <MessageSquare className="h-4 w-4" />
          <MoreVertical className="h-4 w-4" />
        </div>
      </div>
      
      <div className="flex flex-col">
        {[
          { name: "Juicy Co.", msg: "New order!", active: true },
          { name: "Matcha House", msg: "Delivery info" },
          { name: "Alex Johnson", msg: "Quick fix" }
        ].map((chat, i) => (
          <div key={i} className={`p-3 flex items-center gap-3 cursor-pointer ${chat.active ? "bg-[#2a3942]" : "hover:bg-[#202c33]"}`}>
            <div className={`h-8 w-8 rounded-full ${i % 2 === 0 ? "bg-green-500" : "bg-blue-500"}`}></div>
            <div className="flex-1 min-w-0">
              <span className="text-[12px] font-semibold block truncate">{chat.name}</span>
              <p className="text-[10px] text-gray-400 truncate">{chat.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Chat Area */}
    <div className="flex-1 flex flex-col bg-[#0b141a]">
      <div className="p-3 bg-[#202c33] flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-green-500"></div>
          <span className="text-[12px] font-semibold">Juicy Co.</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <Phone className="h-3.5 w-3.5" />
          <Search className="h-3.5 w-3.5" />
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col gap-3 overflow-y-auto">
        <div className="self-end max-w-[90%] bg-[#005c4b] p-3 rounded-l-xl rounded-br-xl shadow-md">
          <div className="bg-white/10 rounded-lg p-2 flex gap-3 mb-2">
            <img src="images/product/7929.jpg" className="h-10 w-10 rounded-md object-cover" alt="Order" />
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-bold">Order #8821</span>
              <span className="text-[10px] text-gray-200">$89.00</span>
            </div>
          </div>
          <button className="w-full py-1.5 bg-[#00a884] rounded-md text-[10px] font-bold">
            Confirm Order
          </button>
        </div>
      </div>
      
      <div className="p-3 bg-[#202c33] flex items-center gap-3">
        <Smile className="h-4 w-4 text-gray-400" />
        <div className="flex-1 h-8 bg-[#2a3942] rounded-md px-3 flex items-center">
          <span className="text-[12px] text-gray-400">Type message...</span>
        </div>
      </div>
    </div>
  </div>
);

const LeadsDashboardMockup = () => (
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-full text-gray-900">
    {/* Browser Bar */}
    <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/80"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/80"></div>
      </div>
      <div className="mx-auto h-4 w-48 bg-white rounded-md border border-gray-100 flex items-center px-2">
        <div className="h-1.5 w-full bg-gray-50 rounded-full"></div>
      </div>
    </div>

    <div className="flex h-full min-h-0">
      {/* Sidebar - Icons only to save space */}
      <div className="w-[50px] bg-[#0d2e24] flex flex-col py-4 items-center">
        {[LayoutDashboard, Users, UserCheck, ShoppingCart, CheckSquare].map((Icon, i) => (
          <div key={i} className={`w-full flex justify-center py-3 ${i === 2 ? "text-white bg-white/10 border-l-2 border-[#00e59b]" : "text-white/40 hover:text-white/60 transition-colors"}`}>
            <Icon className="h-4 w-4" />
          </div>
        ))}
      </div>
      
      {/* Main */}
      <div className="flex-1 bg-[#f8faf9] p-3 flex flex-col gap-3 overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="space-y-0.5">
            <h5 className="text-[11px] font-bold">Leads</h5>
            <p className="text-[8px] text-gray-400">Manage contacts</p>
          </div>
          <div className="h-6 w-14 bg-[#00e59b] rounded-md flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
            Add
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-2 px-3 border-b border-gray-50 bg-gray-50/30 flex justify-between text-[8px] font-bold text-gray-400 uppercase tracking-tighter">
            <span className="flex-1">Contact</span>
            <span className="w-16 text-center">Source</span>
            <span className="w-16 text-right hidden lg:block">Status</span>
          </div>
          {[
            { name: "John Smith", phone: "+1 974 524 4885", source: "WhatsApp", status: "follow-up" },
            { name: "Sarah Miller", phone: "+1 822 103 9920", source: "Instagram", status: "scheduled" },
            { name: "Mike Ross", phone: "+1 955 330 1284", source: "Website", status: "new" }
          ].map((lead, i) => (
            <div key={i} className="p-2 px-3 border-b border-gray-50 flex items-center justify-between gap-2 group hover:bg-gray-50/50 transition-colors">
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] font-bold text-gray-900 whitespace-nowrap">{lead.name}</span>
                <span className="text-[9px] text-gray-400 font-medium whitespace-nowrap">{lead.phone}</span>
              </div>
              <div className="w-16 flex justify-center items-center gap-1">
                <div className={`h-3.5 w-3.5 rounded-full flex items-center justify-center ${lead.source === 'WhatsApp' ? 'bg-green-100' : 'bg-blue-100'}`}>
                  {lead.source === 'WhatsApp' ? <MessageCircle className="h-2 w-2 text-green-600" /> : <Instagram className="h-2 w-2 text-blue-600" />}
                </div>
                <span className="text-[9px] font-semibold hidden md:block">{lead.source}</span>
              </div>
              <div className="w-16 hidden lg:flex items-center justify-end gap-1">
                <div className="h-1 w-1 rounded-full bg-[#00e59b]"></div>
                <span className="text-[8px] font-bold text-gray-500">{lead.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

function Hero() {
  const [activeImg, setActiveImg] = useState("images/product/7929.jpg");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);
  const thumbs = [
    "images/product/7990.jpg",
    "images/product/7993.jpg",
    "images/product/8001.jpg",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#8149f8] to-[#9d66ff] pt-24 pb-12 text-white sm:pt-28">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00e59b] blur-[120px] rounded-full"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mb-4 flex animate-fade-in justify-center" style={{ animationDelay: "50ms", animationFillMode: "both" }}>
               <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[15px] font-semibold text-[#00e59b] backdrop-blur-md shadow-sm ring-1 ring-white/5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e59b] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e59b]"></span>
                  </span>
                  Connect instantly with any business
               </div>
            </div>

            <h1 className="animate-fade-in text-balance text-5xl font-extrabold tracking-tight text-white sm:text-[86px] sm:leading-[1.05]" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
              Chat with <span className="bg-gradient-to-r from-[#00e59b] to-[#00d2ff] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,229,155,0.3)]">Business</span><br />
              the <span className="bg-gradient-to-r from-[#00e59b] to-[#00d2ff] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,229,155,0.3)]">smart</span> way
            </h1>

            <p className="mx-auto mt-4 max-w-2xl animate-fade-in text-pretty text-lg font-medium leading-relaxed text-white/80 sm:text-[20px]" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
              One app to connect with all your favorite businesses. Get support, make orders, and stay updated effortlessly.
            </p>

            <div className="mt-8 flex animate-fade-in flex-row items-center justify-center gap-3 sm:gap-6" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
              <a href="#pricing">
                <Button size="lg" className="h-10 sm:h-13 w-auto px-5 sm:w-[190px] rounded-2xl bg-white text-[13px] sm:text-[15px] font-bold text-black hover:bg-gray-100 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 border-none">
                  See plans
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsDemoModalOpen(true)}
                className="h-10 sm:h-13 w-auto px-5 sm:w-[190px] rounded-2xl border border-white/20 bg-white/5 text-[13px] sm:text-[15px] font-bold text-white backdrop-blur-md hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

          </div>

          {/* 3-Box Interactive Layout */}
          <div className="relative mx-auto mt-16 max-w-[1400px] px-4 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
            {/* Desktop View */}
            <div className="hidden lg:grid grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 h-[310px] scale-95 opacity-90 transition-all duration-500">
                <EcommerceMockup />
              </div>
              <div className="lg:col-span-4 h-[360px] z-20 -translate-y-8 transition-all duration-500 group/center">
                <WhatsAppMockup />
              </div>
              <div className="lg:col-span-4 h-[310px] scale-95 opacity-90 transition-all duration-500">
                <LeadsDashboardMockup />
              </div>
            </div>

            {/* Mobile Carousel View */}
            <div className="lg:hidden" ref={emblaRef}>
              <div className="flex">
                <div className="flex-[0_0_100%] min-w-0 px-2 h-[300px]">
                  <EcommerceMockup />
                </div>
                <div className="flex-[0_0_100%] min-w-0 px-2 h-[300px]">
                  <WhatsAppMockup />
                </div>
                <div className="flex-[0_0_100%] min-w-0 px-2 h-[300px]">
                  <LeadsDashboardMockup />
                </div>
              </div>
            </div>
          </div>
          
            {/* Decorative Elements */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#00e59b] opacity-20 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#00d2ff] opacity-20 blur-3xl pointer-events-none"></div>
          </div>
      </section>

      <Dialog open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none bg-white p-8 shadow-2xl selection:bg-[#00e59b]/20">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-extrabold text-gray-900 tracking-tight">Watch Demo</DialogTitle>
            <DialogDescription className="text-gray-500 font-medium pt-2">
              Fill in your details to watch the FloatX demo and see how it transforms your business.
            </DialogDescription>
          </DialogHeader>
          
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsDemoModalOpen(false); }}>
            <div className="space-y-2">
              <Label htmlFor="demo-name" className="text-[13px] font-bold text-gray-700 ml-1">Full Name</Label>
              <Input id="demo-name" placeholder="John Doe" className="h-12 border-gray-200 rounded-xl focus-visible:ring-[#8149f8]/20 focus-visible:border-[#8149f8]" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="demo-email" className="text-[13px] font-bold text-gray-700 ml-1">Email Address</Label>
              <Input id="demo-email" type="email" placeholder="john@company.com" className="h-12 border-gray-200 rounded-xl focus-visible:ring-[#8149f8]/20 focus-visible:border-[#8149f8]" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-whatsapp" className="text-[13px] font-bold text-gray-700 ml-1">WhatsApp Number</Label>
              <div className="flex gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="h-12 w-[100px] shrink-0 border-gray-200 rounded-xl focus:ring-[#8149f8]/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                    <SelectItem value="+91">IN +91</SelectItem>
                    <SelectItem value="+1">US +1</SelectItem>
                    <SelectItem value="+44">UK +44</SelectItem>
                    <SelectItem value="+971">AE +971</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  id="demo-whatsapp" 
                  type="tel"
                  inputMode="numeric"
                  placeholder="94955 26096" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="h-12 flex-1 border-gray-200 rounded-xl focus-visible:ring-[#8149f8]/20 focus-visible:border-[#8149f8]" 
                  required 
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-14 mt-4 rounded-xl bg-gradient-to-r from-[#8149f8] to-[#9d66ff] text-[15px] font-bold text-white shadow-lg shadow-purple-100 hover:opacity-90 transition-all">
              Watch Demo Now
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

const INDUSTRIES_DATA = [
  {
    title: "E-commerce",
    description: "Automate order updates, returns, and product recommendations 24/7.",
    image: "images/industries/ecommerce_light.png"
  },
  {
    title: "Offline Stores",
    description: "Bridge online inquiries with in-store experiences for unified customer journeys.",
    image: "images/industries/offline_light.png"
  },
  {
    title: "Delivery Business",
    description: "Real-time tracking updates and instant customer support for logistics.",
    image: "images/industries/delivery_light.png"
  },
  {
    title: "Travel & Tourism",
    description: "Engage travelers with instant booking confirmations and personalized trip recommendations.",
    image: "images/industries/travel_light.png"
  },
  {
    title: "Restaurants",
    description: "Handle reservations, menu inquiries, and delivery orders seamlessly across channels.",
    image: "images/industries/restaurants_light.png"
  }
];

function IndustriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white pt-24 pb-12 border-t border-gray-50">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-10 sm:mb-12 gap-6">
           <h2 className="text-center sm:text-left text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
             Industries We Connect
           </h2>
           <div className="flex items-center gap-3">
             <button
               onClick={scrollPrev}
               className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 shadow-sm transition-all hover:border-gray-200 hover:text-gray-900 active:scale-95"
               aria-label="Previous slide"
             >
               <ChevronLeft className="h-6 w-6" />
             </button>
             <button
               onClick={scrollNext}
               className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 shadow-sm transition-all hover:border-gray-200 hover:text-gray-900 active:scale-95"
               aria-label="Next slide"
             >
               <ChevronRight className="h-6 w-6" />
             </button>
           </div>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {INDUSTRIES_DATA.map((industry, index) => (
              <div 
                key={index} 
                className="flex-[0_0_280px] sm:flex-[0_0_340px] min-w-0 px-2 sm:px-3"
              >
                <div className="h-full rounded-2xl bg-white border border-gray-100 overflow-hidden flex flex-col group transition-all duration-500 hover:border-gray-200 hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 pt-5 flex flex-col flex-1 relative z-20">
                    <h3 className="text-[18px] font-bold text-gray-900 mb-2 tracking-wide">{industry.title}</h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed font-medium">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ONE_INBOX_CHANNELS = [
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', x: '50%', y: '10%' },
  { id: 'instagram', label: 'Instagram', icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200', x: '85%', y: '30%' },
  { id: 'website', label: 'Website', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', x: '85%', y: '70%' },
  { id: 'instore', label: 'In-Store', icon: Store, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', x: '50%', y: '90%' },
  { id: 'mobile', label: 'Mobile App', icon: Smartphone, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', x: '15%', y: '70%' },
  { id: 'email', label: 'Email', icon: Mail, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', x: '15%', y: '30%' },
];

function OneInboxSection() {
  return (
    <section id="integrations" className="bg-[#fcfcfc] pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden border-t border-gray-100 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Graphic */}
          <div className="relative aspect-square max-w-[450px] mx-auto w-full">
             <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
               {ONE_INBOX_CHANNELS.map(node => (
                 <line key={node.id} x1="50%" y1="50%" x2={node.x} y2={node.y} stroke="currentColor" strokeWidth="1.5" className="text-gray-300" strokeDasharray="4 4" />
               ))}
               {/* Center pulse rings */}
               <circle cx="50%" cy="50%" r="22%" stroke="currentColor" strokeWidth="1" className="text-primary/30" fill="none" />
               <circle cx="50%" cy="50%" r="35%" stroke="currentColor" strokeWidth="1" className="text-primary/10" fill="none" />
             </svg>
             
             {/* Center Node */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#00e59b] to-[#00d2ff] text-white shadow-[0_0_40px_rgba(0,229,155,0.4)]">
                   <div className="absolute inset-0 rounded-full animate-ping bg-[#00e59b] opacity-30"></div>
                   <MessageSquare className="h-10 w-10 fill-white/20" />
                </div>
             </div>

             {/* Peripheral Nodes */}
             {ONE_INBOX_CHANNELS.map(node => {
               const Icon = node.icon;
               return (
                 <div key={node.id} className="absolute flex flex-col items-center gap-2 z-10 bg-[#fcfcfc] p-1.5 rounded-2xl" style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${node.bg} ${node.color} ${node.border} border shadow-sm transition-transform hover:scale-110 cursor-pointer`}>
                       <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 tracking-wide">{node.label}</span>
                 </div>
               );
             })}
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 leading-tight">
              One inbox for every conversation
            </h2>
            <p className="text-lg leading-8 text-muted-foreground mb-8">
              Unified communication and automation platform that helps businesses manage, automate, and scale customer conversations across multiple channels - from a single intelligent dashboard.
            </p>
            
            <ul className="space-y-5">
              {[
                "API Integration for WhatsApp and Instagram",
                "Website customer communication",
                "Email organizer",
                "Internal platform communication"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-800">
                  <div className="flex h-2.5 w-2.5 rounded-full bg-[#00e59b] shrink-0 shadow-[0_0_8px_rgba(0,229,155,0.8)]"></div>
                  <span className="font-semibold text-[16px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-[#0b0816] pt-24 pb-32 sm:pt-32 sm:pb-48 relative overflow-hidden z-0">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0816] via-[#1a0e35] to-[#0b0816] -z-10"></div>
      
      {/* Massive Aurora Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[#8149f8] opacity-[0.15] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-[#00e59b] opacity-5 blur-[120px] rounded-full"></div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00e59b]/20 bg-[#00e59b]/10 px-4 py-1.5 text-sm font-bold text-[#00e59b] mb-6 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Capabilities
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1]">
            Everything you need <br />
            <span className="bg-gradient-to-r from-[#00e59b] via-[#00d2ff] to-[#00d2ff] bg-clip-text text-transparent">to scale faster</span>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-400 font-medium max-w-2xl mx-auto">
            FloatX is an all-in-one platform built to help small businesses grow faster with powerful automation and unified commerce.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="group relative flex flex-col rounded-2xl sm:rounded-[2rem] bg-white/[0.03] border border-white/10 p-4 sm:p-8 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-12px_rgba(129,73,248,0.3)] backdrop-blur-xl overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Card Interactive Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8149f8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-4 sm:mb-8 flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#8149f8] to-[#9d66ff] text-white shadow-xl shadow-purple-900/20 relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <f.icon className="h-5 w-5 sm:h-8 sm:w-8 stroke-[1.5]" />
              </div>
              
              <h3 className="mb-2 sm:mb-4 text-lg sm:text-2xl font-bold text-white tracking-tight relative z-10 group-hover:text-[#8149f8] transition-colors">
                {f.title}
              </h3>
              <p className="text-[12px] sm:text-[15px] leading-relaxed text-gray-400 font-medium group-hover:text-gray-300 transition-colors relative z-10 line-clamp-3 sm:line-clamp-none">
                {f.desc}
              </p>

              {/* Decorative Card Detail */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <f.icon className="h-6 w-6 sm:h-12 sm:w-12 text-[#8149f8]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  const [activeImg, setActiveImg] = useState("images/product/7929.jpg");
  const thumbs = [
    "images/product/7990.jpg",
    "images/product/7993.jpg",
    "images/product/8001.jpg",
  ];

  return (
    <section className="bg-gradient-to-br from-[#8149f8] to-[#9d66ff] py-20 sm:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00e59b] blur-[120px] rounded-full"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20">
          {/* Card Internal Header */}
          <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-10">
              <Menu className="h-6 w-6 text-gray-400 cursor-pointer" />
              <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
                <a href="#" className="hover:text-[#8149f8] transition-colors">New offers</a>
                <a href="#" className="hover:text-[#8149f8] transition-colors">Products</a>
                <a href="#" className="hover:text-[#8149f8] transition-colors">Men</a>
                <a href="#" className="hover:text-[#8149f8] transition-colors">Women</a>
                <a href="#" className="hover:text-[#8149f8] transition-colors">Children</a>
                <a href="#" className="hover:text-[#8149f8] transition-colors">Brands</a>
              </nav>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <Search className="h-6 w-6 cursor-pointer hover:text-[#8149f8]" />
              <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-[#8149f8]" />
            </div>
          </div>

          <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Thumbnails Column */}
            <div className="lg:col-span-1 flex lg:flex-col gap-4 order-2 lg:order-1">
              <div 
                className={`w-20 h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeImg === "images/product/7929.jpg" ? "border-[#8149f8]" : "border-transparent"}`}
                onClick={() => setActiveImg("images/product/7929.jpg")}
              >
                <img src="images/product/7929.jpg" className="w-full h-full object-cover" alt="thumb" />
              </div>
              {thumbs.map((img, i) => (
                <div 
                  key={i} 
                  className={`w-20 h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeImg === img ? "border-[#8149f8]" : "border-transparent"}`}
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumb" />
                </div>
              ))}
            </div>

            {/* Main Image Column */}
            <div className="lg:col-span-6 relative group order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 relative">
                <img 
                  src={activeImg} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Product" 
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-[13px] font-bold text-gray-700">5.0</span>
                </div>
                
                {/* Navigation Arrows */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center text-gray-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center text-gray-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col order-3">
              <div className="mb-6">
                <p className="text-[13px] text-blue-600 font-semibold mb-3">
                  Pay in 4 interest-free installments for orders over $50.00 with <span className="underline italic">shopPay</span>
                </p>
                <a href="#" className="text-[12px] text-gray-400 underline uppercase font-bold tracking-widest">Learn more</a>
              </div>

              <div className="mb-8">
                <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-4">Select Color</h3>
                <div className="flex items-center gap-3">
                  {["bg-[#94a3ff]", "bg-[#6b7c74]", "bg-black", "bg-[#f8b4b4]"].map((color, i) => (
                    <div key={i} className={`h-8 w-8 rounded-full ${color} cursor-pointer border-2 ${i === 0 ? "border-[#8149f8]" : "border-white shadow-sm"} hover:scale-110 transition-all`}></div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-4">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <div key={size} className={`h-10 px-5 flex items-center justify-center border rounded-lg text-[13px] font-bold cursor-pointer transition-all ${size === "S" ? "border-black text-black" : "border-gray-200 text-gray-400 hover:border-gray-400"}`}>
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-4">Quantity</h3>
                <div className="flex items-center border border-gray-200 rounded-lg w-fit h-12">
                  <button className="px-5 text-gray-400 hover:text-black">-</button>
                  <span className="w-10 text-center font-bold">1</span>
                  <button className="px-5 text-gray-400 hover:text-black">+</button>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <button className="h-16 w-full border-2 border-black rounded-xl font-bold text-black uppercase tracking-widest hover:bg-gray-50 transition-all">
                  Add to cart
                </button>
                <button className="h-16 w-full bg-black rounded-xl font-bold text-white uppercase tracking-widest hover:opacity-90 transition-all">
                  Buy it now
                </button>
              </div>

              <p className="text-[13px] leading-relaxed text-gray-500 italic mb-10">
                Celebrate the power and simplicity of the Swoosh. This warm, brushed fleece hoodie is made with some extra room through the shoulder.
              </p>

              <div className="border-t border-gray-100">
                {["Product Details", "Shipping & Returns", "Care Instructions"].map((item, i) => (
                  <div key={i} className="py-5 border-b border-gray-100 flex items-center justify-between cursor-pointer group">
                    <span className="text-[13px] font-bold text-gray-600 group-hover:text-black uppercase tracking-widest">{item}</span>
                    <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-black transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ_DATA = [
  {
    question: "What is FloatX and how can it help my business?",
    answer: "FloatX is an all-in-one customer engagement and automation platform. It helps businesses manage conversations across WhatsApp, Instagram, and Web from a single dashboard, enabling you to automate sales, support, and order management effortlessly."
  },
  {
    question: "How does the WhatsApp automation work?",
    answer: "We utilize the official WhatsApp Business API to provide secure and reliable automation. You can set up automated greeting messages, quick replies, and complex chatbot flows to handle inquiries 24/7 without manual intervention."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial on all our plans with no credit card required. This allows you to explore our full range of features and see how FloatX can transform your customer communication."
  },
  {
    question: "Can I manage multiple team members on FloatX?",
    answer: "Absolutely. Our platform is built for collaboration. You can invite team members, assign conversations to specific agents, and use internal notes to coordinate efficiently, ensuring no customer is left waiting."
  },
  {
    question: "What channels can I integrate with FloatX?",
    answer: "Currently, FloatX supports WhatsApp, Instagram DM, and Web Chat integrations. We are actively working on adding more channels like Email and other social platforms to provide a truly unified inbox experience."
  }
];

const SHOWCASE_DATA = [
  { title: "Premium E-commerce", image: "images/showcase/ecommerce.png", category: "E-commerce" },
  { title: "Boutique Showroom", image: "images/showcase/offline.png", category: "Offline Stores" },
  { title: "Organic Delivery", image: "images/showcase/delivery.png", category: "Delivery Business" },
  { title: "Luxury Travel", image: "images/showcase/travel.png", category: "Travel & Tourism" },
  { title: "Fine Dining", image: "images/showcase/restaurants.png", category: "Restaurants" },
  { title: "Luxury Real Estate", image: "images/showcase/real_estate.png", category: "Real Estate" },
  { title: "Wellness Spa", image: "images/showcase/health.png", category: "Health & Wellness" },
  { title: "E-learning Platform", image: "images/showcase/elearning.png", category: "Education" },
  { title: "Automotive Dealer", image: "images/showcase/automotive.png", category: "Automotive" },
  { title: "Tech SaaS", image: "images/showcase/tech.png", category: "SaaS" },
];

function ShowcaseSection() {
  const firstRow = SHOWCASE_DATA.slice(0, 5);
  const secondRow = SHOWCASE_DATA.slice(5, 10);

  return (
    <section id="made-with-floatx" className="bg-[#0b0816] py-12 sm:py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-[#8149f8] opacity-[0.08] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-[#00e59b] opacity-[0.05] blur-[120px] rounded-full"></div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-10 sm:mb-24">
          <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-bold text-white mb-4 sm:mb-8 backdrop-blur-md">
            Inspiration
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl mb-4 sm:mb-8 leading-tight">
            Made with FloatX
          </h2>
          <p className="text-[15px] sm:text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-10">
            Now it's your turn to succeed online, whether it's an ecommerce store, blog, portfolio, or business site.
          </p>
          <a href="#pricing" className="inline-flex items-center justify-center h-12 sm:h-14 px-8 sm:px-10 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            See plans
          </a>
        </div>

        <div className="flex flex-col gap-4 sm:gap-8">
          {/* First Row - Marquee Forward */}
          <div className="flex overflow-hidden group">
            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
              {[...firstRow, ...firstRow].map((site, i) => (
                <div 
                  key={i} 
                  className="shrink-0 w-[280px] sm:w-[450px] aspect-[16/10] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(129,73,248,0.2)] group/item"
                >
                   <img 
                     src={site.image} 
                     alt={site.title} 
                     className="h-full w-full object-cover opacity-80 group-hover/item:opacity-100 transition-opacity"
                   />
                </div>
              ))}
            </div>
          </div>
          
          {/* Second Row - Marquee Reverse */}
          <div className="flex overflow-hidden group">
            <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
              {[...secondRow, ...secondRow].map((site, i) => (
                <div 
                  key={i} 
                  className="shrink-0 w-[280px] sm:w-[450px] aspect-[16/10] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(129,73,248,0.2)] group/item"
                >
                   <img 
                     src={site.image} 
                     alt={site.title} 
                     className="h-full w-full object-cover opacity-40 group-hover/item:opacity-100 transition-opacity"
                   />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade out to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0b0816] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}


const TESTIMONIALS_DATA = [
  {
    name: "Jordi Robert",
    role: "Marketing expert",
    quote: "FloatX is the best communication platform I've ever used. The automation support is amazing and the ROI is unbeatable.",
    avatar: "images/testimonials/avatar1.png",
    tags: ["WhatsApp", "Automation"],
    icon: MessageCircle
  },
  {
    name: "Jarrott Brown",
    role: "Business owner",
    quote: "The unified inbox takes out a lot of manual work. The automation we built was spot on - I had to make only a few changes.",
    avatar: "images/testimonials/avatar2.png",
    tags: ["CRM", "Inbox", "Orders"],
    icon: UserCheck
  },
  {
    name: "Anna Franques",
    role: "Digital designer",
    quote: "I've been recommending my clients to migrate to FloatX. Everything is easy, and new features come out all the time.",
    avatar: "images/testimonials/avatar3.png",
    tags: ["Support", "Automation"],
    icon: Sparkles
  }
];

function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  return (
    <section className="bg-[#f8faf9] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center rounded-full bg-[#8149f8]/10 px-4 py-1.5 text-sm font-bold text-[#8149f8] mb-8">
            Trusted by
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
            They succeeded online - <br className="hidden sm:block" />
            now it’s your turn
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-bold text-gray-900">Excellent</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                  <Star className="h-3 w-3 fill-white text-white" />
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium underline">66,887 reviews on</span>
            <div className="flex items-center gap-1 font-bold text-gray-900">
               <Star className="h-4 w-4 fill-[#00b67a] text-[#00b67a]" />
               Trustpilot
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-10 flex flex-col h-full shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-8">
                <div className={`h-12 w-12 rounded-xl bg-[#8149f8]/10 flex items-center justify-center mb-8`}>
                   <t.icon className="h-6 w-6 text-[#8149f8]" />
                </div>
                <p className="text-[20px] font-bold text-gray-900 leading-relaxed mb-8">
                  “{t.quote}”
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {t.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 rounded-full text-[12px] font-bold text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-50" />
                  <div>
                    <h4 className="text-[15px] font-bold text-gray-900">{t.name}</h4>
                    <p className="text-[13px] text-gray-500 font-medium">{t.role}</p>
                  </div>
                </div>
                {i === 1 && (
                  <button className="flex items-center gap-2 text-[#8149f8] font-bold text-[14px] hover:underline">
                    Watch video <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Showing 2 cards */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS_DATA.map((t, i) => (
              <div key={i} className="flex-[0_0_50%] min-w-0 px-1.5">
                <div className="bg-white rounded-2xl p-4 flex flex-col h-full shadow-sm border border-gray-100">
                  <div className="mb-4">
                    <div className={`h-8 w-8 rounded-lg bg-[#8149f8]/10 flex items-center justify-center mb-4`}>
                       <t.icon className="h-4 w-4 text-[#8149f8]" />
                    </div>
                    <p className="text-[13px] font-bold text-gray-900 leading-snug mb-4 line-clamp-4">
                      “{t.quote}”
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center gap-2">
                      <img src={t.avatar} alt={t.name} className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-50" />
                      <div className="min-w-0">
                        <h4 className="text-[11px] font-bold text-gray-900 truncate">{t.name}</h4>
                        <p className="text-[10px] text-gray-500 font-medium truncate">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] sm:text-lg text-gray-600">
              Everything you need to know about the platform and how it works.
            </p>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-[#8149f8] bg-[#8149f8]/[0.02]' : 'border-gray-100 hover:border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-4 sm:p-6 text-left focus:outline-none"
                >
                  <span className={`text-base sm:text-lg font-bold ${openIndex === index ? 'text-[#8149f8]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${openIndex === index ? 'bg-[#8149f8] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  return (
    <section className="bg-background py-12 sm:py-32 -mt-px relative z-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-white p-6 sm:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12 shadow-2xl border border-gray-100">
          {/* Subtle background glow inside card */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e59b]/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-2xl relative z-10 text-center lg:text-left">
            <h3 className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#00e59b] mb-4 sm:mb-5">
              Ready to Transform
            </h3>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-[44px] leading-tight mb-4 sm:mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-[15px] sm:text-lg leading-relaxed text-gray-600 mb-0 max-w-xl mx-auto lg:mx-0">
              Join thousands of businesses already using FloatX to connect with customers and grow faster.
            </p>
          </div>
          
          <div className="w-full max-w-md relative z-10">
            <form className="space-y-4 rounded-3xl bg-gray-50/50 p-6 sm:p-8 border border-gray-100 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="cta-name" className="text-[13px] font-bold text-gray-700">Full Name</Label>
                <Input id="cta-name" placeholder="Enter your name" className="h-12 border-gray-200 focus-visible:ring-[#00e59b]/20 focus-visible:border-[#00e59b]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cta-phone" className="text-[13px] font-bold text-gray-700">WhatsApp Number</Label>
                <div className="flex gap-2">
                  <Select value={countryCode} onValueChange={setCountryCode}>
                    <SelectTrigger className="h-12 w-[100px] shrink-0 border-gray-200 focus:ring-[#00e59b]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+91">IN +91</SelectItem>
                      <SelectItem value="+1">US +1</SelectItem>
                      <SelectItem value="+44">UK +44</SelectItem>
                      <SelectItem value="+971">AE +971</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    id="cta-phone" 
                    type="tel"
                    inputMode="numeric"
                    placeholder="94955 26096" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    className="h-12 flex-1 border-gray-200 focus-visible:ring-[#00e59b]/20 focus-visible:border-[#00e59b]" 
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-14 mt-4 rounded-xl bg-[#00e59b] text-[15px] font-bold text-[#062b20] hover:bg-[#00c987] shadow-lg transition-all">
                Get Free Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <footer className="bg-background border-t border-border pt-12 pb-8 sm:pt-24 relative">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 xl:gap-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="images/logo_black.svg" 
                  alt="FloatX Logo" 
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-[15px] leading-relaxed text-gray-600 max-w-sm font-medium">
                FloatX is an all-in-one business platform for WhatsApp & Instagram automation, CRM, order and POS management, website builder, proposals, and digital marketing-built to help small businesses grow faster from mobile.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-wide text-gray-900">Features</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">WhatsApp Automation</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Team Management</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Task Management</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Lead Management (CRM)</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Instagram Automation</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Chatbot Builder</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-wide text-gray-900">Features</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Proposal Builder</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Order Management</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">POS System</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Website Builder</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Online Classroom</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Digital Marketing Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-wide text-gray-900">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-wide text-gray-900">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><Link to="/privacy-policy" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/cancellation-policy" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Cancellation Policy</Link></li>
                <li><Link to="/cookie-policy" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Cookie Policy</Link></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Platform Rules</a></li>
                <li><Link to="/data-deletion-instructions" className="text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">Data Deletion Instructions</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 border-t border-gray-100 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[14px] font-bold text-gray-900">© 2026 FloatX. All rights reserved.</p>
              <p className="text-[13px] text-gray-500 mt-1 font-medium">A Product of <span className="font-bold text-gray-700">AdStory Communications</span></p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-gray-500">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/cancellation-policy" className="hover:text-primary transition-colors">Cancellation Policy</Link>
              <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
              <Link to="/data-deletion-instructions" className="hover:text-primary transition-colors">Data Deletion Instructions</Link>
              <span className="font-bold text-gray-700">@FloatXBusiness</span>
            </div>
          </div>
        </div>
      </footer>
      

    </>
  );
}



function AdPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const showcaseSection = document.getElementById('made-with-floatx');
      if (showcaseSection) {
        const rect = showcaseSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !isClosed) {
          if (!isVisible) {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
            audio.volume = 0.4;
            audio.play().catch(() => {});
          }
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed, isVisible]);

  if (isClosed || !isVisible) return null;

  return (
    <div className="fixed bottom-10 left-10 z-[100] w-[320px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden border border-gray-100 animate-in slide-in-from-left-10 duration-500">
      <button 
        onClick={() => setIsClosed(true)}
        className="absolute top-4 right-4 z-[110] h-9 w-9 flex items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg hover:bg-white transition-all group"
      >
        <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
      </button>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src="images/promos/ecommerce_mockup.png" alt="Ecommerce Website Mockup" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-5">
           <span className="px-3 py-1 bg-[#00e59b] text-[#062b20] text-[10px] font-extrabold rounded-full uppercase tracking-wider">Limited Offer</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-1 mb-3">
          <p className="text-[11px] font-bold text-[#00b87a] uppercase tracking-[0.15em]">Limited Time Flash Deal</p>
          <h4 className="text-[22px] font-black text-gray-900 leading-tight">
            Get your automated website for <span className="relative inline-block px-2.5 py-0.5 ml-1 text-white bg-[#00b87a] rounded-xl rotate-[-2deg] shadow-[0_8px_20px_rgba(0,184,122,0.3)]">₹2000</span>
          </h4>
        </div>
        <p className="text-[14px] text-gray-500 font-medium mb-6 leading-relaxed">
          Full e-commerce setup with WhatsApp automation & business tools.
        </p>
        <a href="https://wa.me/919495526096?text=I'm interested in the INR 2000 automated website offer." target="_blank" rel="noopener noreferrer">
          <Button className="w-full h-12 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all">Claim Offer Now</Button>
        </a>
      </div>
    </div>
  );
}
