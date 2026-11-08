
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useCurrentUser } from "@/hooks/use-auth";
import { Spinner } from "@/components/ui/spinner";

export default function AuthCallbackPage() {
  const router = useRouter();

  const {
    data: user,
    isLoading,
    isError,
    isFetched,
  } = useCurrentUser();

  useEffect(() => {
    if (!isFetched || isLoading) return;

    if (isError || !user) {
      router.replace("/login?error=session");
      return;
    }

    router.replace("/dashboard");
  }, [user, isLoading, isFetched, isError, router]);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-3">
      <Spinner className="size-6" />

      <p className="text-sm text-muted-foreground">
        Completing your CodeOrbit sign-in...
      </p>
    </div>
  );
}
