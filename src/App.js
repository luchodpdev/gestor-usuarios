import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import './components/Input.css'
import Card from './components/Card'
import Container from './components/Container'

function App() {

  const [formulario, handleChange] = useFormulario({ name: '', lastname: '' })
 
  console.log(formulario)
  return (
    <Card>
    <Container />
      <div style={{ padding: 20}}>
        <form>
          <Input
          label='Nombre'
          name='name'
          value={formulario.name}
          onChange={handleChange}
          />
          <Input
          label='Apellido'
          name='lastname'
          value={formulario.lastname}
          onChange={handleChange}
          />
        </form>
      </div>
    </Card>
      
  )
}

export default App;
