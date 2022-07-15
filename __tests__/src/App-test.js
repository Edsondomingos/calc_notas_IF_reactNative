import renderer from 'react-test-renderer'
import App from '../../App';

describe('Teste de snapshot', () => {
    it('Snapshot de App', () => {
        const tela = renderer.create(<App />).toJSON()
        expect(tela).toMatchSnapshot()
    })    
})