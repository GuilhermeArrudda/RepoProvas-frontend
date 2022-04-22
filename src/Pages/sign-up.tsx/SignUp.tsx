import { useState } from "react";
import Form from "../../Components/Form";
import Input from "../../Components/Input";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
		const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <Form>
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
						<Input
							label="Confirme sua sena"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
    </Form>
  );
}

export default SignUp;
