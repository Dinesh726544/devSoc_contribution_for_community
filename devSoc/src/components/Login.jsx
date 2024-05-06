import React from 'react'

export function Login({handleSelectComponent}) {
    

    return (
        <>
            <div className='flex justify-center items-center h-screen '>
                <form action='' className='border-4 border-red-500 p-10'>
                        <div className="mb-3">
                            <label htmlFor="name" >Enter name</label><br />
                            <input 
                             type="text" 
                            id="name" 
                            className='border-2 border-black'
                            required
                            placeholder='enter name'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userId" >Enter userId</label><br />
                            <input 
                             type="text" 
                            id="userId" 
                            className='border-2 border-black'
                            required
                            placeholder='enter userId'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Enter email</label><br />
                            <input 
                                type="email" 
                                id="email" 
                                className='border-2 border-black'
                                required
                                placeholder='enter your email'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Enter password</label><br />
                            <input 
                                type="password" 
                                id="password" 
                                className='border-2 border-black'
                                required
                                placeholder='enter password'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="link">Enter github link</label><br />
                            <input 
                                type="text" 
                                id="link" 
                                className='border-2 border-black'
                                required
                                placeholder='Enter github link'
                            />
                        </div>

                        <div>
                            <button type="submit" className='border-2 border-black hover:bg-blue-500 hover:text-white p-1 rounded'>submit</button>
                            <p>have already account <button onClick = {() => handleSelectComponent('signin')} className='underline text-blue-500'>singin</button> </p>
                        </div>
                        
                </form>
             </div>
        </>
    )
}
