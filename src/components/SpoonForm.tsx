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
        

        setSpoonName(`${newFirst.toUpperCase()} ${newLast.toUpperCase()}`)
    }

    return (
        <>
        <div className='f-full text-white flex-col text-center'>
            <h1 className='text-xl block'>Spoonerize Me</h1>
            <form className=''onSubmit={handleSubmit}>
                <label className="py-2 block">First Name
                <input className='block text-black' type="text" id="first" onChange={handleChange}/>
                </label>
                <label className="py-2 block">Last Name
                <input className='block text-black' type="text" id="last" onChange={handleChange}/>
                </label>
                <button className='py-2 px-4 bg-green-600 rounded' type="submit">Spoonerize</button>
            </form>
            <h2 className='py-4 text-xl'>{spoonName ? spoonName : null}</h2>
        </div>
        </>
    )
}

export default SpoonForm