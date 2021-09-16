import styled from "styled-components";

export default function Timeline() {
    return (
        <Container>
           <h1>timeline</h1>
           <InfoPost>
                <img src="https://img.elo7.com.br/product/zoom/1CED18C/quadro-decorativo-caveira-arte-moderna-com-moldura-021-quadro-justiceiro.jpg" />
                <FormDescription>
                    <h6>O que você tem pra favoritar hoje?</h6>
                    <Form>
                        <input type="text" placeholder="http://..." required/>
                        <input type="text" placeholder="Muito irado esse link falando de #javascript" required/>
                        <button type="submit">Publicar</button>
                    </Form>
                </FormDescription>
           </InfoPost>
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 42%;
    background-color: #000;
    margin: 125px 0 0 240px;
    h1 {
        font-family: Oswald;
        font-size: 43px;
        font-weight: 700;
        line-height: 64px;
        color: #fff; 
    }
`;

const InfoPost = styled.div`
    display: flex;
    justify-content: space-around;
    height: 209px;
    width: 100%;
    margin-top: 45px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px #00000040;
    img {
        height: 50px;
        width: 50px;
        margin-top: 16px;
        border-radius: 26.5px;
    }
`;

const FormDescription = styled.div`
    height: 66px;
    width: 502px;
    margin-top: 21px;
    h6 {
        font-family: Lato;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
        margin-bottom: 10px;
        color: #707070;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column; 
    input {
        font-family: Lato;
        font-size: 15px;
        font-weight: 300;
        line-height: 18px;
        height: 30px;
        padding-left: 13px;
        border-radius: 5px;
        margin-bottom: 5px;
        border: none;
        background-color: #EFEFEF;
    }
    input:not(:first-child) {
        padding-bottom: 33px;
    }
    input::placeholder {
        color: #949494;
    }
    button {
        height: 31px;
        width: 112px;
        font-family: Lato;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        border-radius: 5px;
        background-color: #1877F2;
        color: #fff;
        border: none;
        align-self: flex-end;
    }
`;