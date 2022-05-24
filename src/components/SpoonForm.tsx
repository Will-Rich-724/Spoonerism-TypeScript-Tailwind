import React, {useState} from 'react';

interface first {first: string}
interface last {last: string}
interface spoonName {spoonName: string}
    

const SpoonForm = () => {
    const [firstName, setFirstName] = useState<first | null>(null)
    const [lastName, setLastName] = useState<last | null>(null)
    const [spoonName, setSpoonName] = useState<spoonName | null>(null)

}

export default SpoonForm