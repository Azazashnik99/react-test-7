import { useState } from "react";


function Heroes(){

    const [names, setNames] = useState([
        "Шерлок Холмс", 
        "Доктор Ватсон", 
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ]);

    const handlerDelete = (index) => {
        const idNames = names.filter((_,id) => {
            return id !== index
        });
        setNames(idNames)
    }

    return(
        <ul>
            {
                names.map((name,id) => (
                    <li key={id} 
                    onClick={() => handlerDelete(id)}>
                        {name}
                    </li>
                ))
            }
        </ul>
    )
}

export default Heroes;