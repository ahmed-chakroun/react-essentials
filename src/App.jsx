import { useState } from 'react'
import componentsImg from "./assets/components.png"
import propsImg from "./assets/config.png"
import jsxImg from "./assets/jsx-ui.png"
import stateImg from "./assets/state-mgmt.png"
import Header from './component/header'
import CoreConcept from './component/coreConcept'
import TabButton from './component/tabButton'
import {EXAMPLES} from './data.js'
function App() {
  const coreConcept=[
    {
        image: componentsImg,
        title: 'Components',
        description:
          'The core UI building block - compose the user interface by combining multiple components.',
      },
      {
        image: jsxImg,
        title: 'JSX',
        description:
          'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
      },
      {
        image: propsImg,
        title: 'Props',
        description:
          'Make components configurable (and therefore reusable) by passing input data to them.',
      },
      {
        image: stateImg,
        title: 'State',
        description:
          'React-managed data which, when changed, causes the component to re-render & the UI to update.',
      }
  ]
  const [selectedTopic,setSelectedTopic]=useState()
  function handleselect(selectButton ){
   setSelectedTopic(selectButton)
  }
  return (
    <div>    
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept
            coreConcept={coreConcept}
          />
          
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleselect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleselect('jsx')}>jsx</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleselect('props')}>props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleselect('state')}>state</TabButton>
          </menu>
        
        {!selectedTopic ?<p>please select an topic</p>: (<div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
         <p>{EXAMPLES[selectedTopic].description}</p>
         <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>  
         </pre>
        </div>)} 
         
        </section>
      </main>
    </div>
  );
}

export default App;
