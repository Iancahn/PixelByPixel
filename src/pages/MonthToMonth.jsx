import React from 'react';
// import components
import ServiceHeader from '../components/ServiceHeader';
import Calltoaction from '../components/Calltoaction';

function MonthToMonth(props) {
    return (
        <div>
            <div className="month-to-month-header">
                <div className="container2">
                    <ServiceHeader title="Get your website designed without breaking the bank." type="MONTH TO MONTH PACKAGES" />
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

export default MonthToMonth;