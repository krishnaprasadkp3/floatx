import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SupportChat } from "@/components/SupportChat";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <SupportChat />
    </>
  );
}
