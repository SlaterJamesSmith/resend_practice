// This is where you will build an email template using React!
// Build from scratch using react.email components (https://react.email/components)
// Or work from a template using react.email templates (https://react.email/templates)
// The following example was built using this template: https://demo.react.email/preview/notifications/github-access-token?view=source&width=1024&height=600

// Note that this template may be based on an older version of Tailwind
// If you are working in Tailwind v4 and seeing errors related to 'config' and 'tailwindConfig': 
// Step 1: Try installing: npm install -D tailwindcss postcss autoprefixer
// Step 2: Ensure you have a tailwind.config.js file
// Step 3: Try installing Tailwind v3

// Note that template content is commented out below and replaced with new email copy

import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
  } from '@react-email/components';
  import tailwindConfig from '../tailwind.config';
  
  interface GithubAccessTokenEmailProps {
    username?: string;
  }
  
  // const baseUrl = process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : '';
  
  export const PaymentFailureTemplate = ({
    username,
  }: GithubAccessTokenEmailProps) => (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className="bg-white text-[#24292e] font-github">
          <Preview>
            Please update your details
            {/* A fine-grained personal access token has been added to your account */}
          </Preview>
          <Container className="max-w-[480px] mx-auto my-0 pt-5 pb-12 px-0">
            {/* <Img
              src={`${baseUrl}/static/github.png`}
              width="32"
              height="32"
              alt="Github"
            /> */}
  
            <Text className="text-[24px] leading-[1.25]">
              Please update your billing method 💸😅
              {/* <strong>@{username}</strong>, a personal access was created on your */}
              {/* account. */}
            </Text>
  
            <Section className="p-6 border border-solid border-[#dedede] rounded-[5px] text-center">
              <Text className="mb-[10px] mt-0 text-left">
                Hello there!{/* Hey <strong>{username}</strong>! */}
              </Text>
              <Text className="mb-[10px] mt-0 text-left">
                Unfortunately your payment failed to process. Please contact us at team@example.com to update your payment method.
                {/* A fine-grained personal access token (<Link>resend</Link>) was
                recently added to your account. */}
              </Text>
  
              {/* <Button className="text-sm bg-[#28a745] text-white leading-normal rounded-lg py-3 px-6">
                View your token
              </Button> */}
            </Section>
            {/* <Text className="text-center">
              <Link className="text-[#0366d6] text-[12px]">
                Your security audit log
              </Link>{' '}
              ・{' '}
              <Link className="text-[#0366d6] text-[12px]">Contact support</Link>
            </Text> */}
  
            <Text className="text-[#6a737d] text-xs leading-[24px] text-center mt-[60px] mb-4">
              ACME ・Route 66 ・Atlantis, ND 101010
              {/* GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107 */}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  PaymentFailureTemplate.PreviewProps = {
    username: 'alanturing',
  } as GithubAccessTokenEmailProps;
  
  export default PaymentFailureTemplate;
  