import './App.css'
import House from './House'

function App() {

  return (
      <main>
          <div className='graph'>
              <House height={100} />
              <House height={200} />
              <House height={300} />
              <House height={400} />
              <House height={500} />
          </div>
    </main>
  )
}

export default App
