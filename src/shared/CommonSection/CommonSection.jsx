import React from 'react'
import './common-section.scss'
import {Container, Row, Col} from 'reactstrap'

const CommonSection = ({title}) => {
  return (
    <section id='common'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1 className=' text-white text-4xl'>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection