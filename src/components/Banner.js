import { useState, useEffect } from "react";
import { Container, Row, col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.jpg";

export const Banner = ()=>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Engineer", "Web Developer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // const [index, setIndex] = useState(1);
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        // setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // setIndex(1);
        setDelta(500);
      } //else {
    //     setIndex(prevIndex => prevIndex + 1);
    //   }
    }
    return (

        <section className="banner" id="home">
            <Container>
                <table>
                <tr className="align-items-center">
                {/* <Row className="align-items-center"> */}
                    <td xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My Portfolio</span>
                        <h1>{`Hi I'm Vishal `}<span className="wrap">{text}</span></h1>
                        <p>As a versatile Software Engineer and Web Developer, I bring a robust skill set in C++ with data structures and algorithms, Java, Python, and web development using React. My experience encompasses building high-performance applications, implementing complex algorithms, and developing responsive web interfaces. I have successfully led projects that required in-depth problem-solving, efficient code optimization, and the creation of scalable, user-friendly software solutions. With a strong foundation in both front-end and back-end technologies, I excel in delivering comprehensive and effective software products</p>
                        <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </td>
                    <td xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </td>          
                {/* </Row> */}
                </tr>
                </table>
            </Container>
        </section>

    );
}