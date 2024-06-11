import qs from 'qs';

const stringifyParams = (params: unknown) => qs.stringify(params, {
  encode: false,
  arrayFormat: 'comma'
});

export default stringifyParams;
