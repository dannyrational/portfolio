const Intro = () => {
  return (
    <div className="author_intro flex flex-col md:flex-row items-center gap-8 md:gap-[50px]">
      <div className="top_author_image shrink-0 h-auto relative w-full md:w-auto">
        <img
          className="w-full md:max-w-[375px] mx-auto md:mx-0"
          src="assets/img/profile_bw_matte.png"
          alt="image"
        />
      </div>
      <div className="author_info">
        <div className="about_title w-full h-auto border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
          <h3 className="text-[22px] font-bold">Daniel Rodas</h3>
          <span>Senior Frontend Developer</span>
        </div>
        <div className="about_text w-full h-auto border-solid border-[#DFDFDF] border-b">
          <p className="mb-[11px]">
            Hi, I’m Daniel Rodas. I’ve been building web products professionally
            since 2019, focusing on modern, high performance experiences that
            feel great to use and hold up in production.
          </p>
          <p>
            A big part of my work is taking an idea from scratch and turning it
            into something real and reliable. I enjoy owning the full build,
            from planning the architecture and setting up APIs to shipping a
            polished UI and keeping performance tight. My day to day stack
            includes React and Next.js along with PHP and JavaScript, and I
            still do plenty of hands on work with WordPress custom themes and plugins.
          </p>
          <p className="mt-[11px] pb-[20px] mb-[30px]">
            More recently, I’ve also been integrating AI into projects
            to make products smarter and workflows faster. Whether it’s adding
            AI powered features to an existing platform or building something
            new from the ground up, I focus on clean architecture, maintainable
            code, and solutions that are easy to support long term.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
