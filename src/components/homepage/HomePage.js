import CarouselComponent from "../carrousel/CarouselComponent";
import MidiasSociais from "../midiassociais/MidiasSociais";
import VersiculoHome from "../versiculoHome/VersiculoHome";
import Menu from "../menu/Menu";
import NavBar from "../navbar/NavBar";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Menu />
      <br/>
      <CarouselComponent />
      <VersiculoHome />
      <MidiasSociais />
    </div>
  );
}
