import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "@/components/SignupForm";
import { LoginShowcase } from "@/components/LoginForm";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up · floatx.app" },
      {
        name: "description",
        content:
          "Create your floatx.app account - automate WhatsApp, manage leads, teams, tasks and more in one place.",
      },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
        <SignupForm />
      </section>
      <LoginShowcase />
    </main>
  );
}
