import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="get-started">
        <nav className="navbar">
          <Link to="/">
            <img
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="netflix logo"
            />
          </Link>
          <button>Sign In</button>
        </nav>
        <div className="email-box">
          <h1>
            Unlimited movies, TV <br />
            shows and more.
          </h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <input type="text" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </div>

      <div className="info-1">
        <div className="info-img">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        </div>
        <div className="info-text">
          <h1>
            Download your shows
            <br /> to watch offline.
          </h1>
          <p>
            Save your favourites easily and always have
            <br /> something to watch.
          </p>
        </div>
      </div>

      <div className="info-2">
        <div className="info-text">
          <h1>
            Create profiles for
            <br /> children.
          </h1>
          <p>
            Send children on adventures with their
            <br /> favourite characters in a space made just for
            <br /> them—free with your membership.
          </p>
        </div>
        <div className="info-img">
          <img src="https://occ-0-4209-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" />
        </div>
      </div>

      <div className="faq">
        <h1>Frequently Asked Questions</h1>
      </div>
    </>
  );
};

export default LandingPage;
