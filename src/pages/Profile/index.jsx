import { Info } from "../../components/Info";
import { Container, ProfileWrapper } from "./styles";

export function Profile() {
  return (
    <Container>
      <ProfileWrapper>

        <img 
          src="https://github.com/davi-ksk.png"
          alt="Foto do usuário"
        />

        <Info 
          title="Nome"
          children="Davi Kraieski"
        />

        <Info 
          title="Email"
          children="davikraieski@gmail.com"
        />

        <Info 
          title="Celular"
          children="(11) 99999-9999"
        />

        <Info 
          title="CPF"
          children="111.111.111-11"
        />

      </ProfileWrapper>
    </Container>
  );
}