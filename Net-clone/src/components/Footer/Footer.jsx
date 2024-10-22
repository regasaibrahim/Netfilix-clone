import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
            <div>
                <div className='flex flex-row gap-4'>
                    <FacebookRoundedIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>

                </div>
                <ul className='flex flex-col gap-2'>
                    <li>Audio Description </li>
                    <li>Investor Relations</li>
                    <li>Legal Notice </li>
                    <li className='border-2 text-center border-gray-100 rounded-md w-[100px]'>servise Code </li>
                    <li>&copy; 1997-2024 Netfilix Inc</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Help Center </li>
                    <li>Jobs </li>
                    <li>Cokies Performance</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>
                    Corporate Information</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                    Media Center </li>
                    <li>Privacy</li>
                    <li>
                    Contact Us</li>
                </ul>
            </div>

        </div>

    </div>
    
    </>
  )
}

export default Footer
