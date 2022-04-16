const Register = () => {
    const {handleChange, values, handleSubmit, errors,setEventid} = useForm();

    return(
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
               
                <div className='form-inputs'>
                    <label htmlFor='bookid' className='form-lable' >
                        Bookid: 
                    </label>
                    <input id='bookid' type='number' name='bookid' className='form-input' placeholder='bookid' value={values.bookid} onChange={handleChange} />
                    {/* {errors.bookid && <p>{errors.bookid}</p>} */}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='bookdate' className='form-lable'>
                        Bookdate: 
                    </label>
                    <input id='bookdate' type='text' name='bookdate' className='form-input' placeholder='Type date' value={values.bookdate} onChange={handleChange}/>
                    {/* {errors.password && <p>{errors.password}</p>} */}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='noofperson' className='form-lable'>
                       No of persons: 
                    </label>
                    <input id='noofperson' type='number' name='noofperson' className='form-input1' placeholder='noofperson' value={values.password1} onChange={handleChange}/>
                    {/* {errors.password1 && <p>{errors.password1}</p>} */}
                </div>

                <button className='form-input-btn' type='submit' onClick={setEventid}>Register</button><br/>
                <span className='form-input-login'>Already have an account? <a href='\Login'>Login here</a></span>
            </form>
        </div>
    )
}

export default Register