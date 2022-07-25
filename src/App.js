import React, { Suspense, useContext, createContext, useMemo, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopBarProgress from "react-topbar-progress-indicator";
import loadable from '@loadable/component'
import ConfigCookie from "./data/cookie/CookieConfig.json";
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
// Css Import
import './assets/scss/app.scss';
import { configure } from 'cookie-though';
//Home
const DigitalAgency = loadable(() => import('./pages/DigitalAgency'));
// Service 
const ServiceOne = loadable(() => import('./pages/ServiceOne'));
const ServiceDetails = loadable(() => import('./pages/ServiceDetails'));
// Project 
const ProjectGridOne = loadable(() => import('./pages/ProjectGridOne'));
const ProjectDetails = loadable(() => import('./pages/ProjectDetails'));
// Pages 
const CaseDetails = loadable(() => import('./pages/CaseStudyDetails'));
const ErrorPage = loadable(() => import('./pages/404'));
const AboutUs = loadable(() => import('./pages/AboutUs'));
const Contact = loadable(() => import('./pages/Contact'));
const Budget = loadable(() => import('./pages/Budget'));
const PrivacyPolicy = loadable(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = loadable(() => import('./pages/TermsOfUse'));
const Calculator = loadable(() => import('./pages/Calculator'));
const { history } = loadable(() => import('./utils/history'));
const IndicatorContext = createContext();
const IndicatorProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const value = useMemo(() => ({ active, setActive }), [active, setActive]);
  return (
    <IndicatorContext.Provider value={value}>
      {children}
    </IndicatorContext.Provider>
  );
}

const Indicator = () =>{
  const { active } = useContext(IndicatorContext);
  // const [percent, setPercent] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPercent(percent => (percent < 100 ? percent + 10 : 100));
  //   }, 200);
  // });
  return active ? <TopBarProgress /> : null;
}

const IndicatorFallback = () =>{
  const { setActive } = useContext(IndicatorContext);
  useEffect(() => {
    setActive(true)
    return () => setActive(false)
  });
  return null;
}

configure(ConfigCookie);
const App = () => {
  return (
    <IndicatorProvider>
      <Indicator />
      <Router history={ history }>
        <ScrollToTop>
          <Suspense fallback={<IndicatorFallback />}>
            <Routes>
              <Route exact path={process.env.PUBLIC_URL + "/"} element={<DigitalAgency />}/>
              <Route path={process.env.PUBLIC_URL + "/quanto-custa-um-aplicativo/"} element={<Calculator />}/>
              {/* Service */}
              <Route path={process.env.PUBLIC_URL + "/o-que-fazemos/"} element={<ServiceOne />}/>
              <Route path={process.env.PUBLIC_URL + "/solucao-digital/:slug/"} element={<ServiceDetails />}/>
              {/* Project  */}
              <Route path={process.env.PUBLIC_URL + "/projetos-entregues/"} element={<ProjectGridOne />}/>
              <Route path={process.env.PUBLIC_URL + "/projeto/:slug/"} element={<ProjectDetails />}/>
              {/* Pages  */}
              <Route path={process.env.PUBLIC_URL + "/quem-somos/"} element={<AboutUs />}/>
              <Route path={process.env.PUBLIC_URL + "/case-details/:slug/"} element={<CaseDetails />}/>
              <Route path={process.env.PUBLIC_URL + "/orcamento/"} element={<Budget />}/>
              <Route path={process.env.PUBLIC_URL + "/contato/"} element={<Contact />}/>
              <Route path={process.env.PUBLIC_URL + "/404/"} element={<ErrorPage />}/>
              <Route path={process.env.PUBLIC_URL + "/privacy-policy/"} element={<PrivacyPolicy />}/>
              <Route path={process.env.PUBLIC_URL + "/terms-use/"} element={<TermsOfUse />}/>
              <Route path="*" element={<Navigate to="/404/" />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
    </IndicatorProvider>
  )
}

export default App;
