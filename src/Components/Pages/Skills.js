import React from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import react from '../assets/react.svg'
import next from '../assets/next.svg'
import express from '../assets/express.svg'
import node  from '../assets/node.svg'
import mongo from '../assets/mongo.svg'
import  laravel from '../assets/laravel.svg'
import tailwind from '../assets/tailwind.svg'
import git from '../assets/git.svg'
import js from '../assets/js.svg'
import wordpress from '../assets/wordpress.svg'

export const Skills = () => {
  return (
    <div className="about">
        <div className="title">My Skills</div>
        <p>I am well versed in a wide range of technologies and <br/>frameworks, and I am always looking to learn new ones.</p>
        <div className="stacks">
            <div className="stack"> <img src={html} alt="" /></div>
            <div className="stack"> <img src={css} alt="" /></div>
            <div className="stack"> <img src={react} alt="" /></div>
            <div className="stack"> <img src={node} alt="" /></div>
            <div className="stack"> <img src={express} alt="" /></div>
            <div className="stack"> <img src={mongo} alt="" /></div>
            <div className="stack"> <img src={laravel} alt="" /></div>
            <div className="stack"> <img src={next} alt="" /></div>
            <div className="stack"> <img src={tailwind} alt="" /></div>
            <div className="stack"> <img src={git} alt="" /></div>
            <div className="stack"> <img src={js} alt="" /></div>
            <div className="stack"> <img src={wordpress} alt="" /></div>
        </div>
    </div>
  )
}
