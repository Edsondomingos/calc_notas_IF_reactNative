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
    })
})
describe("Teste de Navegação", ()=>{
    it("Navegação botão calcular", ()=>{
        const { getByText, getByTestId } = render(<CalcMedioTecnico />);

        const botao = getByTestId("teste2");
        fireEvent.press(botao);

        expect(getByText("Calculadora de Notas Medio/Técnico")).toBeTruthy();
    })
})