import { Link } from "@tanstack/react-router";
import { 
  Menu, 
  ChevronRight, 
  MessageCircle, 
  Instagram, 
  UserCheck, 
  FileText, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Users, 
  ShoppingCart, 
  Building2, 
  Store, 
  Megaphone, 
  CheckSquare, 
  Bot, 
  Receipt, 
  Video, 
  Globe 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



export function MobileMenu({ isSolid }: { isSolid: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden outline-none">
          <Menu className={`h-6 w-6 ${isSolid ? "text-gray-900" : "text-white"}`} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-none bg-white flex flex-col">
        <SheetHeader className="p-6 border-b border-gray-50 shrink-0">
          <SheetTitle className="flex items-center">
            <img src="images/logo_black.svg" alt="FloatX" className="h-7 w-auto" />
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col py-2">
            <Link
              to="/#features"
              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[15px] font-bold text-gray-700 group-hover:text-gray-900">
                Features
              </span>
            </Link>

            <Link
              to="/#integrations"
              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[15px] font-bold text-gray-700 group-hover:text-gray-900">
                Integrations
              </span>
            </Link>

            <Link
              to="/pricing"
              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[15px] font-bold text-gray-700 group-hover:text-gray-900">
                Pricing
              </span>
              <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-primary transition-colors" />
            </Link>

            <Link
              to="/support"
              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[15px] font-bold text-gray-700 group-hover:text-gray-900">
                Support
              </span>
              <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        <div className="p-6 border-t border-gray-50 bg-gray-50/50 shrink-0">
          <Link to="/login">
            <Button className="w-full h-12 rounded-xl bg-[#00e59b] text-[#0a0a0a] font-bold hover:bg-[#00c987] shadow-lg shadow-[#00e59b]/20">
              My account
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
