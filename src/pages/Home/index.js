import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import img from "./web-development.png";

const Home = () => {
  const history = useHistory();
  const { name } = useParams();

  const goBackPage = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>Bem vindo(a), {name}.</h2>
      <img alt="web-dev" src={img} />
      <Button variant="contained" color="primary" onClick={goBackPage}>
        Voltar
      </Button>
    </div>
  );
};

export default Home;
