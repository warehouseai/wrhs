const status = {
  pkg: '@wrhs/warehouse',
  env: 'dev',
  version: '0.7.1-3',
  previousVersion: '0.7.1-2',
  error: false,
  createDate: '2018-07-11T00:32:53.865Z',
  updateDate: '2018-07-11T00:32:54.049Z',
  complete: true
};

const statusError = {
  pkg: '@wrhs/warehouse',
  env: 'dev',
  version: '0.7.1-3',
  previousVersion: '0.7.1-2',
  error: true,
  createDate: '2018-07-11T00:32:53.865Z',
  updateDate: '2018-07-11T00:32:54.049Z',
  complete: false
};

const statusEvent = [{
  pkg: '@wrhs/warehouse',
  env: 'dev',
  version: '0.7.1-3',
  locale: 'en-US',
  message: 'built a thing',
  details: 'a thing was built',
  error: false,
  createDate: '2018-07-11T00:32:53.865Z',
  eventId: 'd2177dd0-eaa2-11de-a572-001b779c76e3'
}, {
  pkg: '@wrhs/warehouse',
  env: 'dev',
  version: '0.7.1-3',
  locale: 'en-US',
  message: 'built some other thing',
  details: 'another thing was built',
  error: false,
  createDate: '2018-07-11T00:32:00.865Z',
  eventId: 'd2177dd0-r2d2-11de-a572-001b779c76e3'
}, {
  pkg: '@wrhs/warehouse',
  env: 'dev',
  version: '0.7.1-3',
  locale: 'de',
  message: 'built de thing',
  details: null,
  error: false,
  createDate: '2018-07-11T00:33:00.000Z',
  eventId: 'd2177dd0-r2d2-11de-a572-001b779c76e3'
}];

module.exports = {
  status,
  statusError,
  statusEvent
};
