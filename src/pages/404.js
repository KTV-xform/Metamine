import React from "react";
import Head from "next/head";
import { Button } from "antd";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import tw from "twin.macro";

const NotFoundContainer = styled.div`
  ${tw`min-h-screen bg-black text-white flex items-center justify-center px-4`}
`;

const Content = styled.div`
  ${tw`text-center max-w-2xl mx-auto`}
`;

const Title = styled.h1`
  ${tw`text-5xl sm:text-6xl md:text-8xl font-bold mb-4`}
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.h2`
  ${tw`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-300`}
`;

const Description = styled.p`
  ${tw`text-base sm:text-lg text-gray-400 mb-6 md:mb-8 leading-relaxed`}
`;

const ButtonGroup = styled.div`
  ${tw`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center`}
`;

const StyledButton = styled(Button)`
  ${tw`h-10 md:h-12 px-6 md:px-8 text-sm md:text-base`}
`;

export default function Custom404() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <NotFoundContainer>
      <Head>
        <title>404 - Page Not Found | Metamine</title>
        <meta name="description" content="Page not found" />
      </Head>

      <Content>
        <Title>404</Title>
        <Subtitle>Oops! Page Not Found</Subtitle>
        <Description>
          The page you&apos;re looking for doesn&apos;t exist. 
          It might have been moved, deleted, or you entered the wrong URL.
        </Description>
        
        <ButtonGroup>
          <StyledButton
            type="primary"
            size="large"
            onClick={handleGoHome}
            className="bg-blue-600 hover:bg-blue-700 border-none"
          >
            Go Home
          </StyledButton>
          <StyledButton
            size="large"
            onClick={handleGoBack}
            className="border-gray-600 text-white hover:border-blue-500 hover:text-blue-400"
          >
            Go Back
          </StyledButton>
        </ButtonGroup>
      </Content>
    </NotFoundContainer>
  );
} 