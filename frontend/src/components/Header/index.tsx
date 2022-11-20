import logo from "../../assets/images/logo.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="content">
        <div>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="WITERAPP" />
      </div>
    </Container>
  );
}
