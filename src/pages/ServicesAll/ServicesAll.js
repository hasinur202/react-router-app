import { Row, Spinner } from "react-bootstrap"
import { useEffect, useState } from 'react';
import Services from '../Services/Services'
import Meta from '../../components/Meta/Meta'

const ServicesAll = () => {
  const pageTitle = 'Services'
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./db.JSON')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <span>
        <Meta title={pageTitle}/>
        <div className="item-container mb-4 pt-2">
          <div>
            <Row>
              <h2>All Services</h2>
            </Row>
            {
              services.length === 0 ?
                <Spinner className="mb-4" animation="border" />
                :
                <Row xs={1} md={3} className="g-4">
                  {
                    services.map(service => <Services key={service.id} service={service}></Services>)
                  }
                </Row>
            }
          </div>
        </div>
        <div className="pb-4"></div>
    </span>
  )
}

export default ServicesAll