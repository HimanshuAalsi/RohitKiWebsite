import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { FiBook, FiLock} from 'react-icons/fi';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';

const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">

                     <HomeSingleFeature icon={<FiBook />} title="Graphic Design" />
                     <HomeSingleFeature icon={<FaLightbulb />} title="Web Design" />
                     <HomeSingleFeature icon={<BsHouseDoor />} title="Branding" />
                     <HomeSingleFeature icon={<IoDocumentTextOutline />} title="UI/UX Design" />
                     <HomeSingleFeature icon={<FiLock />} title="Print Design" />
                     <HomeSingleFeature icon={<FaRibbon />} title="Packaging Design" />
                     {/* <HomeSingleFeature icon={<FaRibbon />} title="Social Media Graphics" />
                     <HomeSingleFeature icon={<FaRibbon />} title="Illustration" /> */}

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;