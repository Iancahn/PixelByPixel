import React from 'react';
// import components
import ServiceHeader from '../components/ServiceHeader';
import Calltoaction from '../components/Calltoaction';

function WebsiteDesign(props) {
    return (
        <div>
            <div className="website-design-header">
                <div className="container2">
                    <ServiceHeader title="Bringing your ideas to life with great website design." type="WEBSITE DESIGN" />
                </div>
            </div>
            <section>
                <div className="container2">
                    <div className="blackbox">
                        <h2>Hello</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, corrupti? Id nulla reprehenderit quibusdam, officia veniam nemo amet obcaecati animi vel laborum provident quidem tenetur! Quos odio, numquam eveniet quidem a unde placeat, minus dolores dignissimos non praesentium facere sit architecto, ullam error pariatur atque at cupiditate sint debitis! Molestias?</p>
                    </div>
                </div>
            </section>
            <div className="container2">
                Test
            </div>
            <section>
                <div className="container2">
                    <div>Test</div>
                </div>
            </section>
            <div className='testdiv'>
                <Calltoaction />
            </div>
        </div>
    )
}

export default WebsiteDesign;