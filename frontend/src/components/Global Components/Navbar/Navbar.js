import React, { useEffect, useState } from 'react';
import NavItem from "./NavItem";
import Dropdown from 'react-bootstrap/Dropdown';
import { 
    LotOperatorUrls, 
    AdvertiserUrls, 
    CustomerSupportUrls, 
    LotSpecialistUrls, 
    AdvertisingSpecialistUrls, 
    AccountantUrls,
    PublicUrls 
} from "../../../utils/urls";
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const Navbar = () => {
    const logoutButtonStyle = {
        backgroundColor: "#007BFF",
        borderRadius: "5px",
        color: "#FFF",
        padding: "5px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    const [userType, setUserType] = useState(null);
    const [urls, setUrls] = useState([]);
    const handleLogout = () => {
        axios.post(API_URL + "auth/logout", {}, { withCredentials: true })
            .then((response) => {
                // // Delete the cookie from the frontend
                // document.cookie = "token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                // setUserType(null);  // Reset user type after logout
                setTimeout(() => {
                    window.location.href = '/';  // Redirect to home/public page after a delay
                }, 200);  // Delay of 1 second
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });

    };
    
    
    

    useEffect(() => {
        axios.get(API_URL + "auth/me", { withCredentials: true })
        .then((res) => {
            setUserType(res.data.entitlement_category);
        })
        .catch((err) => {
        });
    }, []);  
    

    useEffect(() => {
        switch (userType) {
            case 'CUSTOMER_SUPPORT':
                setUrls(CustomerSupportUrls);
                break;
            case 'LOT_SPECIALIST':
                setUrls(LotSpecialistUrls);
                break;
            case 'ADVERTISING_SPECIALIST':
                setUrls(AdvertisingSpecialistUrls);
                break;
            case 'ACCOUNTANT':
                setUrls(AccountantUrls);
                break;
            case 'ADVERTISERS':
                setUrls(AdvertiserUrls);
                break;
            case 'BUSINESS':
                setUrls(LotOperatorUrls);
                break;
            default:
                setUrls(PublicUrls);
                break;
        }
    }, [userType]);

    return (
        <>
            <ul className="flex-right">
                {urls.map(({path, text}, idx) => (
                    <NavItem path={path} text={text} key={`${idx}`} />
                ))}
                {userType ? (
                    <li onClick={handleLogout} style={{ ...logoutButtonStyle, cursor: 'pointer' }}>
                        Logout
                    </li>
                ) : (
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Login
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/login/employee" className={({isActive}) => isActive ? "active" : "" }>
                                    Employee
                                </Dropdown.Item>
                                <Dropdown.Item href="/login/advertisers" className={({isActive}) => isActive ? "active" : "" }>
                                    Advertiser
                                </Dropdown.Item>
                                <Dropdown.Item href="/login/business" className={({isActive}) => isActive ? "active" : "" }>
                                    Business
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Navbar;