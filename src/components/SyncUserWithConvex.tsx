"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "../../convex/_generated/api";

function SyncUserWithConvex() {
  const { user } = useUser();
  const updateUser = useMutation(api.users.updateUser);

  useEffect(() => {
    if (!user) return;

    const syncUser = async () => {
      try {
        await updateUser({
          name: user.fullName ?? "",
          email: user.emailAddresses[0].emailAddress ?? "",
          userId: user.id,
        });
      } catch (e) {}
    };

    syncUser();
  }, [user, updateUser]);

  return null;
}

export default SyncUserWithConvex;
