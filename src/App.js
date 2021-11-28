import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GifApp from './gifApp/GifApp';
import TodoApp from './todoApp/TodoApp';


const App = () => {
    return (
        <Router>
			<Routes>
				<Route exact path="/" element={ <TodoApp/> } />
            	<Route path="/todoapp" element={ <TodoApp/> }/>
				<Route path="/gifapp" element={ <GifApp/> }/>
			</Routes>
        </Router>
    )
}

export default App;
