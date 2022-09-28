import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGoogle } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className="card sm:w-96 bg-base-100 drop-shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title text-[32px] mt-10 mb-2 text-[#138ccb]">Log In !</h2>
                                <Link to='/signup'><h2 className="card-title text-[32px] mb-10">Sign Up !</h2></Link>
                                <input type="email" placeholder="Enter Email" className="input input-bordered rounded-full w-full mb-2 " />
                                <input type="password" placeholder="Enter Password" className="input input-bordered rounded-full w-full mb-2 " />
                                <small className='text-end'>Want to create a new account <Link to='/signup'><span className='text-[#4192d4] mouse'>Sign up</span></Link></small>
                                <button className="btn btn-block rounded-full my-4 bg-[#138ccb] border-0 mouse" type='submit'>Log In</button>
                                <hr />
                                <div className='flex justify-evenly mt-2'>
                                    <div className=' text-center'>
                                        <IoLogoGoogle className='text-[35px] text-[#138ccb]' />
                                        <p>Google</p>
                                    </div>
                                    <div className=' text-center'>
                                        <BsGithub className='text-[33px] text-[#138ccb]' />
                                        <p>Git Hub</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;