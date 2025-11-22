// Commented notes below are meant as a guide to help you re-create this project from scratch in your own project file

// To send an email using the App Router, begin by creating an an API route to a file like this one (ex. app/api/send/route.ts)
// This is for server-side sending. To explore Sender Actions for client-side sending, see here: https://resend.com/docs/send-with-nextjs
// This is a Next.js project bootstrapped with 'create-next-app'

import { NextResponse } from 'next/server';

// Be sure Resend is installed for your project using 'npm install resend' in your terminal at the project level
// then import the Resend function as shown:

import { Resend } from 'resend';

// Next, we will create an email template! Create a new components file (ex. app/components/email-templates.tsx)
// Visit the example email-template file in this project 
// Once you've completed your email-template file, you can return here

// Now that our email-template is built, we will want to import it here:

import { PaymentFailureTemplate } from '../../../components/email-templates';

// Create a Resend account if you haven't already at https://resend.com
// Create a new API key at https://resend.com/api-keys
// Create a new .env file including RESEND_API_KEY=[YOUR API KEY]

const resend = new Resend(process.env.RESEND_API_KEY);

// Authenticate your Domain in Resend - see here: https://resend.com/docs/dashboard/domains/introduction
// Run 'npm run dev' in your terminal and navigate to http://localhost:3000/api/send
// This will send an email

export async function GET() {
    try {
        const { data } = await resend.emails.send({
        from: '[YOUR SENDING DOMAIN]', // ex. 'team@updates.example.com'
        to: '[YOUR RECIPIENT EMAIL]', // ex. 'example@gmail.com'
        subject: 'Payment Failure',
        react: PaymentFailureTemplate({})
        });

        return NextResponse.json( data );
    }   catch (error) {
        return NextResponse.json({ error })
    }
}

