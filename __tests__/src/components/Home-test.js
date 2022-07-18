import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react-native";
import Home from '../../../components/Home';
import App from '../../../App'
// jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de snapshot', () => {
    it('Snapshot da tela Home', () => {
        const tela = renderer.create(<Home />).toJSON()
        expect(tela).toMatchSnapshot()
    })    
})

describe('Teste de componentes tela Home', () => {
    it('Botão medio/tecnico', () => {
        const {getByText, getByTestId } = render(<App />)

        // const titulo = getByText('Calculadora de notas')
        // expect(titulo).toBeTruthy()
        // expect(titulo).toBeDefined()

        const bt = getByTestId('btnTelaCalcMedio')
        fireEvent.press(bt)

        expect(getByText('Medio')).toBeTruthy()

        
    })
    it('Botão Superior', () => {
        const { getByText, getByTestId} = render(<Home />);
    
        const textoBt = getByText('➕Superior')
        expect(textoBt).toBeTruthy()

        // const botao = getByTestId("btnTelaCalcSuperior")
        // fireEvent.press(botao)

        // expect(getByText('cursos Superiores')).toBeTruthy()
        // const botao = getByTestId("btnTelaSobre")
        // fireEvent.press(botao)

        // expect(getByText('Bem vindo')).toBeTruthy()
    })
})

// describe("Teste de Navegação", () => {
//     it('Botão medio/tecnico', () => {
    // const {getByText, getByTestId } = render(<Home />)
    // expect(titulo).toBeDefined()

    // const bt = getByTestId('btnTelaCalcMedio')
    // fireEvent.press(bt)

    // expect(getByText('Calculadora Medio')).toBeTruthy()

    
    // })
    // it('Botão Superior', () => {
    //     const { getByText, getByTestId} = render(<Home />);

    //     const botao = getByTestId("btnTelaCalcSuperior")
    //     fireEvent.press(botao)

    //     expect(getByText('Tela Dobro')).toBeTruthy()
                
    // })
// })