import "./menu.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Menu() {
  const meditacao = "https://online.nib.org.br/#meditacoes";
  return (
    <div>
      <Container className="container">
        <Row className="row">
          <Col className="col">
            <Link className="link" to="/">
              Home
            </Link>
          </Col>
          <Col className="col">
            <Link className="link" to="/senib">
              SENIB
            </Link>
          </Col>
          <Col className="col">
            <Link className="link" to="/ministerios">
              Ministérios
            </Link>
          </Col>
          <Col className="col">
            <a className="link" href={meditacao}>
              Meditação
            </a>
          </Col>
          <Col className="col">
            <Link className="link" to="/gruposdeamizade">
              Grupos de Amizade
            </Link>
          </Col>
          <Col className="col">
            <Link className="link" to="/avisos">
              Avisos
            </Link>
          </Col>
          <Col className="col">
            <Link className="link" to="/ofertas">
              Ofertas
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Menu;
