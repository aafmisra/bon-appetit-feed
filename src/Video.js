import React from 'react'

function Video() {
    return (
        <iframe
          title="Gourmet Makes"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PLKtIunYVkv_RwB_yx1SZrZC-ddhxyXanh"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    );
}

export default Video