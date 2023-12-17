import {useSpring, animated} from "react-spring";
import PropTypes from 'prop-types';

function Number({n}) {
    const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 200,
        config: {mass: 1, tension: 20, friction: 10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

Number.propTypes = {
    n: PropTypes.number.isRequired,
};

function YellowSection() {
    return (
        <div>
            <div className="yellow__main">

                <div className="col__1">
                    <div className="col__1--hdl"><h2><Number n={10}/></h2></div>
                    <div className="col__1--title"><p>ODDANYCH WORKÓW</p></div>
                    <div className="col__1--pargraf"><p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p></div>
                </div>

                <div className="col__1">
                    <div className="col__1--hdl"><h2><Number n={5}/></h2></div>
                    <div className="col__1--title"><p>WSPARTYCH ORGANIZACJI</p></div>
                    <div className="col__1--pargraf"><p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p></div>
                </div>

                <div className="col__1">
                    <div className="col__1--hdl"><h2><Number n={7}/></h2></div>
                    <div className="col__1--title"><p>ZORGANIZOWANY ZBIÓREK</p></div>
                    <div className="col__1--pargraf"><p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.
                    </p></div>
                </div>

            </div>
        </div>
    );
}

export default YellowSection;