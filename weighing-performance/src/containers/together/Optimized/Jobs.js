import { memo } from 'react';

const Jobs = memo(({ jobs = [] }) => (
  <div>
    {jobs.map((jobInfo) => (
      <div key={jobInfo.id}>{JSON.stringify(jobInfo)}</div>
    ))}
  </div>
));

export default Jobs;
