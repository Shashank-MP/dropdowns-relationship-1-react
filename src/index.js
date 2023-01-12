import React from 'react';
import ReactDOM from 'react-dom/client';
import TopBar from './component/topbar.js';
//import DropdownExampleSearchDropdown from './component/dropdown.js';
import 'semantic-ui-css/semantic.min.css'
import AnotherGridLayout from './dropdowngrid.js';
// import Example from "./component/dropdown2";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <TopBar></TopBar>
  <AnotherGridLayout></AnotherGridLayout>
  </div>
   
);
