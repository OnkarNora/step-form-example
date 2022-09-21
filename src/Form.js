import React, { useEffect } from 'react'
import { useState } from 'react'
import PersonalDetails from './PersonalDetails'
import Addresses from './Addresses'
import PaymentDetails from './PaymentDetails'
import Success from './Success'
import Fail from './Fail'

function Form() {

    const [step, setStep] = useState(1)
    const [data, setData] = useState({})
    
    useEffect(() => {
        setData({
            FirstName:"",
            LastName:"",
            Username:"",
            City:"",
            State:"",
            Zip:"",
            Email:"",
            Password:"",
            Phone:"",
            Height:"",
            Designation:"",
            Address1:"",
            Address2:"",
            Apartment:"",
            Region:"",
            CardNo:"",
            Cvv:"",
            ExpiryDate:"",
            NameOnTheCard:"",
        })
    }, []);

    const prevStep = () =>{
        setStep(step-1)
    }

    const nextStep = () =>{
        setStep(step+1)
    }


    switch (step) {
        case 1:
            return (
                <PersonalDetails
                prevStep={prevStep}
                nextStep={nextStep}
                setData={setData}
                data={data}
                />
            )
        case 2:
            return (
                <Addresses 
                prevStep={prevStep}
                nextStep={nextStep}
                setData={setData}
                data={data}
                />
            )
        case 3:
            return (
                <PaymentDetails 
                prevStep={prevStep}
                nextStep={nextStep}
                setData={setData}
                data={data}
                />
            )
        case 4:
            for (let i in data){
                if (data[i] === ""){
                    return (<Fail />)
                }
            }
            return (
                <Success />
            )

        default:

    }
}

export default Form