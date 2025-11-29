import carhire from './carhire.png'
import crypto from './cryptoplace.png'
import mayphil from './maypil.png'
import greenwheels from './Greenwheels-africa-11-29-2025_11_59_PM.png'




export const Projects=[
    {
        id:"01",
        title:'Web Development Project',
        description:"A comprehensive car hire website built with React.js. Features include product management, payment integration, and secure checkout.",
        stack:[{name:"React Js"}, {name:"CSS3"},{name:"Node Js"}],
        image:carhire,
        link:'https://car-rental-ten-mu.vercel.app/'
    },
    {
        id:"02",
        title:'Web Development Project',
        description:"A sleek full-stack ecommerce website built with Next.js. It features a responsive design, account management, and a secure admin dashboard with CRUD operations..",
        stack:[{name:"React Js"}, {name:"CSS3"},{name:"Node Js"}, {name:"Next.Js"}],
        image:mayphil,
        link:'https://mayphilinvestments.com/'
    },
    {
        id:"03",
        title:'Web Development Project',
        description:"A simple crypto currency website that provides insights and market trends to traders utilising coin gecko api and google charts",
        stack:[{name:"React Js"}, {name:"CSS3"},{name:"Node Js"}, {name:"Next.Js"},{name:"Redux"}],
        image:crypto,
        link:'https://cryptoplace-rust.vercel.app/'
    },
    {
        id:"04",
        title:'Web Application Project',
        description:"An admin dashboard panel for an electric vehicle fleet management. The admin is able to monitor and track their fleet in real time",
        stack:[{name:"React Js"}, {name:"CSS3"},{name:"Node Js"}, {name:"Express Js"},{name:"Redux"},{name:"React Charts"},{name:"MongoDb"}],
        image:greenwheels,
        link:'https://greenwheels-fleet.vercel.app/'
    }
]