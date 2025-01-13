import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="content">
        <h1>Sangeetha Bhukya</h1>
        <p>Address: City University Of Seattle, Washington, USA | Email: sangeethabhukya@cityuniversity.edu
        | Phone: +1 012-345-6789</p>
        
        <div className="section">
          <h2>Education</h2>
          <ul className="no-bullets">
          <h4><li>Masters in Computer Science</li></h4>
            <li>City University of Seattle</li>
            <li>Masters</li>
          </ul>
          <ul className="no-bullets">
          <h4><li>Bachelors in Civil Engineering</li></h4>
            <li>JNTU</li>
          </ul>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <ul className="no-bullets">
            <li>ML</li>
            <li>AI</li>
            <li>React</li>
            <li>Cloud</li>
            <li>SQL</li>
            <li>CICD</li>
          </ul>
        </div>

        <div className="section">
          <h2>Work Experience</h2>
          <ul className="no-bullets">
           <h4> <li>Analyst</li></h4>
            <li>CityU</li>
            <li>JTemp Jan 2023 - Sep 2025</li>
          </ul>
          <ul className="no-bullets">
          <h4><li>Student</li></h4>
            <li>City University of Seattle</li>
            <li>2023</li>
          </ul>
        </div>
        <div className="section">
          <h2>Work Experience</h2>
         
        </div>

        <div className="section">
          <h2>Projects</h2>
          <ul className="no-bullets">
            <li>
              <strong>Project A:</strong>Team Project 
              <br />
              URL: <a href="https://github.com/cityuseattle/cs628-hos01-2025-winter-sangeetha-b1">https://github.com/cityuseattle/cs628-hos01-2025-winter-sangeetha-b1</a>
            </li>
            
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Resume;
