import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signin} from '../actions/userActions'
import {Link} from 'react-router-dom'
export default function Signin(props) {

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('')
    const {user} = useSelector((store)=>store.userSignIn)
    const dispatch=useDispatch();
    const redirect=props.location.search ? props.location.search.split('=')[1]: '/';
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(signin(email,password))
    }

    useEffect(()=>{
        if(user){
            props.history.push(redirect);
        }

    },[user,props.history,redirect])
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>Sign In</h1>
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter Email" required onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter Password" required onChange={e=>setPassword(e.target.value)}></input>
                </div>
            
                <div>
                    <label/>
                    <button className="primary add" type="submit">Sign In</button>
                </div>

                <div>
                    <label/>
                    <div>
                        New To Amazon? <Link to="/register">Create Account</Link>
                    </div>
                
                </div>
            
            </form>
        </div>
    )
}
