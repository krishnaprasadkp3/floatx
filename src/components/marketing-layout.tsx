import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Bot,
  Building2,
  CheckSquare,
  ChevronDown,
  FileText,
  Globe,
  GraduationCap,
  Instagram,
  Megaphone,
  Menu,
  MessageCircle,
  Receipt,
  ShoppingCart,
  Sparkles,
  Store,
  UserCheck,
  Users,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";



export function MarketingHeader({
  variant = "overlay",
  activePath,
}: {
  variant?: "overlay" | "solid";
  activePath?: "/" | "/pricing" | "/whatsapp-automation" | "/support";
}) {
  const [isScrolled, setIsScrolled] = useState(variant === "solid");

  useEffect(() => {
    if (variant === "solid") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const isSolid = variant === "solid" || isScrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isSolid ? "border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-[80px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img 
            src={isSolid ? "images/logo_black.svg" : "images/logo_white.svg"} 
            alt="FloatX Logo" 
            className="h-7 md:h-9 w-auto"
          />
        </Link>

        <nav className="hidden h-full items-center gap-8 text-[15px] md:flex">
          <Link
            to="/#features"
            className={`transition-colors ${
              isSolid ? "font-semibold text-gray-600 hover:text-gray-900" : "font-medium text-white/90 hover:text-white"
            }`}
          >
            Features
          </Link>

          <Link
            to="/#integrations"
            className={`transition-colors ${
              isSolid ? "font-semibold text-gray-600 hover:text-gray-900" : "font-medium text-white/90 hover:text-white"
            }`}
          >
            Integrations
          </Link>

          <Link
            to="/pricing"
            className={`transition-colors ${
              activePath === "/pricing"
                ? "text-primary"
                : isSolid
                  ? "font-semibold text-gray-600 hover:text-gray-900"
                  : "font-medium text-white/90 hover:text-white"
            }`}
          >
            Pricing
          </Link>

          <Link
            to="/support"
            className={`transition-colors ${
              activePath === "/support"
                ? "text-primary"
                : isSolid
                  ? "font-semibold text-gray-600 hover:text-gray-900"
                  : "font-medium text-white/90 hover:text-white"
            }`}
          >
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/login">
            <Button
              className={`h-7 md:h-10 rounded-xl border-none px-3 md:px-6 text-[12px] md:text-[15px] font-bold shadow-none transition-all ${
                isSolid
                  ? "bg-[#00e59b] text-[#0a0a0a] hover:bg-[#00c987]"
                  : "border border-white/10 bg-[#0d1117] text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:bg-[#161b22]"
              }`}
            >
              My account
            </Button>
          </Link>
          <MobileMenu isSolid={isSolid} />
        </div>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <>
      <footer className="relative border-t border-border bg-background pt-20 pb-12 sm:pt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 xl:gap-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <div className="mb-6 flex items-center">
                <img 
                  src="images/logo_black.svg" 
                  alt="FloatX Logo" 
                  className="h-9 w-auto"
                />
              </div>
              <p className="max-w-sm text-[15px] font-medium leading-relaxed text-gray-600">
                FloatX is an all-in-one business platform for WhatsApp and Instagram automation, CRM, order and POS
                management, website builder, proposals, and digital marketing.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wide text-gray-900">Features</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">WhatsApp Automation</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Team Management</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Task Management</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Lead Management (CRM)</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Instagram Automation</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Chatbot Builder</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wide text-gray-900">Platform</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Proposal Builder</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Order Management</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">POS System</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Website Builder</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Online Classroom</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Digital Marketing Tools</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wide text-gray-900">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">About</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wide text-gray-900">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><Link to="/privacy-policy" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Terms of Service</Link></li>
                <li><Link to="/cancellation-policy" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Cancellation Policy</Link></li>
                <li><Link to="/cookie-policy" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Cookie Policy</Link></li>
                <li><a href="#" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Platform Rules</a></li>
                <li><Link to="/data-deletion-instructions" className="text-[14px] font-medium text-gray-500 transition-colors hover:text-primary">Data Deletion Instructions</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-gray-100 pt-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[14px] font-bold text-gray-900">© 2026 FloatX. All rights reserved.</p>
              <p className="mt-1 text-[13px] font-medium text-gray-500">
                A Product of <span className="font-bold text-gray-700">AdStory Communications</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-gray-500">
              <Link to="/privacy-policy" className="transition-colors hover:text-primary">Privacy Policy</Link>
              <Link to="/terms-of-service" className="transition-colors hover:text-primary">Terms of Service</Link>
              <Link to="/cancellation-policy" className="transition-colors hover:text-primary">Cancellation Policy</Link>
              <Link to="/cookie-policy" className="transition-colors hover:text-primary">Cookie Policy</Link>
              <Link to="/data-deletion-instructions" className="transition-colors hover:text-primary">Data Deletion Instructions</Link>
              <span className="font-bold text-gray-700">@FloatXBusiness</span>
            </div>
          </div>
        </div>
      </footer>

      <button className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#00e59b] text-white shadow-lg shadow-[#00e59b]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
}
