export default function Footer() {
  return (
    <div className='h-auto shadow-md w-full bottom-0 left-0 bg-white opacity-80'>
      <div className='flex items-center justify-center px-5 py-2 md:px-10 space-x-5'>
        <h2 className="textoCarousel text-3xl">Follow us!</h2>
        <ion-icon name="logo-instagram" size="large" class="hover:text-amber-500"></ion-icon>
        <ion-icon name="logo-facebook" size="large" class="hover:text-amber-500"></ion-icon>
        <ion-icon name="logo-tiktok" size="large" class="hover:text-amber-500"></ion-icon>
        <ion-icon name="logo-twitter" size="large" class="hover:text-amber-500"></ion-icon>
      </div>
    </div>
  )
}

