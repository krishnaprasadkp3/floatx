import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, User, Building2, Phone, Mail, MessageCircle, MapPin, FileText } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FloatxLogo } from "@/components/FloatxLogo";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  company: z.string().trim().min(2, "Please enter your company name").max(100),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{6,18}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  whatsapp: z.string().trim().regex(/^[+\d][\d\s-]{6,18}$/, "Enter a valid WhatsApp number"),
  location: z.string().trim().min(2, "Please enter your location").max(120),
  description: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  whatsapp: "",
  location: "",
  description: "",
};

export function SignupForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setLoading(true);
    try {
      // Submission placeholder - wire to backend later.
      await new Promise((r) => setTimeout(r, 700));
      toast.success("Thanks! We'll be in touch shortly 🎉");
      setForm(initial);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl animate-fade-in">
      <div className="mb-8 flex flex-col items-center text-center">
        <Link to="/" className="transition-transform duration-300 hover:scale-105">
          <FloatxLogo />
        </Link>
        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">Get started for free</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tell us about your business - we'll set you up on floatx.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field id="name" label="Full name" icon={User}>
            <Input id="name" value={form.name} onChange={(e) => set("name", e.target.value)} maxLength={80} placeholder="Jane Doe" className="h-12 pl-9" required />
          </Field>
          <Field id="company" label="Company name" icon={Building2}>
            <Input id="company" value={form.company} onChange={(e) => set("company", e.target.value)} maxLength={100} placeholder="Acme Inc." className="h-12 pl-9" required />
          </Field>
          <Field id="phone" label="Phone number" icon={Phone}>
            <Input id="phone" type="tel" inputMode="tel" value={form.phone} onChange={(e) => set("phone", e.target.value.replace(/\D/g, ""))} maxLength={20} placeholder="94955 26096" className="h-12 pl-9" required />
          </Field>
          <Field id="email" label="Email" icon={Mail}>
            <Input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={255} placeholder="you@company.com" className="h-12 pl-9" required />
          </Field>
          <Field id="whatsapp" label="WhatsApp number" icon={MessageCircle}>
            <Input id="whatsapp" type="tel" inputMode="tel" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value.replace(/\D/g, ""))} maxLength={20} placeholder="98765 43210" className="h-12 pl-9" required />
          </Field>
          <Field id="location" label="Location" icon={MapPin}>
            <Input id="location" value={form.location} onChange={(e) => set("location", e.target.value)} maxLength={120} placeholder="Mumbai, India" className="h-12 pl-9" required />
          </Field>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <div className="relative">
            <FileText className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              maxLength={1000}
              placeholder="Tell us about your business and what you'd like to automate..."
              className="min-h-[110px] pl-9"
              required
            />
          </div>
          <div className="text-right text-xs text-muted-foreground">{form.description.length}/1000</div>
        </div>

        <Button type="submit" disabled={loading} className="group h-12 w-full bg-gradient-primary text-base font-semibold shadow-elegant transition-all hover:shadow-glow">
          {loading ? "Submitting..." : "Submit"}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          By continuing, you agree to our{" "}
          <a href="#" className="font-medium text-foreground hover:underline">Terms of Service</a> and{" "}
          <a href="#" className="font-medium text-foreground hover:underline">Privacy Policy</a>.
        </p>

        <div className="pt-1 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:text-primary-glow">Sign in</Link>
        </div>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  icon: Icon,
  children,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        {children}
      </div>
    </div>
  );
}
