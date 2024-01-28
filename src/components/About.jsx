import { useEffect } from 'react'
import AOS from 'aos'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Contact from './Contact'
import styles from '../assets/styles/About.module.css'
import Profile from '../assets/images/profile.jpg'

const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Container fluid className={styles.container}>
      <Row className="align-items-center justify-content-center justify-content-sm-between">
        <Col xs={8} sm={5} md={4} className={styles.profile} data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" data-aos-once="true">
          <Image src={Profile} width="100%" />
        </Col>
        <Col xs={12} sm={6} md={7} className="p-0" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1 className={styles.name}>SHANE CHRISTIAN KWOK</h1>
          <hr className={styles.line} />
          <p className={styles.aboutMe}>
            I am a 20-year-old Computer Science student (currently in the sixth semester) at Universitas Prima Indonesia.
            Ever since I started my coding journey in high school, I have always loved to learn something new related to programming and hone my problem solving skill.
            I am a determined, hardworking, and passionate person. I want to gain more knowledge and experience by working in team.
            Additionally, I have multiple gold and silver medals as the achievements acquired from several computer and informatics competitions I participated in 
            (one of them is Olimpiade Sains Nasional at regency stage).
          </p>
          <div className={styles.contacts1} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
            <Contact />
          </div>
        </Col>
      </Row>
      <Row className={styles.contacts2} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
        <Contact />
      </Row>
    </Container>
  )
}

export default About