import * as S from './styles'

const Main = () => (
  //import como S para diferenciar que é um componente de estilo(Style)
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React - Boilerplate</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS, RTL e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
    <br />
    <S.Description>reproduced by: LuizFelipe25</S.Description>
  </S.Wrapper>
)

export default Main
