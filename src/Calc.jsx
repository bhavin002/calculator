import React, { useState } from 'react'
import './Calc.css'

const Calc = () => {

    const [num1 , setNum1] = useState('');
    const [op,setOp] = useState('');
    const [ans,setAns] = useState('');
    const [fnumber,setFnumber] = useState('');
    let number1 = num1;
    const CalcAns = () =>{
        let IntNumber1 = parseFloat(fnumber);
        let IntNumber2 = parseFloat(num1);
        if(op === "+"){
            setAns(IntNumber1 + IntNumber2);
            setNum1('');
        }else if(op === "*"){
            setAns(IntNumber1 * IntNumber2);
            setNum1('');
        }else if(op === "-"){
            setAns(IntNumber1 - IntNumber2);
            setNum1('');
        }else if(op === "/"){
            setAns(IntNumber1 / IntNumber2);
            setNum1('');
        }else if(op === "mod"){
            setAns(IntNumber1 % IntNumber2)
            setNum1('');
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="calc mt-5"  >
                    <div className="row">
                        <div className="col-12">
                            <h1 className='text-center my-md-3'>Calculator</h1>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-8">
                            <input type="text" value={num1} name='textBox' disabled />
                        </div>
                        <div className="col-4">
                            <input type="text" value={ans} name='textBox' disabled />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <button className='button' onClick={()=>{CalcAns()}} >=</button>
                        </div>
                        <div className="col-6">
                            <button className='button' onClick={()=>{setNum1('');setAns('');}}>CE</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '7')}}>7</button>
                        </div>
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '8')}}>8</button>
                        </div>
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '9')}}>9</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1('');setFnumber(number1);setOp('+')}}>+</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1('');setAns(Math.sqrt(num1))}}>SQRT</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '4')}}>4</button>
                        </div>
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '5')}}>5</button>
                        </div>
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '6')}}>6</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1('');setFnumber(number1);setOp('-')}}>-</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1('');setFnumber(number1);setOp('mod')}}>MOD</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '1')}}>1</button>
                        </div>
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '2')}}>2</button>
                        </div>
                        <div className="col-2">
                            <button className='button' onClick={()=>{setNum1(number1 + '3')}}>3</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1('');setFnumber(number1);setOp('*')}}>*</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1('');setFnumber(number1);setOp('%');setAns((parseFloat(fnumber)*parseFloat(num1))/100)}}>%</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1(number1 + '0')}}>0</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{if(!num1.includes(".")){setNum1(number1 + ".")}}}>.</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1('');setFnumber(number1);setOp('/')}}>/</button>
                        </div>
                        <div className="col-3">
                            <button className='button' onClick={()=>{setNum1('');setAns(num1 * -1)}}>+/-</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calc;