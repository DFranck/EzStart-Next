import FeaturesList from '@/components/features-list';
import GetStarted from '@/components/get-started';
import Hero from '@/components/hero';

export default function home() {
  console.log('Home');

  return (
    <>
      <Hero />
      <FeaturesList />
      <GetStarted />
    </>
  );
}
