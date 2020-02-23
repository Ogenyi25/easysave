import React from "react";
import Navbar from "../partials/Navbar";




const Home = () => (
  <div className="home">
    <Navbar />

    {/*THE LANDING SECTION*/}
    <div className="body">
      <div className="landing row container-fluid">
        <div className="image-content col-md-6">
          <img className="img" src={require("../assets/images/wallet.png")} alt="" />
        </div>
        <div className="landing-content col-md-4">
          <h3 className="text">Let's help you save</h3>
          <p className="paragraph">We believe everyone deserves access to quality credit
          that improves their lifestyles.</p>
          <button type="button" className="btn btn-success">Get Started</button>
        </div>
      </div>
      <div className="how-it-work">
        <h5 className="title">How will this work?</h5>
        <div className="paragraph">
          At easySave, we offer several forms of savings with different outcomes.
          It's up to you then to pick the one that best suits your lifestlye.
        </div>
      </div>
    </div>

    {/*THE EASYSAVE SERVICES SECTION*/}

    <div className="pay-services row container-fluid">
      <div className="piggy-image col-md-5">
        <img className="piggy-bank" src={require("../assets/images/piggy-bank.png")} alt="" />
      </div>
      <div className="piggy-text col-md-6">
        <h6 className="title">Easy Save</h6>
        <p className="paragraph">
          Pick out the frequency of your savings, either daily, weekly, or monthly.
          You can also save as you go, or on your own terms.
        Withdrawals are free anytime <strong className="strong">(once you reach your set withdrawal date)</strong>
          and you are charged no interest rates.
        </p>
      </div>
    </div>

    {/*THE EASYSAVE LOCK SECTION*/}

    <div className="easysave-lock row container-fluid">
      <div className="lock-text col-md-6">
        <h6 className="title">Easy Lock</h6>
        <p className="paragraph">
          Lock your savings for a period ranging from 90 to 1000 days.
          Get interest on you savings calculated daily and paid monthly.
        </p>
      </div>
      <div className="lock-image col-md-4">
        <img className="lock" src={require("../assets/images/lock.png")} alt="" />
      </div>
    </div>


    {/*THE EASYSAVE TARGET SECTION*/}

    <div className="easysave-target row container-fluid">
      <div className="target-image col-md-5">
        <img className="target" src={require("../assets/images/target.png")} alt="" />
      </div>
      <div className="target-text col-md-6">
        <h6 className="title">Savings Target</h6>
        <p className="paragraph">
          Save to reach a particular goal. Choose what you want to save for and when you want to reach that goal.
          Attracting a 10% interest rate per annum and interest is calculated daily
        </p>
      </div>
    </div>

    {/*THE BENEFITS SECTION*/}

    <div className="benefits row container-fluid">
      <div className="saving-culture col-md-4">
        <img className="purse" src={require("../assets/images/purse.png")} alt="" />
        <h6 className="title">Saving Culture</h6>
        <p className="paragraph">
          We encourage you to save and give handsome reward for savings.
          Bringing you closer to living the kind of life you deserve.
        </p>
      </div>
      <div className="safe-secure col-md-4">
        <img className="shield" src={require("../assets/images/shield.png")} alt="" />
        <h6 className="title">Safe & Secure</h6>
        <p className="paragraph">
          Your informations are managed using the most secure technology
          solutions while adopting the best ethical standards.
        </p>
      </div>
      <div className="easy-access col-md-4">
        <img className="mobile-transfer" src={require("../assets/images/mobile-transfer.png")} alt="" />
        <h6 className="title">Easy Access</h6>
        <p className="paragraph">
          We ensure that you have access to your funds at all times.
          No need for any stressful application processes.
        </p>
      </div>
    </div>


      {/*FREQUENTLY ASKED QUESTIONS SECTION*/}
    <div className="questions-asked">
      <h5 className="title">Frequently Asked Questions</h5>
      <div className="questions row container-fluid">
        <div className="left-question col-md-4">
          <h6 className="list">1</h6>
          <p className="paragraph">Signing up, create a savings plan, and get a
            virtual credit card with your card details.</p>
          <h6 className="list2">2</h6>
          <p className="paragraph2">
            We place a limit, so you won’t spend more that what’s on you card.
            </p>
        </div>
        <div className="middle-question col-md-4">
          <img className="cards" src={require("../assets/images/cards.png")} alt="" />
          <h6 className="list">5</h6>
          <p className="paragraph">All spending done is your debt.
            Settled through automated monthly deductions from your salary account.
          </p>
        </div>
        <div className="right-question col-md-4">
          <h6 className="list">3</h6>
          <p className="paragraph">Signing up, create a savings plan, and get a
            virtual credit card with your card details.
          </p>
          <h6 className="list2">4</h6>
          <p className="paragraph2">
            We place a limit, so you won’t spend more that what’s on you card.
          </p>
          <img className="cards" src={require("../assets/images/Smiling-Woman.png")} alt="" />
        </div>
      </div>
    </div>

    {/*FOOTER SECTION*/}

    <div className="footer-section">
      <div className="footer-contents row container-fluid">
        <div className="easysave col-md-2">
          <h5 className="title">EASYSAVE</h5>
          <p className="paragraph">EasySave is a financial company incoporated in Abuja, Nigeria</p>
        </div>
        <div className="company col-md-2">
          <div className="title">Company</div>
          <p className="paragraph">
          <a href="" className="nav-links">About</a>
          <a href="" className="nav-links">How it works</a>
          <a href="" className="nav-links">FAQ</a>
          </p>
        </div>
        <div className="product col-md-3">
          <div className="title">Products</div>
          <p className="paragraph">
          <a href="" className="nav-links">EasySave</a>
          <a href="" className="nav-links">EasyLock</a>
          <a href="" className="nav-links">SavingsTarget</a>
          </p>
        </div>
        <div className="newsletter col-md-2">
          <div className="title">NewsLetter</div>
          <input type="text" className="input" />
          <button type="button" className="btn btn-info">Join</button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
