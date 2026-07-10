import PageContainer from '@/components/PageContainer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <PageContainer title={'Home'}>
      <div className="text-center">
        <h1>Hello World!</h1>
      </div>
    </PageContainer>
  );
}
