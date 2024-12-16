import Hero from '@/components/Hero'
import Testimonial from '@/components/Testimonial'
import Content from '@/components/Content'
import Parentsponsier from '@/components/Sponsierpicture/Sponsier'

export default function Home() {
  return (
  <>
  <Hero
  heading='Get More Done with whitepace'
  para='Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks'
  button='Try Whitepace free'
  />
 <Testimonial/>
  <Content />
  <Parentsponsier/> 
  </>
  );
}