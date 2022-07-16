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

describe('Teste de componente tela Home', () => {
    it('Botão Superior', () => {
        const {getByText, getByTestId } = render(<CalcSuperior />)

        const titulo = getByText('Calculadora de Notas cursos Superiores')
        expect(titulo).toBeTruthy()

    })
})