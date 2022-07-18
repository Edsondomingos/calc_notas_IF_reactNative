import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react-native";
import Home from '../../../components/Home';
import App from '../../../App'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de snapshot', () => {
    it('Snapshot da tela Home', () => {
        const tela = renderer.create(<Home />).toJSON()
        expect(tela).toMatchSnapshot()
    })    
})

describe('Teste de componentes tela Home', () => {
    it('Botão medio/tecnico', () => {
        const {getByText, getByTestId } = render(<App />)

        const titulo = getByText('Calculadora de notas')
        expect(titulo).toBeTruthy()

        const botao = getByTestId('btnTelaCalcMedio')
        fireEvent.press(botao)
        expect(getByText('Calculadora de Notas Medio/Técnico')).toBeTruthy()

        
    })
    it('Botão Superior', () => {
        const { getByText, getByTestId} = render(<App />);
    
        const textoBt = getByText('➕Superior')
        expect(textoBt).toBeTruthy()

        const botao = getByTestId("btnTelaCalcSuperior")
        fireEvent.press(botao)
        expect(getByText('Calculadora de Notas cursos Superiores')).toBeTruthy()
    })
    it('Botão Sobre', () => {
        const { getByText, getByTestId} = render(<App />);
    
        const textoBt = getByText('❕Sobre')
        expect(textoBt).toBeTruthy()

        const botao = getByTestId("btnTelaSobre")
        fireEvent.press(botao)
        expect(getByText('Bem vindo a calculadora de notas do IFRN')).toBeTruthy()
    })
})