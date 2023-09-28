import React from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: "images/image-colton.jpg",
      name: "Colton Smith",
      client: "Verified Buyer",
      msg: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
    },
    {
      id: 2,
      img: "images/image-irene.jpg",
      name: "Irene Roberts",
      client: "Verified Buyer",
      msg: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
    },
    {
      id: 3,
      img: "images/image-anne.jpg",
      name: "Anne Walllace",
      client: "Verified Buyer",
      msg: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
    },
  ];

  const testimonialElement = testimonialData.map((item) => {
    return (
      <div className="testimonial" key={item.id}>
        <div className="user">
          <img src={item.img} alt="Profile" />
          <div>
            <p className="name">{item.name}</p>
            <p className="client">{item.client}</p>
          </div>
        </div>
        <p className="msg">{item.msg}</p>
      </div>
    );
  });
  return <section className="testimonials">{testimonialElement}</section>;
};

export default Testimonial;

//     Colton Smith
// Verified Buyer
// "We needed the same printed design as the one we had ordered a week prior.
// Not only did they find the original order, but we also received it in time.
// Excellent!"

// Irene Roberts
// Verified Buyer
// "Customer service is always excellent and very quick turn around. Completely
// delighted with the simplicity of the purchase and the speed of delivery."

// Anne Wallace
// Verified Buyer
// "Put an order with this company and can only praise them for the very high
// standard. Will definitely use them again and recommend them to everyone!"
