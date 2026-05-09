import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FloatxLogo } from "@/components/FloatxLogo";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password · floatx.app" },
      {
        name: "description",
        content: "Reset your floatx.app password using your email or phone number.",
      },
    ],
  }),
  component: ForgotPasswordPage,
});

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
type Step = "request" | "verify";

function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>("request");
  const [method, setMethod] = useState<Method>("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const destination =
    method === "email" ? email.trim() : `${countryCode} ${phone.trim()}`;

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (method === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (method === "phone" && !/^\d{6,15}$/.test(phone.trim())) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("verify");
      toast.success(`OTP sent to ${destination}`);
    }, 700);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("Enter the 6-digit code");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Code verified - set your new password");
    }, 700);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md">
        <FloatxLogo />

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to sign in
        </Link>

        {step === "request" ? (
          <>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter your email or phone and we'll send you a one-time code to reset it.
            </p>

            <div className="my-6 grid grid-cols-2 gap-1 rounded-xl bg-secondary p-1">
              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  method === "email"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Mail className="h-4 w-4" /> Email
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
                <Phone className="h-4 w-4" /> Phone
              </button>
            </div>

            <form onSubmit={handleRequest} className="space-y-5">
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
                    className="h-12"
                    required
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="h-12 w-[110px] shrink-0">
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
                      className="h-12 flex-1"
                      required
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="group h-12 w-full bg-gradient-primary text-base font-semibold shadow-elegant transition-all hover:shadow-glow"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </>
        ) : (
          <>
            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
              <ShieldCheck className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Enter verification code
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              We sent a 6-digit code to{" "}
              <span className="font-semibold text-foreground">{destination}</span>
            </p>

            <form onSubmit={handleVerify} className="mt-8 space-y-6">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="h-12 w-12 text-lg" />
                    <InputOTPSlot index={1} className="h-12 w-12 text-lg" />
                    <InputOTPSlot index={2} className="h-12 w-12 text-lg" />
                    <InputOTPSlot index={3} className="h-12 w-12 text-lg" />
                    <InputOTPSlot index={4} className="h-12 w-12 text-lg" />
                    <InputOTPSlot index={5} className="h-12 w-12 text-lg" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="h-12 w-full bg-gradient-primary text-base font-semibold shadow-elegant transition-all hover:shadow-glow"
              >
                {loading ? "Verifying..." : "Verify & continue"}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Didn't get the code?{" "}
                <button
                  type="button"
                  onClick={() => {
                    toast.success(`OTP resent to ${destination}`);
                    setOtp("");
                  }}
                  className="font-semibold text-primary hover:text-primary-glow"
                >
                  Resend
                </button>
                {" · "}
                <button
                  type="button"
                  onClick={() => setStep("request")}
                  className="font-semibold text-primary hover:text-primary-glow"
                >
                  Change {method}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
