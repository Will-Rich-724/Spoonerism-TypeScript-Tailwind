import React, {useState} from 'react';
    
const SpoonForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [spoonName, setSpoonName] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'first') {
            setFirstName(e.target.value)
        } else {
            setLastName(e.target.value)
        }
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isVowel = (letter : string) => !!letter.match(/[aeiou]/i)
        const fnflVowel = isVowel(firstName[0])
        const fnslVowel = isVowel(firstName[1])
        const lnflVowel = isVowel(lastName[0])
        const lnslVowel = isVowel(lastName[1])
        let newFirst = ''
        let newLast = ''

        if (fnflVowel === false && fnslVowel === true && lnflVowel === false && lnslVowel === true) {
            console.log('Case 1')
        newFirst = lastName[0].concat(firstName.slice(1))
        newLast = firstName[0].concat(lastName.slice(1))
        }

        setSpoonName(`${newFirst} ${newLast}`)
    }

    return (
        <>
        <div>
            <h2>Spoonerize Me</h2>
            <form onSubmit={handleSubmit}>
                <label className="block">First Name
                <input type="text" id="first" onChange={handleChange}/>
                </label>
                <label className="block">Last Name
                <input type="text" id="last" onChange={handleChange}/>
                </label>
                <button type="submit">Spoonerize</button>
            </form>
            <h2>{spoonName ? spoonName : null}</h2>
        </div>
        </>
    )
}

export default SpoonForm