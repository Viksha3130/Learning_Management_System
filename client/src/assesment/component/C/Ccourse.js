import React, { Component } from 'react'
import {Tab , Tabs , TabList , TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';


export class Ccourse extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12  col">
                       
                      
                        <Tabs>
    <TabList>
      <Tab >All</Tab>
      <Tab >Beginner</Tab>
      <Tab >Intermediate</Tab>
      <Tab >Proffesional</Tab>
    </TabList>
 
    <TabPanel>
      <div className="Assesment-grid">
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">Simple C programs</h3>
                 
                       <Link to='/Simple-C-Program-course' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">C Programming on Arrays</h3>
                 
                       <Link to='/c-programming-arrays' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Matrix</h3>
                 
                       <Link to='/c-programming-matrix' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Strings</h3>
                 
                       <Link to='/c-programming-strings' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Linked List</h3>
                 
                       <Link to='/c-programming-linked-list' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Stacks & Queues</h3>
                 
                       <Link to='/c-programming-stacks' className="btnstart">Start!</Link>
                  
               </div>
          </div>
       
        
          
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">  C Programming on Mathematical Functions</h3>
                 
                       <Link to='/c-programming-mathematical-functions' className="btnstart">Start!</Link>
                  
               </div>
          </div>
        
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> Tower-of-Hanoi Problem</h3>
                 
                       <Link to='/c-program-tower-of-hanoi-using-recursion' className="btnstart">Start!</Link>
                  
               </div>
          </div>
         
          <div className="Assesment-grid">
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Numerical Problems & Algorithms</h3>
                 
                       <Link to='/c-programming-numerical-problems-algorithms' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">C Programming  on Combinatorial Problems & Algorithms</h3>
                 
                       <Link to='/c-programming-combinatorial-problems-algorithms' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">C Programming  on Data-Structures</h3>
                 
                       <Link to='/c-programming-examples-data-structures' className="btnstart">Start!</Link>
                  
               </div>
          </div>
         </div>
        
        

      </div>
    </TabPanel>
    <TabPanel>
    <div className="Assesment-grid">
    <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">Simple C programs</h3>
                 
                       <Link to='/Simple-C-Program-course' className="btnstart">Start!</Link>
                  
               </div>
          </div>
           
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">  C Programming on Mathematical Functions</h3>
                 
                       <Link to='/c-programming-mathematical-functions' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Strings</h3>
                 
                       <Link to='/c-programming-strings' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">C Programming on Arrays</h3>
                 
                       <Link to='/c-programming-arrays' className="btnstart">Start!</Link>
                  
               </div>
          </div>
    </div>

    </TabPanel>
    <TabPanel>
    <div className="Assesment-grid">
    <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Matrix</h3>
                 
                       <Link to='/c-programming-matrix' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Linked List</h3>
                 
                       <Link to='/c-programming-linked-list' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Stacks & Queues</h3>
                 
                       <Link to='/c-programming-stacks' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> Tower-of-Hanoi Problem</h3>
                 
                       <Link to='/c-program-tower-of-hanoi-using-recursion' className="btnstart">Start!</Link>
                  
               </div>
          </div>
    </div>
  
    </TabPanel>
    <TabPanel>
    <div className="Assesment-grid">
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py"> C Programming  on Numerical Problems & Algorithms</h3>
                 
                       <Link to='/c-programming-numerical-problems-algorithms' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">C Programming on Combinatorial Problems & Algorithms</h3>
                 
                       <Link to='/c-programming-combinatorial-problems-algorithms' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Assesment-list">
               <div className="Assesment-box">
                   <h3 className="py">C Programming  on Data-Structures</h3>
                 
                       <Link to='/c-programming-data-structures' className="btnstart">Start!</Link>
                  
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

export default Ccourse
