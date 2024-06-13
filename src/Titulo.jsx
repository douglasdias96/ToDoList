import { useState } from "react"

// eslint-disable-next-line react/prop-types
function Titulo({ nome }) {

    
    const [verdadeiro, setVerdadeiro] = useState(false)

    const handleCheck = () =>{
        setVerdadeiro((prevState) => !prevState)
    }

    return (
        <div>
            <h1>meu nome é {nome ? nome : "coloca o nome burro"}</h1>
            {verdadeiro ?
                <p>Ola Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, dicta cumque! Ad velit corporis ipsam dolorem deleniti suscipit, omnis earum commodi distinctio reiciendis mollitia tempore voluptates tempora sapiente neque eveniet!</p> : <p></p>
            }
            <button onClick={handleCheck}>{verdadeiro ? "Esconder" : "Mostrar"}</button>
        </div>
    )
}

export default Titulo