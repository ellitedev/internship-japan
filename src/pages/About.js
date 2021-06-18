import React from "react";
import Helmet from "react-helmet";
import { Card, ListGroup } from "react-bootstrap";

function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Card style={{ width: "70vw" }}>
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            We are Internship Japan, a growing group of people working
            voluntarily (Non-Profit Organization) for the mission to establish
            and support a new and better system to support internships in Japan.
            We believe that young and highly-motivated foreigners willing to
            work and study in Japan can be a great asset to Japan’s business
            world . Japanese language is one of the key points for an intern in
            Japan to be successful so we believe in a joint combination of
            internships and language education. Most importantly, we strongly
            believe that interns should not incur any costs for entering an
            internship program.
          </Card.Text>

          <Card.Title>Our mission:</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              Establish, promote and support a proper system of internships in
              Japan
            </ListGroup.Item>
            <ListGroup.Item>
              Create a legal, safe and worry-free environment for entities
              taking interns
            </ListGroup.Item>
            <ListGroup.Item>
              Help internship-seekers everywhere to find internships in Japan
              (free of charge)
            </ListGroup.Item>
            <ListGroup.Item>
              Support internship-seekers to study Japanese
            </ListGroup.Item>
            <ListGroup.Item>
              Grant scholarships to interns in need who wish to do an internship
              in the non-profit sector, start-ups and artistic or cultural
              activities
            </ListGroup.Item>
            <ListGroup.Item>
              Actively support women's empowerment in the business world
            </ListGroup.Item>
            <ListGroup.Item>
              Support and educate companies and organizations in Japan about the
              system of internships
            </ListGroup.Item>
            <ListGroup.Item>
              Support a network of opportunities for everyone, including
              networking events
            </ListGroup.Item>
            <ListGroup.Item>
              Create a long-lasting and worthwhile relationship between
              companies, organizations and interns
            </ListGroup.Item>
          </ListGroup>
          <Card.Text/>
          <Card.Text>
            Internship Japan officially registered as an Ippanshadanhōjin
            (一般社団法人), a form of non-profit organization in Japan, on the
            24th of September 2014. After 2 years of rapid growth, we are now
            ready to become even more professional with our work and support
            companies, organizations and internship-seekers from all over the
            world.
          </Card.Text>
          
          <Card.Text>
            Our association currently engages in promoting and educating about
            the internship system. We don’t assist or substitute anyone in the
            procedures of recruitment. Internship-seekers and companies deal
            with the procedures solely themselves and on their own
            responsibility.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
