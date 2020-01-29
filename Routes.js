import React from 'react'
import {Router, Scene} from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'

const Routes = () => (
    <Router>
        <Stack key = "root">
            <Scene key="home" component = {Home} title="Home" initial = {true}/>
            <Scene key= "about" component={About} title = "About" />
        </Stack>
    </Router>
)
export default Routes
