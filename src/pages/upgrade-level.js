import React, { useState } from "react";
import Head from "next/head";
import Layout from "components/Layout";
import Breadcrumb from "components/Breadcrumb";
import { Card, Button, Progress, Badge, Modal, message } from "antd";
import styled from "@emotion/styled";
import tw from "twin.macro";

const UpgradeContainer = styled.div`
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
  ${tw`text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4`}
`;

const LevelGrid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8`}
`;

const LevelCard = styled(Card)`
  ${tw`bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer`}
  
  .ant-card-head {
    ${tw`border-gray-700`}
  }
  
  .ant-card-head-title {
    ${tw`text-white text-lg md:text-xl`}
  }
  
  .ant-card-body {
    ${tw`p-4 md:p-6`}
  }
`;

const CurrentLevel = styled.div`
  ${tw`text-center mb-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg`}
`;

const LevelIcon = styled.div`
  ${tw`text-4xl md:text-5xl mb-4`}
`;

const LevelTitle = styled.h2`
  ${tw`text-2xl md:text-3xl font-bold mb-2`}
`;

const LevelDescription = styled.p`
  ${tw`text-gray-200 text-sm md:text-base`}
`;

const BenefitsList = styled.ul`
  ${tw`space-y-2 mt-4`}
`;

const BenefitItem = styled.li`
  ${tw`flex items-center text-sm md:text-base text-gray-300`}
  
  .icon {
    ${tw`mr-2 text-green-400`}
  }
`;

const UpgradeButton = styled(Button)`
  ${tw`w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none text-white font-semibold text-base`}
`;

const RequirementsSection = styled.div`
  ${tw`mt-8 p-6 bg-gray-900 rounded-lg border border-gray-800`}
`;

const RequirementsTitle = styled.h3`
  ${tw`text-xl font-semibold mb-4 text-blue-400`}
`;

const RequirementItem = styled.div`
  ${tw`flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0`}
`;

const RequirementLabel = styled.span`
  ${tw`text-gray-300`}
`;

const RequirementValue = styled.span`
  ${tw`font-semibold`}
`;

const levels = [
  {
    id: 1,
    name: "Bronze",
    icon: "🥉",
    color: "#cd7f32",
    description: "Beginner level with basic benefits",
    benefits: [
      "Daily rewards: $10",
      "Transaction fee: 2%",
      "Support: Email only",
      "Withdrawal limit: $100/day"
    ],
    requirements: {
      investment: "$0",
      referrals: "0",
      days: "0"
    },
    current: true
  },
  {
    id: 2,
    name: "Silver",
    icon: "🥈",
    color: "#c0c0c0",
    description: "Intermediate level with enhanced benefits",
    benefits: [
      "Daily rewards: $25",
      "Transaction fee: 1.5%",
      "Support: Email + Chat",
      "Withdrawal limit: $500/day"
    ],
    requirements: {
      investment: "$1,000",
      referrals: "5",
      days: "30"
    },
    current: false,
    canUpgrade: true
  },
  {
    id: 3,
    name: "Gold",
    icon: "🥇",
    color: "#ffd700",
    description: "Advanced level with premium benefits",
    benefits: [
      "Daily rewards: $50",
      "Transaction fee: 1%",
      "Support: Priority 24/7",
      "Withdrawal limit: $1,000/day"
    ],
    requirements: {
      investment: "$5,000",
      referrals: "15",
      days: "60"
    },
    current: false,
    canUpgrade: false
  },
  {
    id: 4,
    name: "Platinum",
    icon: "💎",
    color: "#e5e4e2",
    description: "Elite level with exclusive benefits",
    benefits: [
      "Daily rewards: $100",
      "Transaction fee: 0.5%",
      "Support: VIP dedicated",
      "Withdrawal limit: $5,000/day"
    ],
    requirements: {
      investment: "$25,000",
      referrals: "50",
      days: "90"
    },
    current: false,
    canUpgrade: false
  },
  {
    id: 5,
    name: "Diamond",
    icon: "👑",
    color: "#b9f2ff",
    description: "Ultimate level with maximum benefits",
    benefits: [
      "Daily rewards: $200",
      "Transaction fee: 0%",
      "Support: Personal manager",
      "Unlimited withdrawals"
    ],
    requirements: {
      investment: "$100,000",
      referrals: "100",
      days: "180"
    },
    current: false,
    canUpgrade: false
  }
];

