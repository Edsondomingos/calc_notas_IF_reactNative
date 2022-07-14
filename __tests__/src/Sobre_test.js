import { render, fireEvent } from "@testing-library/react-native";
import Sobre from '../../components/Sobre'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Teste de inicialização e Exibição", ()=>{
    it("Component view na Home", ()=>{
        const { getByText, getByTestId } = render(<Sobre />);

        expect(getByText("Bem vindo a calculadora de notas do IFRN")).toBeTruthy();
        expect(getByTestId("btnview")).toBeTruthy();
    })
})
