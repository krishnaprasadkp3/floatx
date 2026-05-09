import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/LoginForm";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in · floatx.app" },
      {
        name: "description",
        content:
          "Sign in to floatx.app - manage your business operations smarter, faster, and in one place.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(0,229,155,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(129,73,248,0.14),_transparent_26%),linear-gradient(180deg,_#fafbff_0%,_#f6f3ff_45%,_#ffffff_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="pointer-events-none absolute left-[10%] top-24 h-36 w-36 rounded-full bg-[#00e59b]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-14 right-[10%] h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      <section className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
        <LoginForm />
      </section>
    </main>
  );
}
