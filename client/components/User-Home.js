import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import './styles/User-Home.css';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {isLoggedIn, firstName, role} = props;

  return (
    <div className="page-wrap">
      <div className="component-wrap">
        <img
          src="https://images.unsplash.com/photo-1579005007697-75b2fe2c88e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          id="heroimg"
        ></img>
        <div id="main-page-wrapper">
          <div id="front-carousel">
            <div className="front-tags">
              <h3>POPULAR FLAVORS</h3>
              <p>
                <Link to="/products">SEE ALL</Link>
              </p>
            </div>
            <Carousel
              showArrows
              useKeyboardArrows
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={5000}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1529952711590-19ac6ec115a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
                  id="carousel-image"
                />
                <p className="legend">
                  Toffee cookie sweet roll gummies jujubes. Cotton candy
                  chocolate cake gingerbread cake. Gummies cake bonbon caramels
                  apple pie.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1321&q=80"
                  id="carousel-image"
                />
                <p className="legend">
                  Jelly-o jelly beans lollipop chupa chups sesame snaps.
                  Marzipan icing tiramisu tiramisu gummies dessert halvah apple
                  pie. Pie bear claw bear claw liquorice bonbon. Cake
                  marshmallow candy canes danish wafer ice cream marzipan.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                  id="carousel-image"
                />
                <p className="legend">
                  Icing donut dragée candy canes. Sweet roll wafer jelly beans.
                  Chocolate bar pudding gingerbread gingerbread candy chocolate
                  cake jelly-o jelly-o. Soufflé jelly gummi bears candy canes
                  pie gummies tootsie roll liquorice.
                </p>
              </div>
            </Carousel>
          </div>
          <div id="meet-team">
            <h3 id="meet-header">MEET THE TEAM</h3>

            <div id="members-div">
              <div className="team-member">
                <img
                  src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
                  className="member-photo"
                ></img>
                <h4>NAME LASTNAME</h4>
                <p>
                  Toffee cookie sweet roll gummies jujubes. Cotton candy
                  chocolate cake gingerbread cake.
                </p>
                <div className="member-links">
                  <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                  <FontAwesomeIcon icon={faGithubSquare} />
                  <FontAwesomeIcon icon={faEnvelope} className="email" />
                </div>
              </div>

              <div className="team-member">
                <img
                  src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
                  className="member-photo"
                ></img>
                <h4>NAME LASTNAME</h4>
                <p>
                  Toffee cookie sweet roll gummies jujubes. Cotton candy
                  chocolate cake gingerbread cake.
                </p>
                <div className="member-links">
                  <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                  <FontAwesomeIcon icon={faGithubSquare} />
                  <FontAwesomeIcon icon={faEnvelope} className="email" />
                </div>
              </div>

              <div className="team-member">
                <img
                  src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
                  className="member-photo"
                ></img>
                <h4>NAME LASTNAME</h4>
                <p>
                  Toffee cookie sweet roll gummies jujubes. Cotton candy
                  chocolate cake gingerbread cake.
                </p>
                <div className="member-links">
                  <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                  <FontAwesomeIcon icon={faGithubSquare} />
                  <FontAwesomeIcon icon={faEnvelope} className="email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    firstName: state.user.firstName,
    role: state.user.role,
    isLoggedIn: !!state.user.id,
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
};
