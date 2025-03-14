import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Slider from "react-slick";

const WeeklySpecials = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "repeating/weekly-specials/1.0 Military Mondays.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 504, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "repeating/weekly-specials/2.0 Serenity Tuesdays.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 504, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "repeating/weekly-specials/3.0 Wellness Wednesday.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 504, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(
        relativePath: { eq: "repeating/weekly-specials/4.0 Therapeutic Thursdays.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 504, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "repeating/weekly-specials/5.0 Perfect Glow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 504, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      prev: file(relativePath: { eq: "repeating/weekly-specials/arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 48, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      prevHover: file(relativePath: { eq: "repeating/weekly-specials/hover-arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 48, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    dotsClass: "conditions-dots",
    slidesToShow: 1.3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "conditions-slider",
    customPaging: function (i) {
      return (
        <p className="text-base font-bold leading-[20px] font-heading ">{sliderItems[i].heading}</p>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const sliderItems = [
    {
      heading: "Military Mondays",
      subText: (
        <>
          <p>$10 off any service 1 hour or more</p>
          <p>
            Active or retired military only. Must show ID. Special does not apply to spouses,
            children, or other family members/friends.
          </p>
        </>
      ),
      image: data.image1,
    },
    {
      heading: "Serenity Tuesdays",
      subText: (
        <>
          <p>$10 off all packages</p>
        </>
      ),
      image: data.image2,
    },
    {
      heading: "Wellness Wednesdays",
      subText: (
        <>
          <p>$20 off any 60 Minute, 90 Minute, or 2 Hour Massage between 10 AM - 4 PM</p>
          <p>Must book before 4 PM</p>
        </>
      ),
      image: data.image3,
    },
    {
      heading: "Therapeutic Thursdays",
      subText: (
        <>
          <p>$15 off any 60 Minute, 90 Minute, or 2 Hour Couple's Massages between 11 AM - 5 PM</p>
          <p>Must book before 5pm.</p>
        </>
      ),
      image: data.image4,
    },
    {
      heading: "Perfect Glow",
      subText: (
        <>
          <p>$20 off any facial 60 minute or longer</p>
          <p>Available Monday-Thursday.</p>
        </>
      ),
      image: data.image5,
    },
  ];
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="group col-span-1 col-start-2 row-span-1 row-start-2 ml-[70%] grid w-fit cursor-pointer grid-cols-1 grid-rows-1 self-end"
        onClick={onClick}
      >
        <img
          src="../images/weekly-specials/hover-arrow.png"
          width={32}
          height={32}
          className="col-span-1 col-start-1 row-span-1 row-start-1 rotate-180 hidden group-hover:flex"
        />
        <img
          src="/images/weekly-specials/arrow.png"
          width={32}
          height={32}
          className="col-span-1 col-start-1 row-span-1 row-start-1 rotate-180 group-hover:hidden"
        />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="group z-20 col-span-1 col-start-2 row-span-1 row-start-2 ml-[65%] grid w-fit cursor-pointer grid-cols-1 grid-rows-1 self-end"
        onClick={onClick}
      >
        <img
          src="../images/weekly-specials/hover-arrow.png"
          width={32}
          height={32}
          className="col-span-1 col-start-1 row-span-1 row-start-1 hidden group-hover:flex"
        />
        <img
          src="/images/weekly-specials/arrow.png"
          width={32}
          height={32}
          className="col-span-1 col-start-1 row-span-1 row-start-1 group-hover:hidden"
        />
      </div>
    );
  }
  const sliderSectionClasses = "mx-auto my-20 flex  w-full overflow-hidden px-4 lg:my-32";
  return (
    <section className={sliderSectionClasses} data-testid="slider-section">
      <div className=" mx-auto flex w-full max-w-[1272px] flex-col items-center gap-x-[88px] gap-y-[88px]  ">
        <div className="flex w-full flex-col gap-y-6">
          <h2 className="text-start text-[36px] font-bold leading-[43.2px] text-typo-dark lg:text-start lg:text-[48px] lg:leading-[57.6px]">
            Bliss on a Budget: Our Weekly Specials
          </h2>
          <p className="slider-section-custom-text lg:max-w-1/2">
            *Available exclusively at our Hillcrest location. Cash payment required. Not valid with
            other promotions.
          </p>
          {/* <Button
            {...mainButton}
            otherClasses="w-fit self-start lg:w-fit"
            onClick={() => toggleFunc(mainButton.form, mainButton.tab)}
          /> */}
        </div>
        <Slider {...settings}>
          {sliderItems.map((sliderItem, index) => (
            <ItemCard item={sliderItem} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const ItemCard = ({ item }) => {
  return (
    <div className="mx-2 flex shrink-0 flex-col items-start gap-x-[72px] gap-y-4 lg:flex-row lg:items-center">
      <Img
        fluid={item.image.childImageSharp.fluid}
        priority={true}
        className="flex h-[320px] w-[250px] rounded-[16px] object-cover lg:h-[440px] lg:w-[344px]"
      />
      <div className="flex flex-col gap-y-6 lg:w-[344px]">
        <h3 className="text-start text-[24px] font-bold leading-[34px] text-typo-dark">
          {item.heading}
        </h3>
        <p className="slider-section-custom-text max-w-[343px] whitespace-normal">{item.subText}</p>
      </div>
    </div>
  );
};

export default WeeklySpecials;
