import React from "react";
import ParticleBg from './ParticleBg';
import { UilGithub, UilLinkedin, UilEnvelope } from '@iconscout/react-unicons'
import './styles/header.css'

export default function Header() {
  return (
    <div className="header">
        <ParticleBg />
        <div className="title-div" id="particles-js">
            <h1 className="header-title">Mitchell</h1>
            <h1 className="header-title">Brenner</h1>
        </div>
        <div className="btn-div">
            <a href="https://github.com/MitchBrenner" target="_blank">< UilGithub className="icon"/></a>
            <a href="https://www.linkedin.com/in/mitchell-brenner-124240230/" target="_blank"><UilLinkedin className="icon"/></a>
            <a href="mailto:mkbrenner3@wisc.edu" target="_blank"><UilEnvelope className="icon"/></a>
        </div>
    </div>
  );
}

{/* <div className="title-div" id="particles-js">
<h1 className="header-title">Mitchell</h1>
<h1 className="header-title">Brenner</h1>
</div>
<div className="btn-div">
<a href="https://github.com/MitchBrenner">< UilGithub className="icon"/></a>
<a href="https://www.linkedin.com/in/mitchell-brenner-124240230/"><UilLinkedin className="icon"/></a>
</div> */}