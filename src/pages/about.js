import React from "react";
import Head from "next/head";
import Layout from "components/Layout";
import Breadcrumb from "components/Breadcrumb";
import styled from "@emotion/styled";
import tw from "twin.macro";

const AboutContainer = styled.div`
  ${tw`min-h-screen bg-black text-white`}
`;

const Content = styled.div`
  ${tw`container mx-auto px-4 py-8 md:py-20`}
`;

const Title = styled.h1`
  ${tw`text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 text-center`}
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  ${tw`text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto text-center mb-8 md:mb-12 px-4`}
`;

const FeatureGrid = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-16`}
`;

const FeatureCard = styled.div`
  ${tw`bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300`}
`;

const FeatureTitle = styled.h3`
  ${tw`text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400`}
`;

const FeatureDescription = styled.p`
  ${tw`text-sm md:text-base text-gray-400 leading-relaxed`}
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Metamine</title>
        <meta name="description" content="Learn more about Metamine and our mission" />
      </Head>
      
      <AboutContainer>
        <Content>
          <Breadcrumb />
          <Title>About Metamine</Title>
          <Description>
            Metamine is a revolutionary platform that combines cutting-edge technology 
            with innovative earning opportunities. We&apos;re building the future of 
            decentralized finance and digital asset management.
          </Description>

          <FeatureGrid>
            <FeatureCard>
              <FeatureTitle>🚀 Innovation</FeatureTitle>
              <FeatureDescription>
                We leverage the latest blockchain technology to create secure, 
                transparent, and efficient financial solutions.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>💎 Security</FeatureTitle>
              <FeatureDescription>
                Your assets are protected by state-of-the-art security measures 
                and smart contract technology.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>📈 Growth</FeatureTitle>
              <FeatureDescription>
                Join our community and grow your wealth through our innovative 
                earning mechanisms and investment opportunities.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>🌍 Global</FeatureTitle>
              <FeatureDescription>
                Access our platform from anywhere in the world, 24/7, 
                with instant transactions and real-time updates.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>🤝 Community</FeatureTitle>
              <FeatureDescription>
                Be part of a thriving community of investors, developers, 
                and blockchain enthusiasts.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>🔮 Future</FeatureTitle>
              <FeatureDescription>
                We&apos;re constantly evolving and adding new features to stay 
                ahead of the curve in the DeFi space.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </Content>
      </AboutContainer>
    </Layout>
  );
} 