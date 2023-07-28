import React from 'react';
import { useAppContext } from '../context/appContext';

import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import { Link, Navigate } from 'react-router-dom';

export const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <main>
          <nav>
            <Logo />
          </nav>
          <div className="container page">
            <div className="info">
              <h1>
                Job <span>Tracking</span> App
              </h1>
              <p>
                Introducing Jobbit - the ultimate MERN stack-based Job Tracking
                Web Application that revolutionizes how you manage your job
                hunt. Bid farewell to disorganized job applications as Jobbit
                streamlines the process, allowing you to log applications and
                update statuses. Unleash the power of advanced statistics and
                analytics to gain valuable insights, identify trends, and refine
                your strategy. With a user-friendly interface and customizable
                dashboard, tracking jobs becomes a breeze. Achieve your career
                goals with Jobbit - Sign up now and take charge of your job
                search like never before!
              </p>
              <Link to="/register" className="btn btn-hero">
                Login/Register
              </Link>
            </div>
            <img src={main} alt="Job Hunt" className="img main-img " />
          </div>
        </main>
      </Wrapper>
    </React.Fragment>
  );
};
