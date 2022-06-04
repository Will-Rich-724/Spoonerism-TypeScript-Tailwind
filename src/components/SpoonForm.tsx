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
            console.log('Case 1 consonate vowel consonate vowel')
            newFirst = lastName[0].concat(firstName.slice(1))
            newLast = firstName[0].concat(lastName.slice(1))
        } else if (fnflVowel === false && fnslVowel === false && lnflVowel === false && lnslVowel === false) {
            console.log('case 2 consonate consonate consonate consonate')
            newFirst = lastName[0].concat(lastName[1].concat(firstName.slice(2)))
            newLast = firstName[0].concat(firstName[1].concat(lastName.slice(2)))
        } else if (fnflVowel === false && fnslVowel === false && lnflVowel === false && lnslVowel === true) {
            console.log('case 3 consonate consonate consonate vowel')
            newFirst = lastName[0].concat(firstName.slice(2))
            newLast = firstName[0].concat(firstName[1].concat(lastName.slice(1)))
        } else if (fnflVowel === false && fnslVowel === false && lnflVowel === true) {
            console.log('case 4 consonate consonate vowel')
            newFirst = firstName.slice(2)
            newLast = firstName[0].concat(firstName[1].concat(lastName.slice(0)))
        } else if (fnflVowel === false && fnslVowel === true && lnflVowel === false && lnslVowel === false) {
            console.log('case 5 consonate vowel consonate consonate')
            newFirst = lastName[0].concat(lastName[1].concat(firstName.slice(1)))
            newLast = firstName[0].concat(lastName.slice(1))
        }  else if (fnflVowel === false && fnslVowel === true && lnflVowel === true) {
            console.log('case 6 consonate vowel vowel')
            newFirst = firstName.slice(1)
            newLast = firstName[0].concat(lastName.slice(0))
        } else if (fnflVowel === true && lnflVowel === false && lnslVowel === false) {
            console.log('case 7 vowel consonate consonate')
            newFirst = lastName[0].concat(lastName[1].concat(firstName.slice(0)))
            newLast = lastName.slice(2)
        } else if (fnflVowel === true && lnflVowel === false && lnslVowel === true) {
            console.log('case 8 vowel consonate vowel')
            newFirst = lastName[0].concat(firstName.slice(0))
            newLast = lastName.slice(1)
        } else if (fnflVowel === true && lnflVowel === true) {
            console.log('case 9 vowel vowel')
            newFirst = lastName[0].concat(firstName.slice(1))
            newLast = firstName[0].concat(lastName.slice(1))
        }
        

        setSpoonName(`${newFirst.toLocaleUpperCase()} ${newLast.toLocaleUpperCase()}`)
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