import React,{useState}from "react";


const Home = () => {

	const [colors , setColors]=useState("");
	
		function clicked(color){
			console.log(color);
			setColors(color);
		}
		
	
	
		return (
			<div className="text-center">
				<div className="container text-center"  style={{backgroundColor:"black", height:"100px",width:"20px"}}></div>
				<div className="container text-center"  style={{backgroundColor:"black", height:"400px",width:"150px",borderRadius:"25px"}}>
				
				<button onClick= {()=>clicked("red")}    style={{backgroundColor:"red", borderRadius:"50px",height:"20%",width:"65%",marginBottom:"30px", marginTop:"40px", boxShadow: colors === "red" ? "0px 0px 30px 20px white" : ""}} ></button>
				<button onClick= {()=>clicked("yellow")} style={{backgroundColor:"yellow", borderRadius:"50px",height:"20%",width:"65%",marginBottom:"30px",boxShadow: colors === "yellow" ? "0px 0px 30px 20px white" : "" }}></button>
				<button onClick= {()=>clicked("green")} style={{backgroundColor:"green", borderRadius:"50px",height:"20%",width:"65%",marginBottom:"30px",boxShadow: colors === "green" ? "0px 0px 30px 20px white" : ""}}></button>
		</div>
		</div>
	
				
		);
	}
	
	
	export default Home;
	
