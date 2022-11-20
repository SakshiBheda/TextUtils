import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
       



          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/sakshi-bheda-838640201'
            target="_blank"
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/SakshiBheda'
            target="_blank"
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
          
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/invites/contact/?i=84rstvm8nku9&utm_content=9btbxb8'
            target="_blank"
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://www.youtube.com/channel/UCmGj_B2AFJ6LqPW6OQUMJVA/featured'
            target="_blank"
            role='button'
          >
            <MDBIcon fab icon='youtube' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 1, 12)' }}>
      Sakshi Bheda
      </div>
    </MDBFooter>
  );
}