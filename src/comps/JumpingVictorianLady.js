import React from 'react';
import { Typography } from 'rmwc/Typography';
// comps
import SocialMediaLinks from './SocialMediaLinks';

const JumpingVictorianLady = () => {
    return (
        <div className={'footer'}>
            <img style={{ background: '#fff', padding: 10 }} src={'Rotoscoping.gif'}
                 alt={'rotoscoping gif'}/>
            <Typography use={'body1'}>
                <p>You know it's all over when the victorian lady jumps the stool.</p>
            </Typography>

            <SocialMediaLinks className={'footer--links'}/>
        </div>
    )
};

export default JumpingVictorianLady;