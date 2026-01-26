export default function CoreConcept({coreConcept}){

  return(
    <>
     {coreConcept.map((concept)=>(

  <li>
      <img src={concept.image} alt="..." />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
))}
    </>
    
    
  )
}