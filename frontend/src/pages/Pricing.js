import React from "react";
import styled from "styled-components";

const pricingData = [
  {
    title: "Parking Space Management",
    details: [
      { description: "Up to 40 spaces", price: "$45/month" },
      { description: "41-180 spaces", price: "$135/month" },
      { description: "181-450 spaces", price: "$270/month" },
      { description: "Additional camera", price: "$45/month" },
      { description: "License plate monitoring", price: "$90/month" },
    ],
  },
  {
    title: "Advertisement",
    details: [
      { description: "Cost per lot page advertised on", price: "$18/month per lot" },
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <AboutWrapper>
        <SectionHeader>Pricing</SectionHeader>
        {pricingData.map(({ title, details }, idx) => (
          <React.Fragment key={idx}>
            <SectionHeader>{title}</SectionHeader>
            <RoundedRectangle>
              <Table>
                <thead>
                  <tr>
                    <Th>Description</Th>
                    <Th>Price</Th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((detail, i) => (
                    <tr key={i}>
                      <Td>{detail.description}</Td>
                      <Td>{detail.price}</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </RoundedRectangle>
          </React.Fragment>
        ))}
      </AboutWrapper>
    </>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
`;

const RoundedRectangle = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 700px;
  margin-bottom: 1px;
`;

const SectionHeader = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(10, 12, 138);
  text-align: center;
`;

const AboutWrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background-color: #eeeeee;
`;

export default Pricing;