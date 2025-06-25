import React, { useState } from "react";
import Head from "next/head";
import Layout from "components/Layout";
import Breadcrumb from "components/Breadcrumb";
import { Form, Input, Button, message } from "antd";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ContactContainer = styled.div`
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
  ${tw`text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto text-center mb-8 md:mb-12 px-4`}
`;

const ContactForm = styled.div`
  ${tw`max-w-2xl mx-auto bg-gray-900 p-4 md:p-8 rounded-lg border border-gray-800`}
`;

const ContactInfo = styled.div`
  ${tw`mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8`}
`;

const InfoCard = styled.div`
  ${tw`text-center p-4 md:p-6 bg-gray-900 rounded-lg border border-gray-800`}
`;

const InfoTitle = styled.h3`
  ${tw`text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400`}
`;

const InfoText = styled.p`
  ${tw`text-sm md:text-base text-gray-400`}
`;

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      console.log("Form values:", values);
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact - Metamine</title>
        <meta name="description" content="Get in touch with the Metamine team" />
      </Head>
      
      <ContactContainer>
        <Content>
          <Breadcrumb />
          <Title>Contact Us</Title>
          <Description>
            Have questions or need support? We&apos;re here to help. 
            Send us a message and we&apos;ll get back to you as soon as possible.
          </Description>

          <ContactForm>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              <Form.Item
                name="name"
                label={<span className="text-white text-sm md:text-base">Name</span>}
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input 
                  size="large" 
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Your name"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="text-white text-sm md:text-base">Email</span>}
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" }
                ]}
              >
                <Input 
                  size="large" 
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="your.email@example.com"
                />
              </Form.Item>

              <Form.Item
                name="subject"
                label={<span className="text-white text-sm md:text-base">Subject</span>}
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input 
                  size="large" 
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="What is this about?"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={<span className="text-white text-sm md:text-base">Message</span>}
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea 
                  rows={4}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Your message..."
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                  className="w-full h-10 md:h-12 bg-blue-600 hover:bg-blue-700 border-none text-sm md:text-base"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </ContactForm>

          <ContactInfo>
            <InfoCard>
              <InfoTitle>📧 Email</InfoTitle>
              <InfoText>support@metamine.com</InfoText>
            </InfoCard>

            <InfoCard>
              <InfoTitle>🌐 Website</InfoTitle>
              <InfoText>www.metamine.com</InfoText>
            </InfoCard>

            <InfoCard>
              <InfoTitle>⏰ Response Time</InfoTitle>
              <InfoText>Within 24 hours</InfoText>
            </InfoCard>
          </ContactInfo>
        </Content>
      </ContactContainer>
    </Layout>
  );
} 