import React, { Component } from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
import { DefaultRoute, Link,  Route, RouteHandler } from 'react-router';
import View1 from './views/View1';

render(<View1 />, document.getElementById('app'));
