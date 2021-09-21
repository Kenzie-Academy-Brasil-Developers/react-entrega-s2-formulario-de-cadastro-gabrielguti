import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import './styles.css'


const Login = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])",
        "Senha deve conter ao menos uma letra maiúscula, um número e um caracter especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNewUser = (data) => {
    if (data) {
      history.push(`home/${data.name}`);
    }
  };


  return (
    <div className = 'FormContainer'>
      <form className = 'FormInputsCamp' onSubmit={handleSubmit(handleNewUser)}>
        <TextField
          type="text"
          id="outlined-basicName"
          label="Nome"
          color = 'secondary'
          helperText = {errors.name?.message}
          {...register("name")}
        />

        <TextField
          type="text"
          id="outlined-basicEmail"
          label="Email"
          color = 'secondary'
          helperText = {errors.email?.message}
          {...register("email")}
        />

        <TextField
          type="password"
          id="outlined-basicPassword"
          label="Senha"
          color = 'secondary'
          helperText = {errors.password?.message}
          {...register("password")}
        />

        <TextField
          type="password"
          label="Confirmar senha"
          color = 'secondary'
          id="outlined-basicPassConfirm"
          helperText = {errors.passwordConfirm?.message}
          {...register("passwordConfirm")}
        />
        <Button 
        type="submit"
        variant = 'contained'
        color = 'secondary'
        >Entrar</Button>
      </form>
      
    </div>
  );
};

export default Login;
