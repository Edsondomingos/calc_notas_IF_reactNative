import { render, fireEvent } from "@testing-library/react-native";
import CalcMedioTecnico from '../../../components/CalcMedioTecnico'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Teste de inicialização e Exibição", ()=>{
    it("Component view CalcMedio", ()=>{
        const { getByText, getByTestId } = render(<CalcMedioTecnico />);

        expect(getByText("Calculadora de Notas Medio/Técnico")).toBeTruthy();
        expect(getByTestId("btn1")).toBeTruthy();
    })
})
describe("Teste de Navegação", ()=>{
    it("Navegação botão calcular", ()=>{
        const { getByText, getByTestId } = render(<CalcMedioTecnico />);

        const botao = getByTestId("btn2");
        fireEvent.press(botao);

        expect(getByText("Calculadora de Notas Medio/Técnico")).toBeTruthy();
    })
})