const SignInInputs = ({ handleOnChange, children }) => {
    return (
        <>
            <div>
                <label htmlFor="username">Username</label>
                <input name="username" placeholder="username" onChange={e => handleOnChange(e)}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name="password" placeholder="password" onChange={e => handleOnChange(e)}></input>
            </div>
            <div>
                { children }
            </div>
        </>
    )
}

export default SignInInputs