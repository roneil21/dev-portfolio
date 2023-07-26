import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";




const clientTestimony = [
  {
    id: 1,
    image: AVTR1,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque tincidunt ante, ac dictum odio pharetra mollis. Vestibulum sit amet nunc tortor. Pellentesque tincidunt id velit sit amet lobortis. Fusce laoreet vitae nulla in pulvinar.",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque tincidunt ante, ac dictum odio pharetra mollis. Vestibulum sit amet nunc tortor. Pellentesque tincidunt id velit sit amet lobortis. Fusce laoreet vitae nulla in pulvinar.",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque tincidunt ante, ac dictum odio pharetra mollis. Vestibulum sit amet nunc tortor. Pellentesque tincidunt id velit sit amet lobortis. Fusce laoreet vitae nulla in pulvinar.",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque tincidunt ante, ac dictum odio pharetra mollis. Vestibulum sit amet nunc tortor. Pellentesque tincidunt id velit sit amet lobortis. Fusce laoreet vitae nulla in pulvinar.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>


      <div className="container testimonials__container swiper swiper-wrapper">
      
        {clientTestimony.map(({ id, image, name, review }) => {
          return (
            <article className="testimonial" key={id}>
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
     
      </div>
      
    </section>
  );
}

export default Testimonials;
