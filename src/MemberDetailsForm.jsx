import { useState, useEffect,useRef } from "react";

import "./MemberDetailsForm.css";
import svg from "./Frame.svg";
import { useForm } from "react-hook-form";
import FieldSet from "./FieldSet";
import axios from "axios";




function MemberDetailsForm({handleRenderTab,travellersCount,setOtp}) {

  let [input, setInput] = useState("");
  let [countries, setCountries] = useState();
  let [filterCountries, setFilterCountries] = useState([]);
  let [countriesAdded, setCountriesAdded] = useState([]);
  let [error,setError] = useState("");
  let dropDown = useRef(null);



  // API call
  let api = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    let x = axios.get(api);
    x.then((e) => {
      setCountries(e.data);
    });
  }, []);

  // removes the countries selected from the input field
  const handleRemove = (el) => {
    setCountriesAdded(countriesAdded.filter((e) => e !== el));
  };
  
  // filter the countries based on the input string
  const handleChange = (e) => {
    let updateInput = e.target.value;
    setInput(updateInput);
    setFilterCountries(countries.filter((e) =>
      e.name.common.toLowerCase().startsWith(updateInput.toLowerCase())
    ));
    setError("")
    dropDown.current.style.display= "block";
  };


  // search - function - end

  // VALIDATION INPUT
  // let fieldSetCount = Array(travellersCount).fill(null);
  let { register, handleSubmit, formState: { errors } } = useForm();


  function onSubmitHandeler(data) {
    if(countriesAdded.length !== 0){
      data = {...data,countries:countriesAdded,travellersCount:travellersCount.length};
      // alert('form submited check console');
      console.log(data);
      setOtp(true);
    }else{
      setError("Enter Countries");
    }



  }
  return (
      <form action="" className="member-form" onSubmit={handleSubmit(onSubmitHandeler)} noValidate>
      {/* <!-- SEARCH-BAR --> */}
      <div div className="search-bar" >
        <div className="search-input">
          <input type="text" placeholder="Enter Your Country"   onChange={e => handleChange(e)} value={input}/>
          <div className="search-logo"><i className="fa-solid fa-magnifying-glass"></i></div>
        </div>
      
        <p className="error">{error}</p>
        <ul className={"drop-down drop-down-active"} ref={dropDown}>
          {filterCountries.map((e, index) => <li key={index} onClick={(event) => {
            // event.target.parentNode.style.display = "none";
            countriesAdded.length < 4
              ? setCountriesAdded([
                e.name.common,
                ...countriesAdded,
              ])
              : null;
            setInput("");
            dropDown.current.style.display= "none";
          }



          }><p>{e.name.common}</p></li>)}
        </ul>
      </div >
      {/* <!-- ADDED COUNTRIES --> */}

      <ul className="countries" >
        {
          countriesAdded.map((e) => {
            return <li className="country" key={e}>
              <p>{e}</p><i className="cross fa-solid fa-circle-xmark" onClick={() => { handleRemove(e) }}></i>
            </li>
          })
        }
      </ul >
      {/* <!-- DETAILS --> */}
      < div className="details" >
        <div className="input name">
          <input type="text" placeholder="Enter Full Name" {...register("name", { required: { value: true, message: 'Enter Your Name' }, validate: (inputField) => (inputField.length > 3 && inputField.length <=20 ) || "3-20 Characters Allowed" })} /><br />
          <span className="error">{errors.name?.message}</span>
        </div>
        <div className="input mobile">
          <input type="number" placeholder="Enter Mobile Number" {...register("phno", { required: { value: true, message: 'Enter Your Mobile Number' }, validate: (inputField) => inputField.length === 10 || 'Invalid Mobile Number'  })} /><br />
          <span className="error">
            <p>{errors.phno?.message}</p>
          </span>
        </div>
      </div >
      {/* <!-- TRAVELLERS AGE --> */}
      < div className="members" >
      {travellersCount.map((e,index)=> <FieldSet register={register} errors={errors} key={index} count={index}/>)}
      </div >
      {/* <!-- TRIP DATES -->  */}
      < div className="travell-dates" >
        <fieldset>
          <legend>Trip start Date</legend>
          <input type="date" placeholder="Enter Age" {...register('startDate',{
            valueAsDate:true,
            required:{
              value:true,
              message:"Enter start Date"
            },
            validate: (inputField)=>new Date().getTime()  <= inputField.getTime() || "Enter Valid Date"
            })}/>
        <span className="date-error">{errors.startDate?.message}</span>
        </fieldset>
        <fieldset>
          <legend>Trip end Date</legend>
          <input type="date" placeholder="Enter Age" {...register('endDate',{
            valueAsDate:true,
            required:{
              value:true,
              message:"Enter end Date"
            },validate:(inputField)=>{}})}/>
        <span className="date-error">{errors.endDate?.message}</span>
        </fieldset>
      </div >
      {/* <!-- BACK/NEXT --> */}
      < div className="navigtion-sec" >
        <div className="back" onClick={()=>{handleRenderTab('home')}}><i className="fa-solid fa-arrow-left"></i><span>Back</span></div>
        <button className="back" type="submit" >
          <input type="submit" value="Next" />
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div >
    </form >
  )
}

export default MemberDetailsForm
