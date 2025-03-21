interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '아직 수정중입니다.',
    description: `수정 중이니 조금 기다려 주십시오.`,
    // imgSrc: '/static/images/google.png',
    // href: 'https://www.google.com',
    imgSrc: '',
    href: '',
  }
]

export default projectsData
