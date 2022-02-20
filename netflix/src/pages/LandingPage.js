import React from "react";
import { Link } from "react-router-dom";
import LandingFaqs from "../components/LandingFaqs";
import "./LandingPage.css";

const LandingPage = () => {
  const faqList = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    },
  ];
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
        <div className="faqs">
          {faqList.map((faq, index) => {
            const { question, answer } = faq;
            return (
              <LandingFaqs question={question} answer={answer} key={index} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
