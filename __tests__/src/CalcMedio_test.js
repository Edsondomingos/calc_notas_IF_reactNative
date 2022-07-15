import renderer from 'react-test-renderer';
import { render, fireEvent } from "@testing-library/react-native";
import CalcMedioTecnico from '../../components/CalcMedioTecnico'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de Snapshot', () => {
    it('Snapshot de CalcMedio', () => {
        const tela = renderer.create(<CalcMedioTecnico />).toJSON();
        expect(tela).toMatchSnapshot();
    })
})

describe("Teste de inicialização e Exibição", ()=>{
    it("Component view CalcMedio", ()=>{
        const { getByText, getByTestId } = render(<CalcMedioTecnico />);

        expect(getByText("Calculadora de Notas Medio/Técnico")).toBeTruthy();
        expect(getByTestId("teste1")).toBeTruthy();
        expect(getByTestId("btn")).toBeTruthy();
        expect(getByTestId("btn1")).toBeTruthy();
        expect(getByTestId("btn2")).toBeTruthy();
        expect(getByTestId("btn3")).toBeTruthy();
    })
})
describe("Teste de Navegação", ()=>{
    it("Navegação botão calcular", ()=>{
        const { getByText, getByTestId } = render(<CalcMedioTecnico />);

        const botao1 = getByTestId("teste2");
        fireEvent.press(botao1);

        const botao2 = getByTestId("teste3");
        fireEvent.press(botao2);

        expect(getByText("Calculadora de Notas Medio/Técnico")).toBeTruthy();
    })
})