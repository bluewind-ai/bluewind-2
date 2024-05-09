import React from 'react';

const FirstIframe = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        src="https://us.posthog.com/embedded/9ZGMMDSYIa76GiI3zaAnNdlY3QrAKw"
      ></iframe>
    </div>
  );
};

const SecondIframe = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        allow="fullscreen"
        title="Embedded Content"
        src="https://us.posthog.com/embedded/gxjKcMCqwCoFGso_q-llXb376dvKDw"
      ></iframe>
    </div>
  );
};

const Community = () => {
  return (
    <div>
      <FirstIframe />
      {/* <SecondIframe /> */}
    </div>
  );
};

export default Community;