export default function UpgradeLevel() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [upgradeModalVisible, setUpgradeModalVisible] = useState(false);

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
  };

  const handleUpgrade = () => {
    if (!selectedLevel) return;
    
    Modal.confirm({
      title: `Upgrade to ${selectedLevel.name} Level`,
      content: `Are you sure you want to upgrade to ${selectedLevel.name} level? This will unlock new benefits and features.`,
      okText: "Upgrade Now",
      cancelText: "Cancel",
      okButtonProps: { 
        className: "bg-blue-600 hover:bg-blue-700 border-none" 
      },
      onOk: () => {
        message.success(`Successfully upgraded to ${selectedLevel.name} level!`);
        setUpgradeModalVisible(false);
        setSelectedLevel(null);
      }
    });
  };

  const currentLevel = levels.find(level => level.current);

  return (
    <Layout>
      <Head>
        <title>Upgrade Level - Metamine</title>
        <meta name="description" content="Upgrade your Metamine level to unlock more benefits" />
      </Head>
      
      <UpgradeContainer>
        <Content>
          <Breadcrumb />
          <Title>Upgrade Your Level</Title>
          <Description>
            Unlock exclusive benefits and maximize your earnings by upgrading your account level. 
            Each level provides better rewards, lower fees, and enhanced support.
          </Description>

          {currentLevel && (
            <CurrentLevel>
              <LevelIcon>{currentLevel.icon}</LevelIcon>
              <LevelTitle>Current Level: {currentLevel.name}</LevelTitle>
              <LevelDescription>{currentLevel.description}</LevelDescription>
              <Progress 
                percent={75} 
                strokeColor="#3b82f6" 
                className="mt-4"
                format={() => "75% to next level"}
              />
            </CurrentLevel>
          )}

          <LevelGrid>
            {levels.map((level) => (
              <LevelCard
                key={level.id}
                title={
                  <div className="flex items-center justify-between">
                    <span>{level.icon} {level.name}</span>
                    {level.current && (
                      <Badge status="processing" text="Current" />
                    )}
                    {level.canUpgrade && (
                      <Badge status="success" text="Available" />
                    )}
                  </div>
                }
                onClick={() => handleLevelClick(level)}
                className={selectedLevel?.id === level.id ? "ring-2 ring-blue-500" : ""}
              >
                <p className="text-gray-300 mb-4">{level.description}</p>
                
                <BenefitsList>
                  {level.benefits.map((benefit, index) => (
                    <BenefitItem key={index}>
                      <span className="icon">✓</span>
                      {benefit}
                    </BenefitItem>
                  ))}
                </BenefitsList>

                {level.canUpgrade && (
                  <UpgradeButton
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLevel(level);
                      setUpgradeModalVisible(true);
                    }}
                    className="mt-4"
                  >
                    Upgrade to {level.name}
                  </UpgradeButton>
                )}

                {!level.current && !level.canUpgrade && (
                  <div className="mt-4 p-3 bg-gray-800 rounded text-center">
                    <p className="text-gray-400 text-sm">Requirements not met</p>
                  </div>
                )}
              </LevelCard>
            ))}
          </LevelGrid>

          {selectedLevel && (
            <RequirementsSection>
              <RequirementsTitle>
                Requirements for {selectedLevel.name} Level
              </RequirementsTitle>
              <div className="space-y-2">
                <RequirementItem>
                  <RequirementLabel>Minimum Investment</RequirementLabel>
                  <RequirementValue style={{ color: selectedLevel.color }}>
                    {selectedLevel.requirements.investment}
                  </RequirementValue>
                </RequirementItem>
                <RequirementItem>
                  <RequirementLabel>Referral Count</RequirementLabel>
                  <RequirementValue style={{ color: selectedLevel.color }}>
                    {selectedLevel.requirements.referrals} users
                  </RequirementValue>
                </RequirementItem>
                <RequirementItem>
                  <RequirementLabel>Account Age</RequirementLabel>
                  <RequirementValue style={{ color: selectedLevel.color }}>
                    {selectedLevel.requirements.days} days
                  </RequirementValue>
                </RequirementItem>
              </div>
            </RequirementsSection>
          )}

          <Modal
            title={`Upgrade to ${selectedLevel?.name} Level`}
            open={upgradeModalVisible}
            onOk={handleUpgrade}
            onCancel={() => setUpgradeModalVisible(false)}
            okText="Upgrade Now"
            cancelText="Cancel"
            okButtonProps={{ 
              className: "bg-blue-600 hover:bg-blue-700 border-none" 
            }}
          >
            <div className="text-gray-300">
              <p className="mb-4">
                You are about to upgrade to <strong className="text-white">{selectedLevel?.name}</strong> level.
              </p>
              <p className="mb-4">This will unlock:</p>
              <ul className="list-disc list-inside space-y-1">
                {selectedLevel?.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm">{benefit}</li>
                ))}
              </ul>
            </div>
          </Modal>
        </Content>
      </UpgradeContainer>
    </Layout>
  );
} 