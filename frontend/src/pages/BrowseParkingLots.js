import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const BrowseParkingLot = () => {
  const businesses = [
    {
      name: "The Beefy Beagle Barbecue",
      address: "123 Wagging Tail Drive, Staten Island, NY 10314",
    },
    {
      name: "Cereal Killer Café",
      address: "789 Crunchy Bowl Boulevard, Queens, NY 11385",
    },
    {
      name: "The Frisky Biscuit Bakery",
      address: "864 Naughty Nibbles Lane, Queens, NY 11432",
    },
    {
      name: "Guaca-holy Mole Mexican Grill",
      address: "135 Sacred Salsa Street, Brooklyn, NY 11215",
    },
    {
      name: "Jurassic Pork BBQ",
      address: "987 Dino Rib Road, Long Island City, NY 11101",
    },
    {
      name: "Latté Da Coffee House",
      address: "321 Sassy Sip Street, Bronx, NY 10465",
    },
  ];

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleClick = (business) => {
    setSelectedBusiness(business);
    setTimeout(() => setSelectedBusiness(null), 300);
  };

  return (
    <>
      <BusinessListWrapper>
        <h2>Choose a Parking Lot</h2>
        <ul>
          {businesses.map((business, idx) => (
            <li key={`${business.name}-${idx}`}>
              <BusinessLink
                as="button"
                onClick={() => handleClick(business.name)}
                selected={selectedBusiness === business.name}
              >
                {business.name}
                <br />
                <Address>{business.address}</Address>
              </BusinessLink>
            </li>
          ))}
        </ul>
      </BusinessListWrapper>
      <br /><br />
    </>
  );
};

const BusinessListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    color: rgb(10, 12, 138);
    text-align: center;
    padding-top:35px;
    padding-bottom:10px;
  }
`;

const fadeInOut = css`
  @keyframes fadeInOut {
    0% {
      background-color: #ffffff;
      color: #080963;
    }
    50% {
      background-color: #080963;
      color: #ffffff;
    }
    100% {
      background-color: #ffffff;
      color: #080963;
    }
  }
`;


const BusinessLink = styled(NavLink)`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #080963;
  border: 1px solid #080963;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 100%;
  display: block;

  ${({ selected }) => selected && fadeInOut}
  animation: ${({ selected }) => (selected ? "fadeInOut 0.3s" : "none")};

  &:hover {
    background-color: #080963;
    color: #ffffff;
    transition: background-color 0.3s, color 0.1s;
  }
`;

const Address = styled.span`
  font-size: 0.8rem;
  display: block;
  margin-top: 5px;
`;

export default BrowseParkingLot;