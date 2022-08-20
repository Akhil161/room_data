import React from "react";
import "./Summary.css";
import {plan} from './Paymentobj'

export default function Summary() {
  return (
    <>
      <div className="summary-title-cont">
        <div className="summary-title-inner">
          <span
            style={{
              fontWeight: "400",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >
            Your Smart home is
          </span>
          <br />
          <span
            style={{
              fontWeight: "700",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >
            one click away!
          </span>
        </div>
      </div>

      <div className="summary-rooms-cont">
        <div className="summary-rooms-inner-cont">
          <div className="summary-room-details">
            <span className="summary-room-name">Living Room</span>
            <span className="summary-room-cutomize">Customize</span>
            <span className="summary-room-money">₹ 150</span>
          </div>
          <div className="summary-room-details">
            <span className="summary-room-name">Dinving Room</span>
            <span className="summary-room-cutomize">Customize</span>
            <span className="summary-room-money">₹ 150</span>
          </div>
          <div className="summary-room-details">
            <span className="summary-room-name">Living Room</span>
            <span className="summary-room-cutomize">Customize</span>
            <span className="summary-room-money">₹ 150</span>
          </div>
          <div className="summary-room-details">
            <span className="summary-room-name">Living Room</span>
            <span className="summary-room-cutomize">Customize</span>
            <span className="summary-room-money">₹ 150</span>
          </div>
          <div className="summary-room-details">
            <span className="summary-room-name">Dinving Room</span>
            <span className="summary-room-cutomize">Customize</span>
            <span className="summary-room-money">₹ 150</span>
          </div>
          <div className="summary-room-details">
            <span className="summary-room-name">Living Room</span>
            <span className="summary-room-cutomize">Customize</span>
            <span className="summary-room-money">₹ 150</span>
          </div>
          <div className="summary-room-details">
            <span className="summary-room-name">Dinving Room</span>
            <span className="summary-room-cutomize">Customize</span>
            <span className="summary-room-money">₹ 150</span>
          </div>
        </div>
      </div>

      <div className="summary-room-frequantBuy-conyainer">
        <div className="summary-room-frequantBuy-tit">
          <span className="summary-room-frequantBuy-title">
            Frequently Brought Together
          </span>
        </div>
        <div className="summary-room-frequantBuy-product">
          <div className="summary-room-frequantBuy-product-img">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/remote.png"}
                alt="remote"
              ></img>
            </div>
          </div>
          <div className="summary-room-frequentBuy-inner-cont">
            <div className="summary-room-frequentBuy-inner-title">
              Universal Remote
            </div>
            <div className="summary-room-frequentBuy-inner-subtitle">
              Control a room’s remotes smartly & via your voice
            </div>
            <div className="summary-room-frequentBuy-inner-bottom">
              <div className="summary-room-frequentBuy-inner-bottom-perMonth">
                ₹ 60/m
              </div>
              <div className="summary-room-frequentBuy-inner-bottom-btn">
                Add
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-room-offer-discount-container">
        <div className="summary-room-offer-discount-title">
          Offers and Discount
        </div>
        <div className="summary-room-offer-discount-main-container">
          <div className="summary-room-offer-discount-main-container-money">
            ₹199 total savings
          </div>
          <div className="summary-room-offer-discount-main-container-promocode">
            with TRYNEW coupon
          </div>
        </div>
      </div>
      <div className="summary-room-offer-discount-container">
        <div className="summary-room-offer-discount-title">
          Installation and Onboarding
        </div>
        <div className="summary-room-installation-main-container">
          <div className="summary-room-offer-installion-main-container-promocode">
            Installation and Onboarding
          </div>
          <div className="summary-room-offer-installion-main-container-money">
            ₹ 400 for this plan
          </div>
        </div>
      </div>
      <div className="summary-room-offer-discount-container">
        <div className="summary-room-offer-discount-title">Bill</div>
      </div>

      <div className="summary-room-bill-details-container">
        <div className="summary-room-bill-details-container-inner">
          <div className="summary-room-bill-details-container-inner-upper">
           <div className="summary-room-bill-details-container-inner-upper-bills"> <span className="inner">One time Securiy</span>  <span className="inner1">₹ 2000</span> </div>
           <div className="summary-room-bill-details-container-inner-upper-bills"> <span className="inner">Installation Fee</span>  <span className="inner1">₹ 400</span> </div>
           <div className="summary-room-bill-details-container-inner-upper-bills"> <span className="inner">1 month fee</span>  <span className="inner1">₹ 450</span> </div>
          </div>
       
          <div className="summary-room-bill-details-container-line-cont">
          <div class="line"></div>
          <div className="summary-room-bill-details-container-line-cont-details"><span className="inner">Discount</span><span className="inner1" style={{color:"#189E71"}}>- ₹ 100</span></div>
          
          <div class="line"></div>
          <div className="summary-room-bill-details-container-line-cont-details"><span className="inner">Taxes</span><span className="inner1">₹ 100</span></div>
          <div class="line"></div>
          <div className="summary-room-bill-details-container-line-cont-details"><span className="pay-to-inner">To pay</span><span className="inner1">₹ 2850</span></div>
        </div>
        </div>
      </div>
      <div className="summary-room-offer-discount-container marginBottom">
        <div className="summary-room-offer-discount-title">
          Payment Plans
        </div>
        {
          plan.length!==0 ?
          plan.map((e,i)=>{
              return(
                <div className="summary-roam-payment-plan-conainer">
                <div className="summary-roam-payment-plan-conainer-time">{e.time}</div>
                <div className="summary-roam-payment-plan-conainer-middle">
                  <div className="summary-roam-payment-plan-conainer-middle-upper">{e.upper}</div>
                  <div className="summary-roam-payment-plan-conainer-middle-bottom">{e.lower}</div>
                </div>
                <div className="summary-roam-payment-plan-conainer-bottom-rs">₹ {e.Rs}/m</div>
              </div>
              )
          }):null
        }
        
        </div>
        <div className="summary-roam-payment-page-payment-container">
          <div className="bottom-line"></div>
          <div>
            <div className="summary-roam-payment-page-payment-container-rs">₹ 2850</div>
            <div className="summary-roam-payment-page-payment-container-details">View Detailed Bill</div>
          </div>
          <div className="summary-roam-payment-page-payment-container-btn">Proceed to Pay</div>
        </div>
    </>
  );
}
