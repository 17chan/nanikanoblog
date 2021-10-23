import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'nanikanoblog',  // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: 'f84df955-80d6-40f6-9728-d9a1aa9496a5',
});