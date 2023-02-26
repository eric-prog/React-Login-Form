const SignUpInputs = ({ handleOnChange, children }) => {
    return (
        <>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" placeholder="firstName" onChange={e => handleOnChange(e)}></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" placeholder="lastName" onChange={e => handleOnChange(e)}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="email" onChange={e => handleOnChange(e)}></input>
            </div>
            <div>
                { children }
            </div>
        </>
    )
}

export default SignUpInputs