import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './news-letter.scss'
import newsLetterImg from '../../assets/tour-images/male-tourist.png'

const NewsLetter = () => {
  return (
    <section id='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="newsletter__content py-12">
              <h2>Đăng ký ngay để được tư vấn</h2>
              <div className='newsletter__input relative my-5'>
                <input className='w-full shadow py-3 px-2 outline-none' type="text" placeholder='Nhập email của bạn'/>
                <button className='btn newsletter__btn text-white absolute right-0 top-1/2 -translate-y-1/2 mr-2 px-3'>Gửi</button>
              </div>
              <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, illum corporis nulla iure neque doloribus delectus. Cum laborum placeat aliquam aperiam voluptatem enim nostrum omnis ad, quia facilis eligendi sit.</p>
            </div>
          </Col>
          <Col lg='6'>
            <div className='newsletter__img'>
              <img className=' w-full' src={newsLetterImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewsLetter