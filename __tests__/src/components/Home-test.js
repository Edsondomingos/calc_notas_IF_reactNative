import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react-native";
import Home from '../../../components/Home';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de snapshot', () => {
    it('Snapshot da tela Home', () => {
        const tela = renderer.create(<Home />).toJSON()
        expect(tela).toMatchSnapshot()
    })    
})

describe('Teste de componentes tela Home', () => {
    it('Botão medio/tecnico', () => {
        const {getByText, getByTestId } = render(<Home />)

        const titulo = getByText('Calculadora de notas')
        expect(titulo).toBeTruthy()
        // expect(titulo).toBeDefined()

        // const bt = getByTestId('btnTelaCalcMedio')
        // fireEvent.press(bt)

        // expect(getByText('Calculadora Medio')).toBeTruthy()

        
    })
    it('Botão Superior', () => {
        const { getByText, getByTestId} = render(<Home />);
    
        const botao = getByTestId("btnTelaCalcSuperior")
        fireEvent.press(botao)

        expect(getByText('Tela Dobro')).toBeTruthy()
                
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