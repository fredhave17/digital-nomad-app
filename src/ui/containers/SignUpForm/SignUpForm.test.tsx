import { renderComponent } from "@/src/test-utils/renderComponent";
import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import theme from "../../theme/theme";
import { SignUpForm } from "./SignUpForm";

describe("<SignUpForm/>", () => {
  it("should submit the form when all fields are filled in correctly", async () => {
    const onSubmitMock = jest.fn();
    renderComponent(<SignUpForm onSubmit={onSubmitMock} />);

    fireEvent.changeText(screen.getByTestId("fullname-input"), "Fred Filho");

    fireEvent.changeText(
      screen.getByTestId("email-input"),
      "lucas@coffstack.com"
    );

    fireEvent.changeText(screen.getByTestId("password-input"), "12345678");
    fireEvent.changeText(
      screen.getByTestId("confirm-password-input"),
      "12345678"
    );

    fireEvent.press(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          confirmPassword: "12345678",
          email: "lucas@coffstack.com",
          fullname: "Fred Filho",
          password: "12345678",
        }),
        undefined
      );
    });
  });

  it("should not submit form when the password and confirm password do not match", async () => {
    const onSubmitMock = jest.fn();
    renderComponent(<SignUpForm onSubmit={onSubmitMock} />);

    fireEvent.changeText(screen.getByTestId("fullname-input"), "Fred Filho");

    fireEvent.changeText(
      screen.getByTestId("email-input"),
      "lucas@coffstack.com"
    );

    fireEvent.changeText(screen.getByTestId("password-input"), "12345678");
    fireEvent.changeText(
      screen.getByTestId("confirm-password-input"),
      "another-password"
    );

    fireEvent.press(screen.getByTestId("submit-button"));

    expect(await screen.findByText("As senhas não coincidem"));

    //style test
    expect(screen.getByTestId("confirm-password-input-container")).toHaveStyle({
      borderColor: theme.colors.fbErrorSurface,
    });

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it("should not submit form when the email is invalid", async () => {
    const onSubmitMock = jest.fn();
    renderComponent(<SignUpForm onSubmit={onSubmitMock} />);

    fireEvent.changeText(screen.getByTestId("fullname-input"), "Fred Filho");

    fireEvent.changeText(screen.getByTestId("email-input"), "invalid-email");

    fireEvent.changeText(screen.getByTestId("password-input"), "12345678");
    fireEvent.changeText(
      screen.getByTestId("confirm-password-input"),
      "12345678"
    );

    fireEvent.press(screen.getByTestId("submit-button"));

    expect(await screen.findByText("E-mail inválido"));

    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
