import './App.css'
import Counter from './components/Counter'
import ExerciseFour from './components/ExerciseFour'
import HelloWorld from './components/HelloWorld'
import ProfileIntro from './components/ProfileIntro'
import SimpleCard from './components/SimpleCard'
import fptLogo from './assets/image.png'

const universityItem = {
  title: 'About',
  description: 'This is the about section of the website.',
  imageUrl: fptLogo,
}

function App() {
  return (
    <>
      <main className="exercise-list">
        <ProfileIntro />
        <HelloWorld />
        <Counter />
        <ExerciseFour />
      </main>
      <SimpleCard item={universityItem} />
    </>
  )
}

export default App
