import { NextPage } from 'next';
import { ServiceLayout } from '@/component/service_layout';

const IndexPage: NextPage = function () {
  return <ServiceLayout title="Home">test</ServiceLayout>;
};

export default IndexPage;
