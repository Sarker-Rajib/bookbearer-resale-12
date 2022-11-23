import React from 'react';
import comparImg from '../../Assets/Images/RVA.png';

const Blog = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center text-4xl pb-6 font-bold'>Blogs</h1>
            <div>
                <h4>Q1. What are the different ways to manage a state in a React application ?</h4>
                <p>Ans. The Four Kinds of React State to Manage.</p>
                <ul>
                    <li className='pb-2'>* Local state - Local state is data we manage in one or another component.                        Local state is most often managed in React using the useState hook.</li>
                    <li className='pb-2'>* Global state - Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</li>
                    <li className='pb-2'>* Server state -  Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.</li>
                    <li className='pb-2'>* URL state - Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</li>
                </ul>
            </div>
            <div>
                <h4>Q2. How does prototypical inheritence work ?</h4>
                <p>Ans. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                    <br /> <br />
                    How does prototypical inheritance work in react?
                    Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.
                </p>
            </div>
            <div>
                <h4>Q3. What is unit test ? Why should we write unit tests ?</h4>
                <p>Ans. What is in a unit test?
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.
                    <br /> <br />
                    They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                </p>
            </div>
            <div>
                <h4>Q4. compare React vs Angular vs Vue </h4>
                <p>Ans. </p>
                <img className='m-auto' src={comparImg} alt="RVA" />
            </div>
        </div>
    );
};

export default Blog;