import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeadlineLink.scss';

export interface IHeadlineLinkProps {
    routerPath?: string,
    title: string,
}

export const HeadlineLink = ({
    routerPath = "",
    title,
}: IHeadlineLinkProps) => (
    <NavLink
        to={routerPath}
        className="headlineLink"
    >
        <h1>{title}</h1>
    </NavLink>
);