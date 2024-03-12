import React from 'react';
import { Typography, Box } from '@mui/material';
import bs7 from './bs7.jpg';
const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: 'fantasy' }} variant="h2">
           Booktopia Application
        </Typography>
        
      </Box>

      <div style={{
        backgroundImage: `url(${bs7})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100vh', // Adjust the height as needed
      }}>
        {/* Introduction */}
        <Typography sx={{ color: 'white' }}>
          Welcome to Booktopia – a haven for book lovers and literary enthusiasts. Since our
          establishment in 2010, we've been on a mission to connect readers with the magic of
          books, fostering a love for literature and creating a community that celebrates the written
          word.
        </Typography>

        {/* Our Story */}
        <Typography sx={{ color: 'white' }}>
          Our Story: At Booktopia, our story is one of passion and dedication. Over the years,
          we've evolved from a cozy corner bookstore to a literary hub in the heart of the city.
          From hosting book launches to organizing reading clubs, every chapter of our journey has
          been marked by the joy of sharing stories and creating memorable reading experiences.
        </Typography>

        {/* Our Team */}
        <Typography sx={{ color: 'white' }}>
          Our Team: Meet the faces behind Booktopia – a team of avid readers and bibliophiles
          committed to curating a diverse collection of books.
          <ul>
            <li>
              Sarah Miller - Founder and Head Curator<br />
              Fun Fact: Sarah once read 100 books in a single year!
            </li>
            <li>
              David Rodriguez - Customer Relations Manager<br />
              Fun Fact: David is a crossword puzzle champion.
            </li>
          </ul>
        </Typography >

        {/* Values and Commitments */}
        <Typography sx={{ color: 'white' }}>
          Values and Commitments: At Booktopia, we uphold values that reflect our deep love for
          literature and dedication to our customers. We are committed to providing not only quality
          books but also an exceptional shopping experience. Our principles revolve around fostering
          a welcoming and inclusive space for readers of all backgrounds.
        </Typography>

        {/* Community Engagement */}
        <Typography sx={{ color: 'white' }}>
          Community Engagement: Booktopia believes in giving back to the community. From hosting
          author talks to sponsoring local literary festivals, we actively contribute to the
          cultural tapestry of our city. Our partnerships with schools and libraries aim to promote
          literacy and a lifelong love for reading.
        </Typography>

        {/* Customer Testimonials */}
        <Typography sx={{ color: 'white' }}>
          Customer Testimonials:
          <ul>
            <li>"Booktopia is my go-to bookstore. The selection is fantastic, and the staff is
              incredibly knowledgeable." - Emily W.
            </li>
            <li>"I've never experienced such personalized service. The recommendations are always
              spot-on!" - James H.
            </li>
          </ul>
        </Typography>

        {/* Technology and Innovation */}
        <Typography sx={{ color: 'white' }}>
          Technology and Innovation: Explore our digital catalog and experience the convenience of
          our user-friendly website. Booktopia embraces technology to make discovering and
          purchasing your favorite books a seamless and enjoyable process.
        </Typography>

        {/* Contact Information */}
        <Typography sx={{ color: 'white' }}>
          Contact Information: For inquiries, partnerships, or just to say hello, reach out to us
          at contact@booktopia.com.
        </Typography>

        {/* Social Media Links */}
        <Typography sx={{ color: 'white' }}>
          Social Media Links: Connect with us on social media for updates, book recommendations,
          and community events:
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Typography>

        {/* Store Policies */}
        <Typography sx={{ color: 'aliceblue' }}>
          Store Policies: Read our policies on returns, exchanges, and shipping details{' '}
          <a href="#">here</a>.
        </Typography>

        {/* Aesthetic and Atmosphere */}
        <Typography sx={{ color: 'azure' }}>
          Aesthetic and Atmosphere: Step into Booktopia, where warm lighting and comfortable
          reading nooks create an inviting atmosphere. Browse through the shelves while enjoying the
          scent of fresh coffee from our in-store café.
        </Typography>

        {/* Call-to-Action */}
        <Typography sx={{ color: 'ThreeDFace' }}>
          Call-to-Action: Embark on a literary journey with Booktopia. Explore our curated
          collection, visit our Books page, and sign up for our newsletter to stay updated on the
          latest releases and exclusive offers. Thank you for being a part of the Booktopia
          community – where every page turns into an adventure!
        </Typography>
      </div>
    </div>
  );
};

export default About;
