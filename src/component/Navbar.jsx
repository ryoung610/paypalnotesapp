import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure this path is correct based on your project structure

// Remove these imports if not needed for the navbar
//import { StorageImage } from '@aws-amplify/ui-react-storage';
//import '@aws-amplify/ui-react/styles.css';
//import { Amplify } from 'aws-amplify';
//import {outputs} from 'amplify_outputs.json';
//Amplify.configure(outputs);

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Changed to 'navbar' to match the CSS */}
      <ul className="nav-list">
        <li><NavLink to="/home" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/products" className="nav-item">Products</NavLink></li>
        <li><NavLink to="/about" className="nav-item">About</NavLink></li>
        <li><NavLink to="/todo" className="nav-item">Todo</NavLink></li>
        <li><NavLink to="/projects" className="nav-item">Projects</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;





/**
 * 
 * 
import React from 'react'
import { useState } from 'react'
//import {assets} from '../public/assets/bitcoinimage.js'
import { Link, NavLink } from 'react-router-dom'
import { StorageImage } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';import { Amplify } from 'aws-amplify';
import '../styles/Navbar.css';

//import {outputs} from 'amplify_outputs.json';

//Amplify.configure(outputs);



const Navbar = () => {

    const { storageBitcoin } =  <StorageImage alt="bitcoin" path="../public/assets/bitcoinimage.jpeg" />;

  return (
    <nav className="menu-bar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

 * 
 * 
 * 
 * https://amplify-do35s6tp2tfqj-mai-amplifynotesdrivebucket1-ucxglu
 * 2qtcnv.s3.us-east-1.amazonaws.com/webpics/bitcoinimage.jpeg?X-Amz
 * -Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD
 * &X-Amz-Credential=ASIA47CR2DHOXVBFUUH4%2F20250127%2Fus-east-1%2Fs
 * 3%2Faws4_request&X-Amz-Date=20250127T142522Z&X-Amz-Expires=300&X-
 * Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLWVhc3QtMSJIMEYCIQDZweo
 * 1CEqnaxzZU6kC3ED7NFwJvE78q3161ZVgKJdWYAIhAPAvq7OuD5m3BUiuAB1z3QAgJ
 * xg12wcqwBTwU0FRZ5YhKu8CCF8QABoMODkxMzc3MjkzNzg5IgyJ8cEMQQPo3Bvp0D8qzALliUBxH7OXqj3iZ5hlS4SflnfW
 * oprqog8gWCaRtOqc8S5JQsCf9Y%2B8sfCk7bsU%2B1tPvqSy2ONciSZCWmL%2B89JVIs1FLq8RA
 * ib1bVHkoFaoLh15PzbKHWCxBikDlhB8RcPnRC3nsW3DJNNbLxa%2BqCV1uQN1Pt%2FaRD2zfVeK%2Bl
 * n%2Be0tXbwXPRqxZhbudYoKy0vgmxgFpsRNLZlVtz26RUGgs1DiL%2BWi7a1hKb7Fibq76OhbtLRZ
 * mCwanMmMXi9nbGcicARqLi9O2IOpJNcuEZHNZDrWW%2F7DRj6eDd%2B1ZWB58cISrvSD6luCrNOHKp
 * xVijz5Q2N2rNujk%2Bjse4K8FBBUDxFgiVVRLRLOETmImpfjRz%2FwB7sq7FHPDAG58P0tNlVZ8b9p
 * N2klUAqTAxYamb2q6Rb5KKtbxJNsDjtVKk%2FED%2BhYE%2FFpVDemmhDEqbjCTi968BjqyAhIInfAp
 * vCd27SnJQHFAyPN0VitsC1D%2FaDz9c8jFLf95WVa1ESa230jD606LpaPQB10KDScXA0XLgjh4lMK3
 * VRxd69EMHlaJSI%2FLGfmBKp%2FKpZ72T%2FeA2r0lgC3UzZsoO3ROU0h6DExLwCpHcbky7Dh9SeWg
 * 9FWq0aC0pXSAH4IBACqkBpn4eQ9RipPbmb73fvtxW6%2BP9JNaJSy8q1zpMk7CHVrn8s6BMdZXjaxc4B
 * 9QlKx%2BOJ%2BYfPNwZHCQubOtNEG6Rct1RFdPWwPSSxywVJdemRFv79jlPVVhtciG
 * GfC9u%2FF3qmlN4jb3PHd9YlY6lSeL%2BXDupYgOfs8nHaQ%2FOQpzebe
 * %2FjA5kUYSWtU2oHL3Yw0Aec%2BJTQ9Wu3zo57SgExrU9DHiPMEL3uoeWrT5
 * 6fsm6%2FQ%3D%3D&X-Amz-Signature=f5bcf9717acd9227f05a486f52cdf313
 * 5c12633b3ce2412a674c16376f4a0f93&X-Amz-SignedHeaders=host&x-id=GetObject
 * 
 * 
 * 
 *  <div className='flex items-center justify-between py-5 font-medium'>
        /**<StorageImage alt="bitcoin" path="public/assets/bitcoinimage.jpeg" className='w-36' />
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/home' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/todo' className='flex flex-col items-center gap-1'>
            <p>Todo</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>
      </div>
      <div>Navbar</div>
 * 
 * 
 * 
 * 
 * 
 */