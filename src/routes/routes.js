import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Letter from '../pages/Letter'
import WeekDrink from '../pages/WeekDrink'

export default function Routes () {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/letter" component={Letter}/>
        <Route path="/weekdrink" component={WeekDrink}/>
      </Switch>
    )
}
