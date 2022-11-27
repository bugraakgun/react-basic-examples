import {useState, useEffect} from 'react'

function Form({addContact , contacts}) {
    const [form,setForm] = useState({fullname:'' , phonenumber:''});

    useEffect(() =>  {
        setForm({fullname:'' , phonenumber:''});
    },[contacts]);

    const onChangeForm = (e) => {
        setForm({...form,[e.target.name]:[e.target.value]});
    };
    const onSubmit = () => {
        if(form.fullname === '' || form.phonenumber === '') return 0;
        addContact([...contacts, form]);

    }
  return (
    <div>
        <div><input name="fullname" value={form.fullname} onChange={onChangeForm} placeholder='Fullname' /></div>
        <div><input name="phonenumber" value={form.phonenumber} onChange={onChangeForm} placeholder='Phonenumber' /></div>
        <div className='btn'><button  onClick={onSubmit}>Add</button></div>
    </div>
  )
}

export default Form