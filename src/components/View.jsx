import React from "react";

export default function View() {
  return (
    <>
      <div className="portfolio">
        <iframe
          src="https://portfolio.cherrydub.com"
          frameBorder="0"
          height="100%"
          width="100%"
          title="portfolio"
        ></iframe>
        <span>
          <a target="_blank" href="https://portfolio.cherrydub.com">
            <button>
              <i class="las la-archive"></i>Port
            </button>
          </a>
        </span>
      </div>
      <div className="blog">
        <iframe
          src="https://blog.cherrydub.com"
          frameBorder="0"
          height="100%"
          width="100%"
          title="blog"
        ></iframe>
        <span>
          <a target="_blank" href="https://blog.cherrydub.com">
            <button>
              <i class="las la-file-alt"></i>Blog
            </button>
          </a>
        </span>
      </div>
      <div className="windows98">
        <iframe
          src="https://98.cherrydub.com"
          frameBorder="0"
          height="100%"
          width="100%"
          title="windows 98"
        ></iframe>
        <span className="spanbox">
          <a target="_blank" href="https://98.cherrydub.com">
            <button>
              <i class="lab la-windows"></i>98
            </button>
          </a>
        </span>
      </div>
    </>
  );
}
