import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4  text-gray-600'>
          <p>Founded in Paris in 1854, Louis Vuitton (LV) has evolved from a specialized trunk-making workshop into one of the world's most valuable and recognized luxury fashion houses. The brand's legacy began with its namesake founder, who revolutionized the travel industry by introducing lightweight, stackable flat-topped trunks at a time when only rounded luggage existed. </p>

          <p>Today, the brand is a global powerhouse under the LVMH conglomerate, celebrated for its iconic "LV" monogram—a pattern originally created in 1896 by Georges Vuitton as a tribute to his father and a measure against counterfeiting. Beyond its legendary leather goods, Louis Vuitton maintains its status as an elite status symbol through expert craftsmanship and high-profile collaborations with legendary artists like Takashi Murakami and modern designers like Virgil Abloh.</p>

          <b className='text-gray-800'>Our Mission</b>

          <p>Be Creative and Innovative: Constantly updating products while staying true to heritage.
            Deliver Excellence: Maintaining an uncompromising demand for quality in both products and services.
            Cultivate an Entrepreneurial Spirit: Fostering a decentralized organization that encourages risk-taking and individual initiative.
            Be Committed to Positive Impact: Integrating ethical, social, and environmental responsibilities into every step of the business. </p>


        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'Why'} text2={'CHOOSE US'} />
      </div>


      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>LV Prasad Eye Institute: A renowned eye care organization whose mission is to provide equitable and efficient eye care to underserved populations</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Las Vegas Rescue Mission: A non-profit dedicated to providing food, shelter, and recovery services to those in need in the Las Vegas area</p>
        </div>


        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Las Vegas Rescue Mission: A non-profit dedicated to providing food, shelter, and recovery services to those in need in the Las Vegas area</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
