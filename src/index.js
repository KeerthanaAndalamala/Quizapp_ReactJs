import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App /> 
);

function App() {
  return (
    <div style={{backgroundColor:'grey',color:'yellowgreen',fontFamily:'cursive'}}>
      <h1>Root Component</h1>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

function Header(){
  return (
    <div style={{backgroundColor:'skyblue',color:'blue',padding:'5px',fontFamily:"fantasy"}}>
      <h1>Header Component</h1>
    </div>
  );
}
function Content(){
  function getResult(event)
  {
    let ans1 =event.target.q1.value;
    let ans2 = event.target.q2.value;
    let ans3= event.target.q3.value;
    let ans4= event.target.q4.value;
    let ans5= event.target.q5.value;
    let marks = 0;
    if(ans1==='A. OOPL')
    {
      marks++;
    }
    if(ans2==='A. DBMS')
    {
      marks++;
    }
    if(ans3==='A. JavaSript Framework')
    {
      marks++;
    }
    if(ans4==='A. OOPL')
    {
      marks++;
    } 
    if(ans5==='A. Markup Language')
    {
      marks++;
    }
    alert('Total marks ='+marks)
  }
  return (
    <div>
    <h1>Answer these Questions</h1>
    <form onSubmit={getResult}>
      <Ques 
      ques = " Q. What is java?"
      op1 = "A. OOPL"
      op2 = "B. Funtional"
      op3 = "c. Scripting"
      name="q1"
    />
    <Ques
    ques = " Q. What is SQL?"
      op1 = "A. DBMS"
      op2 = "B. PL"
      op3 = "c. Scripting" 
        name="q2"
      />
      <Ques 
      ques = " Q. What is React?"
      op1 = "A. JavaSript Framework"
      op2 = "B. Scripting"
      op3 = "C. PL"
      name="q3"
      ></Ques>
      <Ques 
      ques = " Q. What is Python?"
      op1 = "A. OOPL"
      op2 = "B. Scripting"
      op3 = "C. DBMS"
      name="q4"
      ></Ques>
      <Ques 
      ques = "Q. What is HTML?"
      op1 = "A. Markup Language"
      op2 = "B. Scripting"
      op3 = "C. PL"
      name="q5"
      ></Ques>
      <input type="submit" value="GetResult"></input>
    </form>
    </div> 
  );
}
function Footer()
{
  return(
    <div className="foot">
      <h1>Footer Component</h1>
      </div>
  );
    
}
function Ques(props) {
  return(
    <div>
    
      <h2>{props.ques}</h2>
      <input type='radio' name={props.name} value ={props.op1}></input><label>{props.op1}</label>
      <input type='radio' name={props.name} value ={props.op2}></input><label>{props.op2}</label>
      <input type='radio' name={props.name} value ={props.op3}></input><label>{props.op3}</label>
    </div>
  );
}
    


