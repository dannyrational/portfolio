import SectionContainer from "./SectionContainer";
const socialIcon = [
  {
    id: 4,
    iconName: "icon-linkedin-squared",
    link: "https://www.linkedin.com/in/iamdanielrodas/",
  },
];
const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[350px] relative rounded-full"
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-top bg-cover"
                data-img-url="assets/img/profile_black_white.png"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Daniel <span>Rodas</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                Senior Web Developer focused on building modern, high performance web experiences and integrating AI into real world products.
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="mr-[8px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[20px] transition-all duration-300 hover:text-black flex items-center"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={`${item.iconName} text-[28px]`} />
                        <p className="font-bold">LinkedIn</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
