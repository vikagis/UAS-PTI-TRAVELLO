import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-900 py-10">
      {' '}
      {/* Added background color and adjusted padding */}
      <div className="px-9 max-w-screen-2xl mx-auto">
        {' '}
        {/* Removed unnecessary padding */}
        <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-start">
          <div className="text-3xl text-white">
            {' '}
            {/* Changed text color to white */}
            See you in <span className="font-extrabold">Sumatera!</span>
          </div>
          <div className="justify-center md:justify-end w-full">
            <p className="text-lg text-center md:text-right text-gray-300 font-bold mb-4">PT. Travello Jelajah Nusantara</p>
            <div className="flex justify-center md:justify-end">
              <a href="https://github.com/vikagis" className="text-sm text-gray-400 mr-2">
                <Icon className="inline-block mr-1 text-2xl" icon="mdi:github" />
              </a>
              <a href="https://instagram.com/vikaagisella" className="text-sm text-gray-400 mr-2">
                <Icon className="inline-block mr-1 text-2xl" icon="mdi:instagram" />
              </a>
              <a href="https://twitter.com/VikaGisella" className="text-sm text-gray-400 mr-2">
                <Icon className="inline-block mr-1 text-2xl" icon="mdi:twitter" />
              </a>
              <a href="https://wa.me/62111580288" className="text-sm text-gray-400 mr-2">
                <Icon className="inline-block mr-1 text-2xl" icon="mdi:whatsapp" />
              </a>
              <a href="https://www.linkedin.com/in/vika-gisella-bba14b2b5/" className="text-sm text-gray-400 mr-2">
                <Icon className="inline-block mr-1 text-2xl" icon="mdi:linkedin" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-12">
          {' '}
          Made by Vika using{' '}
          <a href="https://itshiroto.my.id" className="hover:text-orange-400 transition-all" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
