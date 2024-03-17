import Image from "next/image";

function LandingCard() {
  return (
    <main className='flex flex-col items-center h-screen mx-5'>
      <div className='border rounded-md shadow-md border-white dark:border-[#31363F] dark:bg-[#31363F] w-fit max-w-5xl p-10 mt-20 flex flex-col md:flex-row items-center'>
        <div className='order-2 md:order-1 md:text-left md:mr-4 mb-4 md:mb-0'>
          <h1 className='head_text text-left'>Hi, I&apos;m <span className='gradient_text'>Colin</span></h1><br></br>
          <p className='lg:max-w-5xl dark:text-white'>I&apos;m a passionate front-end developer who loves creating responsive web designs and solving problems.</p><br></br>
          <div className='flex max-h-10'>
          <button className='mt-1 rounded-lg flex text-center svg_hover' onClick={() => window.location.href = 'https://github.com/colinguinane1'}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github-filled dark:stroke-white" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor" />
</svg></button>
  
   {/* linkedin button */}
<button onClick={() => window.location.href = "https://linkedin.com/in/colinguinaneCA"}className='-mt-[7.5px] svg_hover rotate_up px-0 '>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M8 11l0 5" />
    <path d="M8 8l0 .01" />
    <path d="M12 16l0 -5" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
</button>

{/* source code button*/}
        </div><br></br> 
        <button onClick={() => window.location.href = 'https://github.com/colinguinane1/PortfolioNEXT'}className='button_hover flex bg-blue-600 p-2 px-3 rounded-full text-white font-bold'>Source Code<svg className='mt-[2px] pl-1'xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l14 0" />
  <path d="M15 16l4 -4" />
  <path d="M15 8l4 4" />
</svg></button>
        </div>
        <div className='order-1 md:order-2'>
          <Image src="/hero.jpg" width={200} height={200} className='rounded-full border-2 border-black dark:border-white' alt="pfp" />
        </div>
      </div>
    </main>
  );
}

export default LandingCard;