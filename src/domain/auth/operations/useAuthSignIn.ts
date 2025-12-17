import { useFeedbackService } from "@/src/infra/feedbackService/IFeedbackProvider";
import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { AuthUser } from "@supabase/supabase-js";

export function useAuthSignIn() {
  const { auth } = useRepository();
  const feedbackService = useFeedbackService();

  return useAppMutation<AuthUser, { email: string; password: string }>({
    mutateFn: ({ email, password }) => auth.singIn(email, password),
    onSuccess: (authUser) => {
      feedbackService.send({
        type: "success",
        message: `signed in: ${authUser.email}`,
      });
    },
    onError: (error) => {
      feedbackService.send({ type: "error", message: "error on sign" });
    },
  });
}
