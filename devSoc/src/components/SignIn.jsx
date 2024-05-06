import React from 'react'

export function SignIn({handleSelectComponent}) {
    

    return (
        <>
            <div className='flex justify-center items-center h-screen '>
                <form action='' className='border-4 border-red-500 p-10'>
                        
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
                       
                        <div>
                            <button type="submit" className='border-2 border-black hover:bg-blue-500 hover:text-white p-1 rounded'>submit</button>
                            <p>Don't have account then <button onClick = {() => handleSelectComponent('login')} className='underline text-blue-500'>login</button></p>
                        </div>
                        
                </form>
             </div>
        </>
    )
}
 