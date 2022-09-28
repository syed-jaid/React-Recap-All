import React from 'react';
import { Link } from 'react-router-dom';
import '../Reuseabale-components/Reuseable.css';
const Signup = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className="card sm:w-96 bg-base-100 drop-shadow-2xl">
                            <div className="card-body">
                                <Link to='/login'><h2 className="card-title text-[32px] mt-10 mb-2 mouse">Log In !</h2></Link>
                                <h2 className="card-title text-[32px] mb-10 text-[#138ccb] mouse">Sign Up !</h2>
                                <input type="name" placeholder="Enter Name" className="input input-bordered rounded-full w-full mb-2 " />
                                <input type="email" placeholder="Enter Email" className="input input-bordered rounded-full w-full mb-2 " />
                                <input type="password" placeholder="Enter Password" className="input input-bordered rounded-full w-full mb-2 " />
                                <small className='text-end'>All ready have a account <Link to='/login'><span className='text-[#4192d4] mouse'>Log In</span></Link></small>
                                <button className="btn btn-block rounded-full my-2 bg-[#138ccb] border-0" type='submit'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;