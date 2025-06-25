import React from "react";
import Head from "next/head";
import Layout from "components/Layout";
import Breadcrumb from "components/Breadcrumb";
import { Card, Statistic, Progress } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import tw from "twin.macro";

const DashboardContainer = styled.div`
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

const StyledCard = styled(Card)`
  ${tw`bg-gray-900 border-gray-800`}
  
  .ant-card-head {
    ${tw`border-gray-700`}
  }
  
  .ant-card-head-title {
    ${tw`text-white text-sm md:text-base`}
  }
  
  .ant-statistic-title {
    ${tw`text-gray-400 text-xs md:text-sm`}
  }
  
  .ant-statistic-content {
    ${tw`text-white text-lg md:text-xl lg:text-2xl`}
  }
`;

const StatsGrid = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8`}
`;

const ChartSection = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6`}
`;

const QuickActionsGrid = styled.div`
  ${tw`grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4`}
`;

const ActionButton = styled.button`
  ${tw`w-full p-3 md:p-4 rounded-lg text-white font-medium transition-colors text-sm md:text-base`}
`;

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard - Metamine</title>
        <meta name="description" content="Your Metamine dashboard and statistics" />
      </Head>
      
      <DashboardContainer>
        <Content>
          <Breadcrumb />
          <Title>Dashboard</Title>

          <StatsGrid>
            <StyledCard>
              <Statistic
                title="Total Balance"
                value={11280}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix="$"
                suffix={<ArrowUpOutlined />}
              />
            </StyledCard>

            <StyledCard>
              <Statistic
                title="Active Investments"
                value={8}
                valueStyle={{ color: "#1890ff" }}
              />
            </StyledCard>

            <StyledCard>
              <Statistic
                title="Monthly Return"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix="%"
                suffix={<ArrowUpOutlined />}
              />
            </StyledCard>

            <StyledCard>
              <Statistic
                title="Total Transactions"
                value={93}
                valueStyle={{ color: "#1890ff" }}
              />
            </StyledCard>
          </StatsGrid>

          <ChartSection>
            <StyledCard title="Portfolio Performance">
              <div className="space-y-3 md:space-y-4">
                <div>
                  <div className="flex justify-between text-xs md:text-sm mb-2">
                    <span className="text-gray-400">BTC</span>
                    <span className="text-green-400">+15.2%</span>
                  </div>
                  <Progress 
                    percent={75} 
                    strokeColor="#52c41a" 
                    showInfo={false}
                    className="mb-3 md:mb-4"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between text-xs md:text-sm mb-2">
                    <span className="text-gray-400">ETH</span>
                    <span className="text-green-400">+8.7%</span>
                  </div>
                  <Progress 
                    percent={60} 
                    strokeColor="#1890ff" 
                    showInfo={false}
                    className="mb-3 md:mb-4"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between text-xs md:text-sm mb-2">
                    <span className="text-gray-400">ADA</span>
                    <span className="text-red-400">-2.1%</span>
                  </div>
                  <Progress 
                    percent={30} 
                    strokeColor="#ff4d4f" 
                    showInfo={false}
                  />
                </div>
              </div>
            </StyledCard>

            <StyledCard title="Recent Activity">
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center p-2 md:p-3 bg-gray-800 rounded">
                  <div>
                    <div className="text-white font-medium text-sm md:text-base">BTC Purchase</div>
                    <div className="text-gray-400 text-xs md:text-sm">2 hours ago</div>
                  </div>
                  <div className="text-green-400 text-sm md:text-base">+$1,250</div>
                </div>
                
                <div className="flex justify-between items-center p-2 md:p-3 bg-gray-800 rounded">
                  <div>
                    <div className="text-white font-medium text-sm md:text-base">ETH Sale</div>
                    <div className="text-gray-400 text-xs md:text-sm">5 hours ago</div>
                  </div>
                  <div className="text-red-400 text-sm md:text-base">-$850</div>
                </div>
                
                <div className="flex justify-between items-center p-2 md:p-3 bg-gray-800 rounded">
                  <div>
                    <div className="text-white font-medium text-sm md:text-base">Reward Claimed</div>
                    <div className="text-gray-400 text-xs md:text-sm">1 day ago</div>
                  </div>
                  <div className="text-green-400 text-sm md:text-base">+$320</div>
                </div>
                
                <div className="flex justify-between items-center p-2 md:p-3 bg-gray-800 rounded">
                  <div>
                    <div className="text-white font-medium text-sm md:text-base">ADA Investment</div>
                    <div className="text-gray-400 text-xs md:text-sm">2 days ago</div>
                  </div>
                  <div className="text-blue-400 text-sm md:text-base">+$500</div>
                </div>
              </div>
            </StyledCard>
          </ChartSection>

          <StyledCard title="Quick Actions" className="mt-4 md:mt-6">
            <QuickActionsGrid>
              <ActionButton className="bg-blue-600 hover:bg-blue-700">
                Invest Now
              </ActionButton>
              <ActionButton className="bg-green-600 hover:bg-green-700">
                Claim Rewards
              </ActionButton>
              <ActionButton className="bg-purple-600 hover:bg-purple-700">
                View History
              </ActionButton>
              <ActionButton className="bg-orange-600 hover:bg-orange-700">
                Settings
              </ActionButton>
            </QuickActionsGrid>
          </StyledCard>
        </Content>
      </DashboardContainer>
    </Layout>
  );
} 