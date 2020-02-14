import React, { Fragment } from 'react';
import Form from './Form';
import LeadersList from './LeadersList';

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <LeadersList />
        </ Fragment>
    )
}
