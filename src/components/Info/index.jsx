import { Container,  InfoBox } from "./styles";

export function Info({ title, children }){
    return (
        <Container>
            <span>{title}</span>
            <InfoBox>
              {children}
            </InfoBox>
        </Container>
    )
}