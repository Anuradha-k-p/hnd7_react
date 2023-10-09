 import React, { Component } from "react";


 class Display extends Component{
    constructor(props) {
        super(props);

       console.log(this.props.value);
    }

    render(){
        return(
            <>
           
            <div className='Data_con'>
                    {this.props.value.map((employee, index) => (
                        <p className='elements' key={index}>
                            Name: {employee.name} |
                            Department: {employee.dept} |
                            Rate: {employee.rate}
                        </p>
                    ))}
                </div>



            <button onClick={this.props.toggleFunc} >Go Back</button>
            
            </>
        )
    }
 }

export default Display