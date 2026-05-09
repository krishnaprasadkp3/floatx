import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare, Shield, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support | FloatX Customer Support & Enquiries" },
      {
        name: "description",
        content: "Get in touch with the FloatX support team for demos, compliance inquiries, or general support questions.",
      },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <MarketingHeader variant="solid" activePath="/support" />
      
      {/* Support Hero Banner - Redesigned to match Pricing theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a1250] via-[#5a2ccf] to-[#8b5cf6] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#00e59b]/30 blur-[120px]" />
          <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-white/20 blur-[140px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#9dffdc] backdrop-blur-md">
            <Shield className="h-4 w-4" />
            Support built for modern chat-led businesses
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
            How can we <span className="text-[#00e59b]">help you</span> today?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Get the answers you need and the support you deserve. Our team is ready to assist with any questions or enquiries.
          </p>
        </div>
      </section>

      <main className="pt-16 pb-24 bg-white relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Content */}
            <div className="space-y-12 pt-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Direct Contact
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Choose the most convenient way to reach us. Whether it's for a product demo, compliance check, or general enquiry.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="h-12 w-12 rounded-2xl bg-[#8149f8]/10 flex items-center justify-center mb-6">
                    <Mail className="h-6 w-6 text-[#8149f8]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">Response within 24 hours</p>
                  <a href="mailto:support@floatx.app" className="text-[#8149f8] font-bold hover:underline">support@floatx.app</a>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="h-12 w-12 rounded-2xl bg-[#00e59b]/10 flex items-center justify-center mb-6">
                    <Phone className="h-6 w-6 text-[#00e59b]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:+919495526096" className="text-[#00e59b] font-bold hover:underline">+91 94955 26096</a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Why reach out?</h3>
                <ul className="space-y-4">
                  {[
                    { icon: PlayCircle, text: "Personalized product demonstration" },
                    { icon: Shield, text: "Security and compliance documentation" },
                    { icon: MessageSquare, text: "General enquiries and partnership opportunities" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-600">
                      <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                         <item.icon className="h-3.5 w-3.5 text-gray-500" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#8149f8]/5 blur-[100px] rounded-full"></div>
              <div className="relative bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="h-20 w-20 rounded-full bg-[#00e59b]/10 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="h-10 w-10 text-[#00e59b]" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                    <p className="text-gray-600 mb-8">
                      Thank you for reaching out. A member of our team will get back to you shortly.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      className="bg-[#8149f8] hover:bg-[#6e3dc9] rounded-xl px-8 h-12"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Reason for contact</label>
                      <Select required>
                        <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:ring-[#8149f8] transition-all">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-gray-100">
                          <SelectItem value="demo" className="rounded-xl py-3">Watch Demo</SelectItem>
                          <SelectItem value="compliance" className="rounded-xl py-3">Compliance</SelectItem>
                          <SelectItem value="enquiry" className="rounded-xl py-3">Enquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                        <Input required placeholder="John Doe" className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:ring-[#8149f8]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Work Email</label>
                        <Input required type="email" placeholder="john@company.com" className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:ring-[#8149f8]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Company Name</label>
                      <Input required placeholder="Acme Inc." className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:ring-[#8149f8]" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">WhatsApp Number</label>
                      <div className="flex gap-2">
                        <Select value={countryCode} onValueChange={setCountryCode}>
                          <SelectTrigger className="h-14 w-[110px] shrink-0 rounded-2xl border-gray-100 bg-gray-50/50 focus:ring-[#8149f8]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-gray-100">
                            <SelectItem value="+91">IN +91</SelectItem>
                            <SelectItem value="+1">US +1</SelectItem>
                            <SelectItem value="+44">UK +44</SelectItem>
                            <SelectItem value="+971">AE +971</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input 
                          required 
                          type="tel"
                          inputMode="numeric"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                          placeholder="94955 26096" 
                          className="h-14 flex-1 rounded-2xl border-gray-100 bg-gray-50/50 focus:ring-[#8149f8]" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                      <Textarea 
                        required 
                        placeholder="Tell us how we can help..." 
                        className="min-h-[150px] rounded-[2rem] border-gray-100 bg-gray-50/50 focus:ring-[#8149f8] p-6" 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-14 bg-[#8149f8] hover:bg-[#6e3dc9] text-white font-bold text-lg rounded-2xl transition-all shadow-lg shadow-[#8149f8]/20"
                    >
                      Submit Request
                    </Button>
                    
                    <p className="text-center text-sm text-gray-400">
                      By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
