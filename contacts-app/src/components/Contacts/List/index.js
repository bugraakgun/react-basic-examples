import {useState} from 'react'

function List({contacts}) {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((e) => {
        return Object.keys(e).some((key) => 
            e[key].toString().toLowerCase().includes(filterText.toLowerCase())
        )
    });
  return (
    <div>
        <input 
            placeholder='Filter Contact' 
            value={filterText} 
            onChange={(e) =>setFilterText(e.target.value) } />
        <ul className='list'>
            {filtered.map((e,i) => (
            <li key={i}>
                <span>{e.fullname}</span>
                <span>{e.phonenumber}</span>
                
            </li>
            ))}
        </ul>
    </div>
  )
}

export default List