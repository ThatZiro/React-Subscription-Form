import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="view">
        {/* ===== SIDEBAR ===== */}
        <div className="col-3 ">
          <div className="sidebar d-flex flex-column gap-2">
            {/* Step 1 */}
            <div className="step d-flex gap-2 mt-3 mx-3 alert-dark justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="24.5" fill="#BDE1FF" stroke="white" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" fontWeight="bold" fill="black">
                  1
                </text>
              </svg>
              <div>
                <p className="typography-step">STEP 1</p>
                <p className="bold typography-step-name">YOUR INFO</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="step d-flex gap-2 mx-3 alert-dark justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="24.5" stroke="white" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" fontWeight="bold" fill="white">
                  2
                </text>
              </svg>
              <div>
                <p className="typography-step">STEP 2</p>
                <p className="bold typography-step-name">SELECT PLAN</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="step d-flex gap-2 mx-3 alert-dark justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="24.5" stroke="white" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" fontWeight="bold" fill="white">
                  3
                </text>
              </svg>
              <div>
                <p className="typography-step">STEP 3</p>
                <p className="bold typography-step-name">ADD-ONS</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="step d-flex gap-2 mx-3 alert-dark justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="24.5" stroke="white" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" fontWeight="bold" fill="white">
                  4
                </text>
              </svg>
              <div>
                <p className="typography-step">STEP 4</p>
                <p className="bold typography-step-name">SUMMARY</p>
              </div>
            </div>
          </div>
        </div>
        {/* ===== CONTENT ===== */}
        <div className="main col-9">
          <div className="m-5">
            <div className="header mt-3">
              <h1 className="bold"> Personal info</h1>
              <h4> Please provide your name, email address, and phone number.</h4>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
