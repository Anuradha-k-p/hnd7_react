import React, { Component } from "react";
import Display from "./Display";
import "./Style.css"

class Form extends Component {
    constructor(){
        super();
        this.state = {
            Name: '',
            Rate: '',
            Dept: '',
            buttonFun: true,
            EmpData: [],
            formError: '',
        };  
    }

    toggleFunction = () => {
        this.setState({ buttonFun: !this.state.buttonFun });
    };



       
    change = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };


    handleClick = (e) => {
        e.preventDefault();
        const { Name, Rate, Dept } = this.state;

        // Check if required fields are empty
        if (Name.trim() === '' || Rate.trim() === '' || Dept.trim() === '') {
            this.setState({ formError: 'All feilds are required.' });
        } else {
            const newEmployee = {
                name: Name,
                rate: Rate,
                dept: Dept,
            };
            this.setState((prevState) => ({
                EmpData: [...prevState.EmpData, newEmployee],
                Name: '',
                Rate: '',
                Dept: '',
                buttonFun: false,
                formError: '',
            }));
        }
    };




    render(){
        const { Name, Rate, Dept, buttonFun, EmpData, formError } = this.state;
        return(
            
            <div className='Parent-con'>
                {buttonFun ? (
                    <>


                        <h1 className='Heading'>Employee Feedback Form</h1>
                        <form>
                        {formError && <p className="Warning">{formError}</p>}
                            
                                <label htmlFor='name'>Name:</label>
                                <input id='name' type='text'  placeholder='Enter name'  name='Name' value={Name}  onChange={this.change}  required />
                                <br />

                         
                                <label htmlFor='dept'>Department:</label>
                                <input
                                    id='dept'  type='text' placeholder='Enter deparatment' name='Dept'  value={Dept} onChange={this.change} required/>
                                <br />
                
                                <label htmlFor='rating'>Rate:</label>
                                <input id='rating'  type='number'  placeholder='Enter rating' name='Rate' value={Rate}  onChange={this.change}  required />
                                <br />
                        
                            
                            <button onClick={this.handleClick}>Submit</button>
                        </form>
                    </>
                ) : (
                    <>
                        <h1 className='Heading'>Employee Feedback Data</h1>
                        <Display value={EmpData} toggleFunc={this.toggleFunction} />
                    </>
                )}
            </div>
        )
    }
}
export default Form