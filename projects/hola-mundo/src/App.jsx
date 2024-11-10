import './App.css'
import TwitterFollowCard from './TwitterFollowCard';
const App = ()=>{
return(
    <section className='App'>
    <h2>Twitter card</h2>
    <TwitterFollowCard name="Luc Avi Lop">
        luccianoo
    </TwitterFollowCard>
    <TwitterFollowCard name="Juan Perez">
        Juan    
    </TwitterFollowCard>
    <TwitterFollowCard name="Juanita Pérez">
        Joan
    </TwitterFollowCard>
    </section>
)
}

export default App;