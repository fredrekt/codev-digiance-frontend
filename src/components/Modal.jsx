import React, { useState } from "react";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import Card from "./stripe/Card";
import axios from "axios";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      console.log(result.error.message);
    } else {
      stripeTokenHandler(result.token);
    }
  };

  const stripeTokenHandler = async (token) => {
    const paymentData = {token: token.id};
    // alert(JSON.stringify(paymentData))
    const res = await axios.post(`${process.env.REACT_APP_API}/stripe/charge`, 
        {
            stripeToken: paymentData.token
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    );
  
    console.log(res.data)
    return res.data
  }

  return (
    <>
    <div className="flex just-">
        <img  
        type="button"
        className="cursor-pointer w-16"
        title="Setup stripe payment"
        onClick={()=>setShowModal(true)}
        src="https://icon-library.com/images/stripe-icon/stripe-icon-23.jpg" alt="" />
    </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   Setup Stripe Payment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <Card/>
                    <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices eros elit, ac commodo magna pretium ac. Curabitur pellentesque, tortor accumsan condimentum tincidunt, tellus augue tempor felis, ut pulvinar tortor elit sit amet ipsum.
                    </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}