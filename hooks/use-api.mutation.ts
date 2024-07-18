import { useMutation } from "convex/react";
import { useState } from "react";

export const useApiMutation = (mutationFn: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFn);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  };

  return { mutate, pending };
};
