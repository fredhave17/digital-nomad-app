import { useAuthSignUp } from "@/src/domain/auth/operations/useAuthSignUp";
import { Screen } from "@/src/ui/components/Screen";
import { Header } from "@/src/ui/containers/Header";
import { Logo } from "@/src/ui/containers/Logo";
import { SignUpForm } from "@/src/ui/containers/SignUpForm/SignUpForm";
import { SignUpSchema } from "@/src/ui/containers/SignUpForm/SignUpFormSchema";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const { mutate: signUp } = useAuthSignUp();

  function handleSignUp(formValues: SignUpSchema) {
    signUp({
      email: formValues.email,
      password: formValues.password,
      fullname: formValues.fullname,
    });
  }

  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Criar conta" />
        <SignUpForm onSubmit={handleSignUp} />
        <Logo />
      </SafeAreaView>
    </Screen>
  );
}
