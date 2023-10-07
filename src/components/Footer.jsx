export default function Footer() {
  const icons = [
    { icon: 'logo-instagram', link: 'https://www.instagram.com/' },
    { icon: 'logo-facebook', link: 'https://www.facebook.com/' },
    { icon: 'logo-tiktok', link: 'https://www.tiktok.com/' },
    { icon: 'logo-twitter', link: 'https://twitter.com/' },
  ];

  return (
    <div className='w-full bottom-0 left-0 bg-white shadow-lg' style={{ boxShadow: '0px -5px 5px rgba(0, 0, 0, 0.2)' }}>
      <div className='flex items-center justify-center px-5 py-5 md:px-10 space-x-5'>
        <h2 className="font-text text-3xl">Follow us</h2>
        {icons.map((icon, index) => (
          <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
            <ion-icon name={icon.icon} size="large" class="hover:text-red-500"></ion-icon>
          </a>
        ))}
      </div>
      <p className="my-1 text-center text-sm ">Copyright © 2023, Valentina Assef</p>
    </div>
  );
}