import React, { Fragment } from 'react';
import UseStateTest from './test/UseStateTest';
import UseStateTest2 from './test/UseStateTest2';
import UseEffectTest from './test/UseEffectTest';

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