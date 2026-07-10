import { ParagraphTailwindClasses, Routes } from '@/common/constants/constants';
import PageContainer from '@/components/PageContainer';
import { WelcomeSteps } from '@/components/tutorial/steps';
import Tutorial from '@/components/tutorial/Tutorial';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test-tutorial')({
  component: RouteComponent,
});

const data = [
  {
    id: 'eco-house-svg',
    title: 'Eco House',
  },
  {
    id: 'hq-svg',
    title: 'HQ',
  },
  {
    id: 'spotlight-svg',
    title: 'Spotlight',
  },
  {
    id: 'hub-tv-svg',
    title: 'Hub TV',
  },
];

function RouteComponent() {
  return (
    <PageContainer title={'Simple App Tour'}>
      {/* <PositionPicker imageSrc={gHandOnWaist} /> */}
      <Tutorial isOpen={true} steps={WelcomeSteps} />
      <div className="flex flex-row gap-3 items-center justify-center h-[50vh]">
        {data.map((item) => (
          <a href={Routes['TEST TUTORIAL']} key={item.id}>
            <div
              id={item.id}
              className={`bg-gray-200 p-4 rounded-lg hover:cursor-pointer ${ParagraphTailwindClasses}`}
            >
              {item.title}
            </div>
          </a>
        ))}
      </div>
    </PageContainer>
  );
}
