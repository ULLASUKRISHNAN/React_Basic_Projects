import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubMenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et esse
            dolorum, optio, ipsum doloremque expedita inventore deserunt rem
            soluta enim hic quidem earum, laboriosam perferendis illo ullam
            eveniet corrupti! Voluptatibus obcaecati nisi eaque! Minus,
          </p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
