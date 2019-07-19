import React, { Fragment } from 'react';
import UseStateTest from './test1/UseStateTest';
import UseStateTest2 from './test1/UseStateTest2';
import UseEffectTest from './test1/UseEffectTest';

export default function Test1() {
    return (
        <Fragment>
            <h1>Test1</h1>
            <UseStateTest />
            <UseStateTest2 />
            <UseEffectTest />
        </Fragment>
    )
}