import Accordion from "react-bootstrap/Accordion"
import "./Accordion.css"
const AccordionComponent = () => {
    
  
    const faqs = [
      {
        title: 'What is ParkEZ?',
        content: 'ParkEZ is an innovative parking monitoring solution provider that offers a seamless parking experience for businesses, property owners, and customers. We provide an efficient platform for monitoring parking spaces, maximizing revenue, and offering local businesses advertising opportunities to reach potential customers.'
      },
      {
        title: 'How does ParkEZ work?',
        content: 'For businesses and property owners, ParkEZ uses AI and machine learning to monitor and analyze parking spaces, helping to identify illegal parking and ensure that spaces are utilized by patrons. Customers can use our website to check real-time parking availability at their favorite establishments using ParkEz.'
      },
      {
        title: 'What are the benefits of using ParkEZ for my business or property?',
        content: (
        <div>
        <p>ParkEZ offers several benefits, including:</p>
            <ul>
                <li>Efficient parking management and monitoring</li>
                <li>Maximization of revenue from parking spaces</li>
                <li>Minimization of crime and illegal parking</li>
                <li>Innovative advertising opportunities for local businesses</li>
                <li>Enhanced customer experience with real-time parking availability</li>
            </ul>
        </div>
        ),
      },
      {
        title: 'How much does it cost to use ParkEZ?',
        content: 'For businesses and property owners, ParkEZ operates on a monthly subscription basis. The exact cost depends on the size and specific needs of your property. For customers, our website is free to use. For advertising rates, please contact our advertising management group.'
      },
      {
        title: 'How do I report a problem or request support?',
        content: 'If you encounter any issues or require assistance, you can reach our customer support team through the website, or by email. Our dedicated team is available to address your concerns and provide timely resolutions.'
      },
      {
        title: 'How can I advertise my business on ParkEZ?',
        content: 'To advertise your business on ParkEZ, please contact our customer support team. They will guide you through the process of selecting ad placements, creating and uploading your advertisements, and monitoring their performance.'
      }
    ];
  
    

    return (
        <div>
          <div className="logo-container">
              <img src={require('../../../assets/images/logo.png')} alt="Logo" className="logo" />
          </div>
              <h1 className="page-title">Frequently Asked Questions</h1>
          <div className="container">
            <Accordion defaultActiveKey="0">
              {faqs.map(({title, content}, idx) => (

                <Accordion.Item eventKey={idx}>
                  <Accordion.Header>
                    {title}
                  </Accordion.Header>
                  <Accordion.Body>
                    {content}
                  </Accordion.Body>
                </Accordion.Item>
              ))}

            </Accordion>
          </div>
        </div>
      );    
  };
  
  export default AccordionComponent;