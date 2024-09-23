import React, { useEffect, useRef } from 'react'

export default function View () {
  const portfolioRef = useRef(null)
  const blogRef = useRef(null)
  const windows98Ref = useRef(null)

  useEffect(() => {
    // Function to trigger hover effect on a specific div after a delay
    const triggerHover = elementRef => {
      if (elementRef.current) {
        elementRef.current.classList.add('hovered')

        // Set a timeout to remove the "hovered" class after a certain duration
        setTimeout(() => {
          elementRef.current.classList.remove('hovered')
        }, 1000) // Adjust the duration based on your design
      }
    }

    // Set initial delay
    let delay = 3500 // Set the delay time in milliseconds

    // Trigger hover effect on each div after a delay
    setTimeout(() => {
      triggerHover(portfolioRef)
    }, delay)

    delay += 1000 // Increase the delay for the next div

    setTimeout(() => {
      triggerHover(blogRef)
    }, delay)

    delay += 1000 // Increase the delay for the next div

    setTimeout(() => {
      triggerHover(windows98Ref)
    }, delay)
  }, [])

  return (
    <>
      <div className='portfolio' ref={portfolioRef}>
        <iframe
          src='https://portfolio.chriscoding.xyz'
          frameBorder='0'
          height='100%'
          width='100%'
          title='portfolio'
        ></iframe>
        <span>
          <a target='_blank' href='https://portfolio.chriscoding.xyz'>
            <button>
              <i class='las la-archive'></i>Portfolio
            </button>
          </a>
        </span>
      </div>
      <div className='blog' ref={blogRef}>
        <iframe
          src='https://chriswiz.vercel.app'
          frameBorder='0'
          height='100%'
          width='100%'
          title='blog'
        ></iframe>
        <span>
          <a target='_blank' href='https://chriswiz.vercel.app'>
            <button>
              <i class='las la-file-alt'></i>Minimal
            </button>
          </a>
        </span>
      </div>
      <div className='windows98' ref={windows98Ref}>
        <iframe
          src='https://98.chriscoding.xyz'
          frameBorder='0'
          height='100%'
          width='100%'
          title='windows 98'
        ></iframe>
        <span className='spanbox'>
          <a target='_blank' href='https://98.chriscoding.xyz'>
            <button>
              <i class='lab la-windows'></i>98
            </button>
          </a>
        </span>
      </div>
    </>
  )
}
