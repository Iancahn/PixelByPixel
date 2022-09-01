import React from 'react';
// import components
import ServiceHeader from '../components/ServiceHeader';
import Calltoaction from '../components/Calltoaction';

function WebsiteDesign(props) {
    return (
        <div>
            <div className="website-design-header">
                <ServiceHeader title="This is the Website title" subheader="This is the subheader" />
                <div className='testdiv'>
                    <Calltoaction />
                </div>
            </div>
        </div>
    )
}

export default WebsiteDesign;