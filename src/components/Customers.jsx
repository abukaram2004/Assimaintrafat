import React from 'react';
import '../styles/Customers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import personalImg1 from '../assets/images/person.jpeg';
import { Pagination } from 'swiper/modules';
import personalImg2 from '../assets/images/person2.jpeg'
import personalImg3 from '../assets/images/person3.jpeg'

const testimonials = [
  {
    name: 'John Doe',
    image: personalImg1,
    quote: 'Great experience working with this developer. Highly recommended!',
    stars: 5
  },
  {
    name: 'Jane Smith',
    image: personalImg2,
    quote: 'Professional and efficient, delivered everything on time.',
    stars: 4
  },
  {
    name: 'Ahmed Ali',
    image: personalImg3,
    quote: 'Outstanding service and amazing attention to detail.',
    stars: 5
  }
];

const Customers = () => {
  return (
    <section className="customers" id="customers">
      <h2>My Customers</h2>
    <Swiper
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  pagination={{ clickable: true }}
  modules={[Pagination]}
>
        {testimonials.map((customer, index) => (
          <SwiperSlide key={index}>
            <div className="customer-card">
              <img src={customer.image} alt={customer.name} className="customer-avatar" />
              <h3>{customer.name}</h3>
              <div className="stars">
                {'★'.repeat(customer.stars)}
                {'☆'.repeat(5 - customer.stars)}
              </div>
              <p className="quote">"{customer.quote}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Customers;
