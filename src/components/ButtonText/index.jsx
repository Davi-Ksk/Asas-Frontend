import { Container } from "./styles";

export function ButtonText({ title, isActive = false, ...rest }){
    return(
        <Container 
            id="button-text"
            type="button"
            isActive={isActive}
            {...rest}
        >
            {title}
        </Container>
    );
}