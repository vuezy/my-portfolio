import { useState, useEffect } from 'react'
import AOS from 'aos'
import { Container, Card } from 'react-bootstrap'
import styles from '../assets/styles/ProjectCard.module.css'
import { ReactComponent as ChevronLeftIcon } from '../assets/icons/chevron-left.svg'
import { ReactComponent as ChevronRightIcon } from '../assets/icons/chevron-right.svg'
import { ReactComponent as GithubLogo } from '../assets/icons/github.svg'

const ProjectCard = ({ img, title, content, link }) => {
  const [currentImg, setCurrentImg] = useState(0)
  useEffect(() => {
    AOS.init()
  }, [])

  const changeImg = (chevronType) => {
    if (chevronType === 'left') {
      setCurrentImg(currentImg => currentImg === 0 ? img.length - 1 : currentImg - 1)
    }
    else if (chevronType === 'right') {
      setCurrentImg(currentImg => currentImg === img.length - 1 ? 0 : currentImg + 1)
    }
  }

  return (
    <Card className={styles.card} data-aos="fade-up" data-aos-duration="800">
      <Container className="bg-dark p-0 position-relative">
        <Container as="button" className={styles.chevronLeft} onClick={() => changeImg('left')}>
          <ChevronLeftIcon />
        </Container>
        <Card.Img variant="top" src={img[currentImg]} className={styles.img} />
        <Container as="button" className={styles.chevronRight} onClick={() => changeImg('right')}>
          <ChevronRightIcon />
        </Container>
      </Container>
      <Card.Body className="position-relative">
        <Card.Title className={styles.title}>{title}</Card.Title>
        {content}
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
          <div className={styles.logo}><GithubLogo /></div>Github Repo
        </a>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard