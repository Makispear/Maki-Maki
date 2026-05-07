import "../../index.css";
import "./technologies.css";
import React, { useEffect } from "react";
import { useState } from "react";
import "./copy-to-clipboard";
import python from "../../assets/TechLogos/Python.png";
import aws from "../../assets/TechLogos/AWS.png";
import terraform from "../../assets/TechLogos/Terraform.png";
import nodejs from "../../assets/TechLogos/NodeJs.png";
import react from "../../assets/TechLogos/React.png";
import postgresql from "../../assets/TechLogos/PostgreSQL.png";
import docker from "../../assets/TechLogos/Docker.png";
import linux from "../../assets/TechLogos/Linux.png";
import mysql from "../../assets/TechLogos/MySQL.png";
import mongodb from "../../assets/TechLogos/MongoDB.png";
import flask from "../../assets/TechLogos/Flask.png";
import pandas from "../../assets/TechLogos/Pandas.png";
import numpy from "../../assets/TechLogos/NumPy.png";
import html from "../../assets/TechLogos/HTML.png";
import css from "../../assets/TechLogos/CSS.png";
import java from "../../assets/TechLogos/Java.png";
import springboot from "../../assets/TechLogos/SpringBoot.png";
import { clipBoard } from "./copy-to-clipboard";
import copydark from "../../assets/Logos/CopyDark.png";

const Technologies: React.FC = () => {
  const techstack = [
    { name: "AWS", icon: aws },
    { name: "Terraform", icon: terraform },
    { name: "Docker", icon: docker },
    { name: "Linux", icon: linux },
    { name: "Python", icon: python },
    { name: "Flask", icon: flask },
    { name: "Pandas", icon: pandas },
    { name: "NumPy", icon: numpy },
    { name: "Node.js", icon: nodejs },
    { name: "PostgreSQL", icon: postgresql },
    { name: "MySQL", icon: mysql },
    { name: "MongoDB", icon: mongodb },
    { name: "React", icon: react },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Java", icon: java },
    { name: "SpringBoot", icon: springboot },
  ];

  const copyToClipBoard = () => {
    const text = clipBoard.join(", ");
    navigator.clipboard.writeText(text);
  };

  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    copyToClipBoard();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <div className="technologies-section">
      <h2>
        TECHNOLOGIES{" "}
        <button onClick={handleCopyClick}>
          {copied ? (
            "Copied!"
          ) : (
            <img
              className="copy"
              src={isDark ? copydark : copydark}
              alt="Copy"
            />
          )}
        </button>
      </h2>
      <div className="technologies-list">
        {[...techstack, ...techstack, ...techstack].map((tech) => (
          <div key={tech.name}>
            <img src={tech.icon} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
