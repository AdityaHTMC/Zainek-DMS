import React from 'react'
const About = () => {
  return (
    <>
      {/* Page header part start*/}
      <section className='bg-dark'>
        <article className='container pt-2 pb-2'>
            <h2 className='text-light'>Contact Us</h2>
        </article>
      </section>
      {/* Page header part end*/}

      {/* Page Body part start */}
      <section style={{minHeight:"500px"}}>
        <article className='container pt-5 pb-5'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </article>
      </section>
      {/* Page Body part end */}
    </>
  )
}

export default About
