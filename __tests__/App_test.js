import { render, fireEvent } from "@testing-library/react-native";
import CalcMedioTecnico from '../components/CalcMedioTecnico'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Teste de inicialização e Exibição", ()=>{
    it("Component", ()=>{
        const { getByText, getByTestId } = render(<CalcMedioTecnico />);

        expect(getByText("Calculadora de Notas Medio/Técnico")).toBeTruthy();
        expect(getByTestId("btnIndex")).toBeTruthy();
    })
})