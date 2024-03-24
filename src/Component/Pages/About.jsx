import AboutImg from '../../assets/logo2.png';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img src={AboutImg} alt="" />
      <p>
        Kalyani is all about 92.5 fine silver jewellery.

        Kalyani by linisha verma is a collection of fine silver jewellery that uses moissanite polki to create stunning pieces of jewellery.
        Polki jewellery has always been one of the most important thing driving tradition and heritage india. KALYANI’S aim to make women feel comfortable in polki jewellery,to make every age to be happily in our jewellery with their roots, harking on their desire for designs,looks & style in moissanite polki jewellery.
      </p>
      <p><h3>Craftmanship</h3>
        It is uniquely handcrafted by our skilled crafty eith detailed finishing in 92.5 fine silver with 1.0 micron. Each piece is unique & beauty lies in its imperfections and is handcrafted in india.</p>
      <p>
        <h3>CARE</h3>
        Avoid contact with moisture,perfume,nail polish removers, or hair spray . If wet dry overnight and store in a plastic box
      </p>
      <p style={{marginBottom:"2rem"}}>
        <h3>CUSTOMISATION</h3>
        Want custom jewellery as per your preferences?
        Get in touch via whatsapp + 919571641461
        Or by emailing info@kalyani.com
      </p>
    </div>
  )
}

export default About;