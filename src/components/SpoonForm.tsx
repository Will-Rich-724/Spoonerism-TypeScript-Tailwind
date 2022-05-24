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
    
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {

    }

    return (
        <>
        <div>
            <h2>Spoonerize Me</h2>
            <form>
                <label className="block">First Name
                <input type="text" id="first" onChange={handleChange}/>
                </label>
                <label className="block">Last Name
                <input type="text" id="last" onChange={handleChange}/>
                </label>
                <button type="submit" onSubmit={handleSubmit}/>
            </form>
            <h2>{spoonName ? spoonName : null}</h2>
        </div>
        </>
    )
}

export default SpoonForm