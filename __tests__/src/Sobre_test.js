import renderer from 'react-test-renderer';
import { render, fireEvent } from "@testing-library/react-native";
import Sobre from '../../components/Sobre'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de Snapshot', () => {
    it('Snapshot de Sobre', () => {
        const tela = renderer.create(<Sobre />).toJSON();
        expect(tela).toMatchSnapshot();
    })
})

describe("Teste de inicialização e Exibição", ()=>{
    it("Component view na Sobre", ()=>{
        const { getByText, getByTestId } = render(<Sobre />);

        const textoInicial = getByText('Bem vindo a calculadora de notas do IFRN');
        expect(textoInicial).toBeDefined();

        expect(getByText("Bem vindo a calculadora de notas do IFRN")).toBeTruthy();
        expect(getByTestId("btnview")).toBeTruthy();
    })
})
