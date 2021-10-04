import { Card, Col, Row, Spinner } from "react-bootstrap"
import { useEffect, useState } from 'react';
import Services from '../Services/Services'
import Background from "../Carousel/Background"
import Meta from '../../components/Meta/Meta'

const Home = () => {
  const pageTitle = 'Home'
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./db.JSON')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <span>
        <Meta title={pageTitle}/>
        <Background></Background>
        <div className="item-container mb-4 mt-4">
          <div className="mt-2">
            <Row>
              <h2>Popular services</h2>
            </Row>
            {
              services.length === 0 ?
                <Spinner animation="border" />
                :
                <Row xs={1} md={3} className="g-4">
                  {
                    services.slice(0, 5).map(service => <Services key={service.id} service={service}></Services>)
                  }
                </Row>
            }
          </div>
        </div>
        <div className="pb-4"></div>
    </span>
  )
}

export default Home