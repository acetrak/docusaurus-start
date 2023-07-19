import React from 'react';
import Layout from '@theme/Layout';
import PageLayout from '@site/src/components/PageLayout';

export default function MyReactPage() {
  return (
    <Layout>
      <PageLayout>
        <div className="tw-flex tw-flex-col tw-gap-3 tw-py-6">
          <h1>这是自定义的页面</h1>
          <p className="tw-leading-6 ">你可以再次修改</p>
        </div>
      </PageLayout>

    </Layout>
  );
}
