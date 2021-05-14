import React from 'react'

export default function PayFastButton({ price }) {

    const paymentData = {
        merchant_id : 10000100,
        merchant_key: '46f0cd694581a',
        amount: price,
        signature:true,
        item_name: 'Lip-In.Org Donation'
    };

    return (
        <div>
                <a href={`https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=17584058&item_name=Donation&item_description=Donation&amount=${price}&return_url=https://www.anmlfarm.com/checkout/success&cancel_url=https://Fwww.anmlfarm.com/checkout/cancel`}>
                    DONATE NOW
                </a>
            {/* <a href="https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=17584058&amp;item_name=Early+Adopter+Subscription&amp;item_description=Monthly+subscription+to+ANML+FARM+platform&amp;amount=0.00&amp;return_url=https%3A%2F%2Fwww.anmlfarm.com%2Fcheckout%2Fsuccess&amp;cancel_url=https%3A%2F%2Fwww.anmlfarm.com%2Fcheckout%2Fcancel&amp;cycles=0&amp;frequency=3&amp;m_payment_id=pay_now_17584058&amp;subscription_type=1&amp;recurring_amount=250.00"><img src="https://www.payfast.co.za/images/buttons/light-small-subscribe.png" width="210" height="36" alt="Subscribe" title="Subscribe Now with PayFast" /></a> */}
        </div>
    )
}
