import React, { Component } from 'react'
import {Tab , Tabs , TabList , TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';


export class Pythoncourse extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col">
                       
                      
                        <Tabs>
    <TabList>
      <Tab >All</Tab>
      <Tab >Beginner</Tab>
      <Tab >Intermediate</Tab>
      <Tab >Proffesional</Tab>
    </TabList>
 
    <TabPanel>
      <div className="Quiz-grid">
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Operators</h3>
                 
                       <Link to='/Python-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Control Structures</h3>
                 
                       <Link to='/Python/cs-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-1</h3>
                 
                       <Link to='/Python/function-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-2</h3>
                 
                       <Link to='/Python/function2-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="Quiz-grid">
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Operators</h3>
                 
                       <Link to='/Python-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Control Structures</h3>
                 
                       <Link to='/Python/cs-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-1</h3>
                 
                       <Link to='/Python/function-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>

      </div>
    </TabPanel>
    <TabPanel>
    <div className="Quiz-grid">
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-2</h3>
                 
                       <Link to='/Python/function2-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          </div>

    </TabPanel>
  </Tabs>
                     </div>

                   
                    </div>
                  
                </div>
            
               
            </div>
       
        )
    }
}

export default Pythoncourse
