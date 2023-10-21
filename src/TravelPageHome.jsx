import { useState } from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
// import {} from "react-router-dom";
import "./MemberDetailsForm.css";
import MemberDetailsForm from "./MemberDetailsForm";
import Home from "./Home";
import svg from "./Frame.svg";
import OTPModal from "./OTPModal";


function TravelPageHome(){
    const [activeTab, setActiveTab] = useState('home');
    const [travellersCount,setTravellersCount] = useState(Array(9).fill(null));
    let [otp,setOtp] = useState(false);


    const renderTab = () => {
        switch (activeTab) {
          case 'home':
            return <Home 
            handleRenderTab={handleRenderTab}
             travellersCount={travellersCount}
              setTravellersCount={setTravellersCount}
              />;
          case 'next':
            return <MemberDetailsForm
             handleRenderTab={handleRenderTab}
             travellersCount={travellersCount}
             setOtp={setOtp}
            />;
          default:
            return <Home />;
        }
      };


      function handleRenderTab(tab){
        setActiveTab(tab);
      }







    return <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="grid-container">
        <div className="grid-item avatar-img">
        <img src={svg} alt="" />
        <div className="travell-title-main">
          <h2>Get Your Best Travel Insurance</h2>
        </div>
        </div>
        <div className="grid-item">
          {renderTab()}
        </div>
        { otp && <OTPModal setOtp={setOtp} /> }
      </div>}/>
      <Route path="/plan" element={<h1>Plans</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
}

export default TravelPageHome;
