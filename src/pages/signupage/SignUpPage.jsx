import { useState } from 'react';
import './signUpPage.css'


const SignUpPage = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('')


    const handleName= (e) =>{
        setName(e.target.value)
    }
    const handleEmail= (e) =>{
        setEmail(e.target.value)
    }
    const handlePlan = (e) =>{
        setPlan(e.target.value)
    }

    

    const handleSubmit = (e) =>{
        e.preventDefault()

        let usuario={
        nombre:name,
        email:email,
        plan:plan
    }
    const telefono = '+5491130069966';
    const mensaje = `Hola, quisiera inscribirme, estos son mis datos:\n ${JSON.stringify(usuario)}`;
    const url= `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

        window.location.href = url;
    };

    
    return (
        <form className='form'>
            <h4>Complete y envíe el formulario</h4>
            <div className="mb-3 item-form">
                <label htmlFor="name" className="form-label color-letra">Nombre completo</label>
                <input onChange={handleName} type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3 item-form">
                <label htmlFor="email" className="form-label color-letra">Email</label>
                <input onChange={handleEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className='item-form mb-3'>
                <label className='form-label color-letra' htmlFor="planes">Planes</label>
                <select onChange={handlePlan} className="form-select" aria-label="Default select example" id='planes'>
                    <option defaultValue>Seleccione un plan</option>
                    <option value="pase libre">Pase libre</option>
                    <option value="pase familiar">Pase familiar</option>
                    <option value="pase de jubilado">Pase de jubilado</option>
                </select>
            </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

export default SignUpPage;