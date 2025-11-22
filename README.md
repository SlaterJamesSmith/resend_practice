

# Resend / React.email Template

### Description
This project is meant as a guide and template for sending an email via a basic API App Router using [Resend](https://resend.com/) for email message automation handling & [react.email](https://react.email/) for message design

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

You can either use this project as a guide to *create your own project* from scratch or you can download and run this project as a template in your own dev environment.



## Option 1: Create Your Own Project
To use this project as a guide to *create your own project* from scratch, reference [this video walkthrough](https://www.loom.com/share/c06c3a398bd347f88b1d95b23432f863) and read the commented notes in the project's 'route.ts' and 'email-templates.tsx' files. Specific file paths are:

- resend_practice/app/api/send/route.ts
- resend_practice/components/email-templates.tsx


## Option 2: Send Email Using This Project
To send emails using *this project*, download this repository and follow the steps below:

### Account & Domain Config
- __Step 1:__ Create your free Resend account at https://resend.com
- __Step 2:__ Create and authenticate your new sending domain in the in your Resend account at https://resend.com/domains - follow [this documentation](https://resend.com/docs/dashboard/) for guidance 
- __Step 3:__ Create a new Resend API key at https://resend.com/api-keys

### Update .env File
- __Step 4:__ Navigate to and open the .env file (resend_practice/.env)
- __Step 5:__ Replace [YOUR API KEY] withthe API key you created in '__Step 3__' above. Save the file

### Update route.ts File
- __Step 6:__ Navigate to and open the route.ts file (resend_practice/app/api/send/route.ts)
- __Step 7:__ Replace [YOUR SENDING DOMAIN] with an email address you wish to send from. Make sure to use the sending domain you created in resend (ex. team@updates.example.com)
- __Step 8:__ Replace [YOUR RECIPIENT EMAIL] with an email address you wish to send to. Save the file

### Send Your Email!
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000/api/send](http://localhost:3000/api/send) with your browser to see the result.

If you see an "id" returned on load in your browser window, an email has been sent. If it throws an error, double check that your API key and email sending domain have been set up correctly in your Resend account.
