import React from 'react';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';
import { HeadlineLink } from 'components/presentational/HeadlineLink/HeadlineLink';
import { CONTRIBUTE_PAGE_PATHNAME } from 'components/containers/ContributePage/ContributePage';

import './LandingPage.scss';

export const LandingPage = () => (
    <FlexBox
        className="landingPage"
        direction="column"
        justify="center"
        alignItems="center"
    >
        <FlexBox direction="column">
            <HeadlineLink title="learn" routerPath={LANDING_PAGE_PATHNAME}/>
            <HeadlineLink title="contribute" routerPath={CONTRIBUTE_PAGE_PATHNAME}/>
        </FlexBox>
    </FlexBox>
)

export const LANDING_PAGE_PATHNAME = "/landingPage"
