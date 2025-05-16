import SocialButton from './SocialButton'

const Footer = () => {
  return (
    <footer
      className='py-3'
    >
      <div
        className='flex items-center justify-center gap-10'
      >
        <div className='flex flex-col items-center gap-1'>
          <p
            className='text-sm text-white'
          >Mimmi Eriksson</p>
          <ul
            className='flex gap-2'
          >
            <SocialButton link='https://www.linkedin.com/in/mimmi-aj-eriksson/' icon='/assets/linkedin-btn.svg' text='LinkedIn profile' />
            <SocialButton link='https://github.com/mimmi-eriksson' icon='/assets/github-btn.svg' text='GitHub profile' />
          </ul>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <p
            className='text-sm text-white'
          >Malin Lundgren</p>
          <ul
            className='flex gap-2'
          >
            <SocialButton link='https://www.linkedin.com/in/malin-elisabeth-lundgren/' icon='/assets/linkedin-btn.svg' text='LinkedIn profile' />
            <SocialButton link='https://github.com/MalLunBar' icon='/assets/github-btn.svg' text='GitHub profile' />
          </ul>
        </div>
      </div>
    </footer >
  )
}

export default Footer