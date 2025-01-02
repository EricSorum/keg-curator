import MainForm from './components/main-form/mainform'
import { TestForm } from './components/test-form/testform'


function App() {
  return (
    <>

      <h1>Keg Curator</h1>
      <h2>Find the best local beer to serve in your bar or restaurant.</h2>
      {/* <Button variant="outline">Button</Button>
      <ExampleSelect /> */}
      <hr></hr>
      <MainForm />
      <TestForm />
    </>
  )
}

export default App
