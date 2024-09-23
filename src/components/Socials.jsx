import React from 'react'

export default function Socials () {
  return (
    <div className='socials'>
      {/* <i class="las la-grin-stars"></i>  */}
      Chris Wisniewski © <span> </span>
      {/* <i class="las la-thumbtack"></i> */}
      <a
        title='GitHub'
        target='_blank'
        href='https://github.com/chriscodingxyz'
      >
        <i class='lab la-github'></i>
      </a>
      <a
        title='LinkedIn'
        target='_blank'
        href='https://www.linkedin.com/in/wisniewskichris/'
      >
        <i class='lab la-linkedin'></i>
      </a>
      <a
        title='CV/Resume'
        href='https://docs.google.com/document/d/1OPZ7AvdwdWzd3o_vCGJ2zDj6sVUScl-3fwgepYFS2-g/edit?usp=sharing'
      >
        <i class='las la-file-alt'></i>
      </a>
      <a title='E-mail' href='mailto:chriscoding@icloud.com'>
        <i class='las la-envelope'></i>
      </a>
    </div>
  )
}
