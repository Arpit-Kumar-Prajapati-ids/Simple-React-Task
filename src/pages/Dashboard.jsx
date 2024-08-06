import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopSection from "../components/TopSection";
import "./dashboard.css";
import Card from "../components/Card";
import Tasks from "../components/Tasks";
const Dashboard = () => {
    const isLoggedIn = sessionStorage.getItem("isLogged");
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [dataLoaded,setDataLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if(isLoggedIn != "true"){
        navigate("/");
    }
    else{
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.firstName)
        setUser(result)
        setDataLoaded(true)});
      }
  }, []);
  return (
    <div className="dashboardcontainer">
      {dataLoaded && <Sidebar
        userDetails={{
            fName : user.firstName,
            lName: user.lastName,
            mail: user.email,
            img:user.image
          }}
      />}
      <div className="herocontent">
        {dataLoaded && <TopSection username={user.username} /> }
        <div className="cards">
        <Card cardDetails={{text:"Web Development",color:"purple"}}/>
        <Card cardDetails={{text:"Mobile App Design",color:"rgb(112, 210, 255)"}}/>
        <Card cardDetails={{text:"FaceBook Brand UI Kit",color:"orange"}}/>
        <Card cardDetails={{text:"Blockchain",color:"rgb(78, 240, 164)"}}/>
        </div>
        <div className="tasks">
            <p>Tasks for today</p>
            <Tasks text={"Mobile App"} desc={"Prepare Figma File"} color={"orange"}/>
            <Tasks text={"UX Wireframes"} desc={"Design UX Wireframes"} color={"purple"}/>
            <Tasks text={"Mobile App"} desc={"Research"} color={"rgb(112, 210, 255)"}/>
        </div>
        
      </div>

    </div>
  );
};

export default Dashboard;
