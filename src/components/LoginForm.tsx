import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Zap,
  MessageSquare,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
  BarChart3,
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
import { FloatxLogo } from "@/components/FloatxLogo";
import { toast } from "sonner";

const COUNTRY_CODES = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+971", country: "AE" },
  { code: "+65", country: "SG" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+81", country: "JP" },
  { code: "+86", country: "CN" },
];

type Method = "email" | "phone";

interface LoginFormProps {
  onSubmit?: (data: { method: Method; identifier: string; password: string }) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [method, setMethod] = useState<Method>("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const identifier = method === "email" ? email.trim() : `${countryCode}${phone.trim()}`;

    if (method === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (method === "phone" && !/^\d{6,15}$/.test(phone.trim())) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      onSubmit?.({ method, identifier, password });
      toast.success("Welcome back!");
    } finally {
      setTimeout(() => setLoading(false), 600);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col items-center text-center">
        <Link to="/" className="transition-transform duration-300 hover:scale-105">
          <FloatxLogo />
        </Link>

        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to your FloatX workspace with your email or phone number.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl bg-secondary p-1">
        <button
          type="button"
          onClick={() => setMethod("email")}
          className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
            method === "email"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Mail className="h-4 w-4" />
          Email
        </button>
        <button
          type="button"
          onClick={() => setMethod("phone")}
          className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
            method === "phone"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Phone className="h-4 w-4" />
          Phone
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {method === "email" ? (
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              className="h-12 border-primary/15 focus-visible:border-primary/40 focus-visible:ring-4 focus-visible:ring-primary/10"
              required
            />
          </div>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="h-12 w-[110px] shrink-0 border-primary/15 focus:ring-4 focus:ring-primary/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRY_CODES.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.country} {c.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="94955 26096"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                maxLength={15}
                className="h-12 flex-1 border-primary/15 focus-visible:border-primary/40 focus-visible:ring-4 focus-visible:ring-primary/10"
                required
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/forgot-password"
              className="text-xs font-semibold text-primary transition-colors hover:text-primary-glow"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={128}
              className="h-12 border-primary/15 px-11 pr-11 focus-visible:border-primary/40 focus-visible:ring-4 focus-visible:ring-primary/10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="group h-12 w-full bg-gradient-primary text-base font-semibold shadow-elegant transition-all hover:shadow-glow"
        >
          {loading ? "Signing in..." : "Sign in"}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>

        <div className="text-sm text-muted-foreground">
          <span>Don't have an account? </span>
          <Link to="/signup" className="font-semibold text-primary transition-colors hover:text-primary-glow">
            Sign up
          </Link>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          By continuing, you agree to our{" "}
          <a href="#" className="font-medium text-foreground underline-offset-2 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-foreground underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}

export function LoginShowcase() {
  const features = [
    { icon: Zap, title: "Automated follow-ups", desc: "Turn routine replies into instant workflows." },
    { icon: MessageSquare, title: "Shared inbox clarity", desc: "Keep sales, support, and ops in sync." },
    { icon: Sparkles, title: "Decision-ready insights", desc: "See what needs action before the day gets noisy." },
  ];

  return (
    <aside className="relative hidden overflow-hidden border-l border-white/10 bg-[linear-gradient(160deg,#120f2f_0%,#1b1650_36%,#101933_100%)] p-8 text-white lg:flex lg:min-h-screen lg:flex-col lg:justify-between xl:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,155,0.24),transparent_24%),radial-gradient(circle_at_80%_22%,rgba(129,73,248,0.38),transparent_32%),radial-gradient(circle_at_74%_78%,rgba(0,210,255,0.20),transparent_24%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.09) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#00e59b]" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            FloatX operating system
          </span>
        </div>

        <div className="mt-8 max-w-xl">
          <h2 className="text-balance text-4xl font-bold leading-[1.02] tracking-[-0.04em] xl:text-[3.6rem]">
            One login for the side of your business that actually moves every day.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/72 xl:text-lg">
            Conversations, leads, tasks, orders, and insights stay connected in a single workflow built for fast-moving teams.
          </p>
        </div>
      </div>

      <div className="relative z-10 my-10 rounded-[2rem] border border-white/12 bg-white/8 p-5 shadow-[0_30px_90px_rgba(6,10,24,0.45)] backdrop-blur-2xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">Today</p>
            <p className="mt-1 text-lg font-semibold">Operations snapshot</p>
          </div>
          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            18% faster
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/60">Unified inbox</p>
                <p className="mt-1 text-2xl font-semibold">128 active chats</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                <MessageSquare className="h-5 w-5 text-[#7ef5d0]" />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { name: "Website leads", time: "2m ago", tone: "from-[#00e59b]/70 to-[#00d2ff]/60" },
                { name: "Order confirmations", time: "5m ago", tone: "from-primary/70 to-primary-glow/60" },
                { name: "Support escalations", time: "9m ago", tone: "from-white/35 to-white/10" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/15 px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${item.tone}`} />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-white/45">Assigned and synced</p>
                    </div>
                  </div>
                  <span className="text-xs text-white/45">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.6rem] border border-white/10 bg-black/18 p-4">
              <p className="text-sm font-medium text-white/60">Revenue pipeline</p>
              <p className="mt-2 text-3xl font-semibold">₹24.8L</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#00e59b] via-[#00d2ff] to-white" />
              </div>
              <p className="mt-2 text-xs text-white/45">72% of monthly target already covered</p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(129,73,248,0.28),rgba(0,229,155,0.16))] p-4">
              <p className="text-sm font-medium text-white/70">Automation status</p>
              <p className="mt-2 text-3xl font-semibold">96.4%</p>
              <p className="mt-2 text-xs leading-5 text-white/55">
                Response SLAs are stable across WhatsApp, Instagram, and web conversations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="grid gap-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur transition-colors hover:bg-white/10"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/18 to-white/5 ring-1 ring-white/10">
                <f.icon className="h-5 w-5 text-[#90f0d8]" />
              </div>
              <div>
                <div className="font-semibold">{f.title}</div>
                <div className="mt-1 text-sm leading-6 text-white/60">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 text-xs text-white/55">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-[#171332] bg-gradient-to-br from-[#00e59b] via-[#00d2ff] to-primary"
                style={{ opacity: 0.68 + i * 0.08 }}
              />
            ))}
          </div>
          Trusted by teams building faster customer journeys with FloatX
        </div>
      </div>
    </aside>
  );
}
