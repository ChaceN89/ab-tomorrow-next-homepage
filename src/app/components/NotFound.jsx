/**
 * @file 404Page.jsx
 * @module Pages/NotFound
 * @desc Branded, responsive 404 error page with return CTA and on-brand visuals, placed inside the existing page layout structure.
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated Mar 31, 2025
 */

import React from 'react';
import HexSeparator from '../../components/common/hexSparator/HexSeparator';
import HexButton from '../../components/common/hexButton/HexButton';

export default function NotFound() {
  return (
    <div className='page-width mt-20 relative'>
      
      <div className='page flex flex-col items-center text-center '>
        <h1 className="text-6xl md:text-9xl font-extrabold text-primary-alt large-shadow relative mt-8">
          404
        </h1>
        
        <HexSeparator randomColors bottom rows={9} hexClass=' opacity-40' />
        <div className='space-y-6'>

          <h2 className="text-2xl mt-10 md:text-3xl font-semibold text-secondary-alt">
            Oops! You're off the map.
          </h2>

          <p className="text-lg opacity-80 max-w-xl">
            The page you’re looking for doesn’t exist or might’ve moved.
            But no worries — let’s get you back on track.
          </p>
          <div className='w-full flex items-center justify-center'>

          <HexButton color='accent' textColor='black' link={'/'} asLink={true} text='Return Home' >Return Home</HexButton>
          </div>
        </div>
      </div>
    </div>
  );
}
