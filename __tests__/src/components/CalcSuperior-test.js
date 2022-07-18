import renderer from 'react-test-renderer'
import { render, fireEvent } from "@testing-library/react-native";
import CalcSuperior from '../../../components/CalcSuperior';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Teste de snapshot', () => {
    it('Snapshot de tela CalcSuperior', () => {
        const tela = renderer.create(<CalcSuperior />).toJSON()
        expect(tela).toMatchSnapshot()
    })    
})

describe('Teste de componente tela cursos Superiores', () => {
    it('input N1', () => {
        const {getByText, getByTestId } = render(<CalcSuperior />)

        const titulo = getByText('N1')
        expect(titulo).toBeTruthy()


    })
    it('input N2', () => {
        const {getByText, getByTestId } = render(<CalcSuperior />)

        const titulo = getByText('N2')
        expect(titulo).toBeTruthy()

    })
    it('input final', () => {
        const {getByText, getByTestId } = render(<CalcSuperior />)

        const titulo = getByText('FINAL')
        expect(titulo).toBeTruthy()

    })
    it('botão Limpar', () => {
        const {getByText, getByTestId } = render(<CalcSuperior />)

        const titulo = getByText('Limpar')
        expect(titulo).toBeTruthy()

        const inputN1 = getByTestId('inputN1')
        const inputN2 = getByTestId('inputN2')
        const inputFinal = getByTestId('inputFinal')

        const botao = getByTestId('btnLimpar')
        fireEvent.press(botao)
        expect(inputN1.value == '').toBeDefined()
        expect(inputN2.value == '').toBeDefined()
        expect(inputFinal.value == '').toBeDefined()

    })
    it('botão Calcular', () => {
        const {getByText, getByTestId } = render(<CalcSuperior />)

        const titulo = getByText('Calcular')
        expect(titulo).toBeTruthy()

        const inputN1 = getByTestId('inputN1')
        const inputN2 = getByTestId('inputN2')
        const inputFinal = getByTestId('inputFinal')
function teste(){
            if(inputN1.value == '70'){
                inputN2.value == '53.33'
                return true
            }
            return false
        }
        const botao = getByTestId('btnCalcular')
        fireEvent.press(botao)

        

        expect(teste()).toBeTruthy()

    })
})